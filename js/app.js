/**
 * 小粥AI写作 - 基于智谱GLM-4的专业AI写作助手
 * @version 2.0.0
 */

// 全局错误捕获
window.onerror = function(msg, url, line, col, error) {
    console.error('错误:', msg, '位置:', line + ':' + col);
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.style.display = 'none';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }
    return false;
};

// ========================================
// 配置与常量
// ========================================

const CONFIG = {
    API_BASE_URL: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    DEFAULT_MODEL: 'glm-4',
    MAX_HISTORY_ITEMS: 50,
    MAX_PROMPT_LENGTH: 2000,
    STORAGE_KEYS: {
        API_KEY: 'xiaozhou_api_key',
        MODEL: 'xiaozhou_model',
        HISTORY: 'xiaozhou_history',
        SETTINGS: 'xiaozhou_settings',
        THEME: 'xiaozhou_theme'
    }
};

// 写作类型配置
const WRITING_TYPES = {
    article: {
        id: 'article',
        name: '深度长文',
        icon: 'ri-article-line',
        desc: '专业文章与深度报告',
        color: 'blue',
        systemPrompt: `你是一位资深内容创作专家，擅长撰写结构清晰、逻辑严密的长篇文章。`,
        templates: [
            { name: '行业分析报告', icon: 'ri-bar-chart-box-line' },
            { name: '产品评测', icon: 'ri-smartphone-line' },
            { name: '技术解读', icon: 'ri-code-box-line' },
            { name: '观点评论', icon: 'ri-chat-quote-line' }
        ]
    },
    marketing: {
        id: 'marketing',
        name: '营销文案',
        icon: 'ri-megaphone-line',
        desc: '高转化广告与卖点',
        color: 'pink',
        systemPrompt: `你是一位资深营销文案专家，擅长撰写高转化率的营销内容。`,
        templates: [
            { name: '产品推广', icon: 'ri-shopping-bag-line' },
            { name: '促销活动', icon: 'ri-price-tag-3-line' },
            { name: '品牌故事', icon: 'ri-book-open-line' },
            { name: 'Landing Page', icon: 'ri-pages-line' }
        ]
    },
    social: {
        id: 'social',
        name: '社交媒体',
        icon: 'ri-smartphone-line',
        desc: '爆款内容与互动',
        color: 'purple',
        systemPrompt: `你是一位社交媒体运营专家，熟悉各大平台内容调性。`,
        templates: [
            { name: '小红书笔记', icon: 'ri-book-mark-line' },
            { name: '微博热帖', icon: 'ri-weibo-line' },
            { name: '朋友圈文案', icon: 'ri-chat-smile-2-line' },
            { name: '短视频脚本', icon: 'ri-video-line' }
        ]
    },
    work: {
        id: 'work',
        name: '职场办公',
        icon: 'ri-briefcase-line',
        desc: '邮件报告与总结',
        color: 'orange',
        systemPrompt: `你是一位职场沟通专家，擅长撰写专业、得体的商务文档。`,
        templates: [
            { name: '工作周报', icon: 'ri-calendar-check-line' },
            { name: '项目汇报', icon: 'ri-presentation-line' },
            { name: '商务邮件', icon: 'ri-mail-send-line' },
            { name: '会议纪要', icon: 'ri-file-list-3-line' }
        ]
    },
    creative: {
        id: 'creative',
        name: '创意写作',
        icon: 'ri-quill-pen-line',
        desc: '小说故事与剧本',
        color: 'green',
        systemPrompt: `你是一位创意写作大师，拥有丰富的想象力和叙事技巧。`,
        templates: [
            { name: '短篇故事', icon: 'ri-book-read-line' },
            { name: '小说开篇', icon: 'ri-git-branch-line' },
            { name: '剧本对话', icon: 'ri-movie-line' },
            { name: '诗歌散文', icon: 'ri-moon-clear-line' }
        ]
    },
    academic: {
        id: 'academic',
        name: '学术教育',
        icon: 'ri-graduation-cap-line',
        desc: '论文教案与研究',
        color: 'cyan',
        systemPrompt: `你是一位学术写作专家，熟悉各类学术规范和教学方法。`,
        templates: [
            { name: '论文摘要', icon: 'ri-file-text-line' },
            { name: '教案设计', icon: 'ri-stack-line' },
            { name: '文献综述', icon: 'ri-book-shelf-line' },
            { name: '研究报告', icon: 'ri-survey-line' }
        ]
    }
};

// ========================================
// 状态管理
// ========================================

const State = {
    currentType: 'article',
    currentLength: 'short',
    currentStyle: 'professional',
    temperature: 0.7,
    apiKey: '',
    model: CONFIG.DEFAULT_MODEL,
    history: [],
    isGenerating: false,
    
    init() {
        console.log('小粥正在初始化...');
        this.loadFromStorage();
        this.initUI();
        this.initEventListeners();
        this.renderTemplates();
        this.renderHistory();
        
        // 强制隐藏加载页面
        setTimeout(() => {
            const loader = document.getElementById('pageLoader');
            if (loader) {
                loader.classList.add('hidden');
                console.log('小粥已准备好');
            }
        }, 800);
    },
    
    loadFromStorage() {
        try {
            this.apiKey = localStorage.getItem(CONFIG.STORAGE_KEYS.API_KEY) || '';
            this.model = localStorage.getItem(CONFIG.STORAGE_KEYS.MODEL) || CONFIG.DEFAULT_MODEL;
            this.history = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.HISTORY) || '[]');
            const settings = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.SETTINGS) || '{}');
            this.currentLength = settings.length || 'short';
            this.currentStyle = settings.style || 'professional';
            this.temperature = settings.temperature || 0.7;
        } catch (e) {
            console.error('读取存储失败:', e);
        }
    },
    
    saveToStorage() {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.API_KEY, this.apiKey);
            localStorage.setItem(CONFIG.STORAGE_KEYS.MODEL, this.model);
            localStorage.setItem(CONFIG.STORAGE_KEYS.HISTORY, JSON.stringify(this.history));
            localStorage.setItem(CONFIG.STORAGE_KEYS.SETTINGS, JSON.stringify({
                length: this.currentLength,
                style: this.currentStyle,
                temperature: this.temperature
            }));
        } catch (e) {
            console.error('保存存储失败:', e);
        }
    },
    
    initUI() {
        // 更新类型选择
        document.querySelectorAll('.mode-card').forEach(card => {
            card.classList.toggle('active', card.dataset.type === this.currentType);
        });
        
        // 更新长度
        document.querySelectorAll('.segment').forEach(seg => {
            seg.classList.toggle('active', seg.dataset.value === this.currentLength);
        });
        const lengthVal = document.getElementById('lengthValue');
        if (lengthVal) {
            lengthVal.textContent = this.currentLength === 'short' ? '简洁' : 
                                   this.currentLength === 'medium' ? '标准' : '详细';
        }
        
        // 更新风格
        document.querySelectorAll('.style-chip').forEach(chip => {
            chip.classList.toggle('active', chip.dataset.style === this.currentStyle);
        });
        
        // 更新滑块
        const slider = document.getElementById('tempSlider');
        if (slider) {
            slider.value = this.temperature * 100;
            const tempVal = document.getElementById('tempValue');
            if (tempVal) tempVal.textContent = this.temperature.toFixed(1);
        }
        
        // 更新连接状态
        this.updateConnectionStatus();
    },
    
    updateConnectionStatus() {
        const status = document.getElementById('connectionStatus');
        if (!status) return;
        
        const dot = status.querySelector('.status-dot');
        const text = status.querySelector('.status-text');
        
        if (this.apiKey) {
            dot.className = 'status-dot online';
            text.textContent = '小粥已连接';
            status.classList.add('connected');
        } else {
            dot.className = 'status-dot offline';
            text.textContent = '未连接';
            status.classList.remove('connected');
        }
    },
    
    initEventListeners() {
        // 输入框计数
        const promptInput = document.getElementById('promptInput');
        promptInput?.addEventListener('input', (e) => {
            const count = e.target.value.length;
            const counter = document.getElementById('charCount');
            if (counter) counter.textContent = count;
        });
        
        // 温度滑块
        const tempSlider = document.getElementById('tempSlider');
        tempSlider?.addEventListener('input', (e) => {
            this.temperature = e.target.value / 100;
            const tempVal = document.getElementById('tempValue');
            if (tempVal) tempVal.textContent = this.temperature.toFixed(1);
            this.saveToStorage();
        });
        
        // 快捷键
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                generateContent();
            }
            if (e.key === 'Escape') {
                closeAllModals();
            }
        });
        
        // 点击外部关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.user-menu')) {
                document.getElementById('userMenu')?.classList.remove('active');
            }
        });
    },
    
    renderTemplates() {
        const type = WRITING_TYPES[this.currentType];
        
        // 侧边栏模板
        const container = document.getElementById('templateList');
        if (container) {
            container.innerHTML = type.templates.map(t => `
                <div class="template-item" onclick="useTemplate('${t.name}')">
                    <i class="${t.icon}"></i>
                    <span>${t.name}</span>
                </div>
            `).join('');
        }
        
        // 模板网格
        const grid = document.getElementById('templatesGrid');
        if (grid) {
            grid.innerHTML = type.templates.map(t => `
                <div class="template-card" onclick="useTemplate('${t.name}')">
                    <div class="template-card-icon">
                        <i class="${t.icon}"></i>
                    </div>
                    <div class="template-card-title">${t.name}</div>
                    <div class="template-card-desc">${t.desc || '快速模板'}</div>
                </div>
            `).join('');
        }
    },
    
    renderHistory() {
        const container = document.getElementById('historyList');
        const recentList = document.getElementById('recentList');
        const badge = document.getElementById('historyBadge');
        
        if (badge) {
            badge.textContent = this.history.length;
            badge.style.display = this.history.length > 0 ? 'flex' : 'none';
        }
        
        const historyHTML = this.history.length === 0 ? `
            <div class="empty-history">
                <div class="empty-icon"><i class="ri-time-line"></i></div>
                <p>暂无历史记录</p>
            </div>
        ` : this.history.map(item => `
            <div class="history-item" onclick="loadHistoryItem(${item.id})">
                <div class="history-icon" style="background: var(--gradient-${WRITING_TYPES[item.type]?.color || 'blue'})">
                    <i class="${item.typeIcon || 'ri-file-text-line'}"></i>
                </div>
                <div class="history-info">
                    <div class="history-title">${escapeHtml(item.prompt)}</div>
                    <div class="history-meta">${item.typeName} · ${formatTime(item.timestamp)}</div>
                </div>
            </div>
        `).join('');
        
        if (container) container.innerHTML = historyHTML;
        
        // 最近列表
        if (recentList) {
            const recent = this.history.slice(0, 5);
            recentList.innerHTML = recent.length === 0 ? `
                <div class="empty-mini"><i class="ri-inbox-line"></i><span>暂无记录</span></div>
            ` : recent.map(item => `
                <div class="recent-item" onclick="loadHistoryItem(${item.id})">
                    <div class="recent-icon"><i class="${item.typeIcon}"></i></div>
                    <div class="recent-info">
                        <div class="recent-title">${escapeHtml(item.prompt)}</div>
                        <div class="recent-meta">${formatTime(item.timestamp)}</div>
                    </div>
                </div>
            `).join('');
        }
    }
};

// ========================================
// 核心功能函数
// ========================================

function selectType(type) {
    State.currentType = type;
    State.initUI();
    State.renderTemplates();
}

function setLength(length) {
    State.currentLength = length;
    State.saveToStorage();
    State.initUI();
}

function selectStyle(element, style) {
    State.currentStyle = style;
    State.saveToStorage();
    State.initUI();
}

function useTemplate(templateName) {
    const templates = {
        '行业分析报告': '请撰写一份关于[行业名称]的深度分析报告，包含行业现状、市场规模、主要参与者、发展趋势和投资建议。',
        '产品评测': '请对[产品名称]进行详细评测，从外观设计、功能体验、性能表现、优缺点分析、适用人群等维度展开。',
        '小红书笔记': '以第一人称撰写一篇小红书风格的[产品/体验]分享，语气亲切自然，包含使用场景、真实感受、购买建议。',
        '工作周报': '撰写本周工作周报，包含完成的主要工作、遇到的问题及解决方案、下周工作计划。',
        '短篇故事': '创作一个关于[主题]的短篇故事，包含引人入胜的开头、情节发展、高潮冲突和意外结局。',
        '论文摘要': '为研究主题"[主题]"撰写学术论文摘要，包含研究背景、方法、主要发现、理论贡献和实践意义。'
    };
    
    const text = templates[templateName] || `请帮我撰写一份${templateName}`;
    const input = document.getElementById('promptInput');
    if (input) {
        input.value = text;
        input.focus();
        const counter = document.getElementById('charCount');
        if (counter) counter.textContent = text.length;
    }
    switchTab('write');
    showToast(`小粥已加载模板：${templateName}`, 'success');
}

function addPreset(text) {
    const input = document.getElementById('promptInput');
    if (!input) return;
    const current = input.value;
    const separator = current && !current.endsWith(' ') ? ' ' : '';
    input.value = current + separator + text + '，';
    input.focus();
    const counter = document.getElementById('charCount');
    if (counter) counter.textContent = input.value.length;
}

function clearInput() {
    const input = document.getElementById('promptInput');
    if (input) {
        input.value = '';
        const counter = document.getElementById('charCount');
        if (counter) counter.textContent = '0';
        input.focus();
    }
    showToast('已清空输入', 'info');
}

function switchTab(tabName) {
    document.querySelectorAll('.panel-tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const tabs = { write: 0, templates: 1, history: 2 };
    const tabIndex = tabs[tabName];
    if (tabIndex !== undefined) {
        document.querySelectorAll('.panel-tabs .tab')[tabIndex]?.classList.add('active');
    }
    document.getElementById(tabName + 'Tab')?.classList.add('active');
}

async function generateContent(isContinuation = false) {
    const promptInput = document.getElementById('promptInput');
    const continueInput = document.getElementById('continueInput');
    const prompt = isContinuation ? (continueInput?.value || '') : (promptInput?.value || '');
    
    if (!prompt.trim()) {
        showToast('请告诉小粥您想写什么', 'warning');
        return;
    }
    
    if (!State.apiKey) {
        showToast('请先配置API Key，让小粥为您创作', 'warning');
        showApiModal();
        return;
    }
    
    if (State.isGenerating) {
        showToast('小粥正在思考中，请稍候...', 'warning');
        return;
    }
    
    State.isGenerating = true;
    updateGenerateButton(true);
    
    try {
        const typeConfig = WRITING_TYPES[State.currentType];
        
        const response = await fetch(CONFIG.API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${State.apiKey}`
            },
            body: JSON.stringify({
                model: State.model,
                messages: [
                    { role: 'system', content: typeConfig.systemPrompt },
                    { role: 'user', content: prompt }
                ],
                temperature: State.temperature,
                max_tokens: State.currentLength === 'short' ? 500 : State.currentLength === 'medium' ? 1000 : 2000,
                stream: true
            })
        });
        
        if (!response.ok) throw new Error('API请求失败');
        
        showOutputArea();
        const outputContent = document.getElementById('outputContent');
        const skeleton = document.getElementById('skeletonLoader');
        
        if (!isContinuation && outputContent) outputContent.innerHTML = '';
        if (skeleton) skeleton.style.display = 'block';
        
        updateOutputMeta(typeConfig);
        
        // 流式读取
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullContent = '';
        
        if (skeleton) skeleton.style.display = 'none';
        
        if (isContinuation && outputContent) {
            const sep = document.createElement('div');
            sep.innerHTML = '<div style="margin:1rem 0;text-align:center;color:var(--text-muted)">✦ 小粥续写 ✦</div>';
            outputContent.appendChild(sep);
        }
        
        const contentDiv = document.createElement('div');
        if (outputContent) outputContent.appendChild(contentDiv);
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            
            for (const line of lines) {
                if (!line.startsWith('data: ') || line === 'data: [DONE]') continue;
                
                try {
                    const data = JSON.parse(line.slice(6));
                    const content = data.choices[0].delta.content || '';
                    fullContent += content;
                    if (contentDiv) contentDiv.innerHTML = formatContent(fullContent);
                } catch (e) {}
            }
        }
        
        // 保存历史
        if (!isContinuation) {
            addToHistory(prompt, fullContent, typeConfig);
        }
        
        if (continueInput) continueInput.value = '';
        showToast(isContinuation ? '小粥续写完成！' : '小粥创作完成！', 'success');
        
    } catch (error) {
        console.error('生成失败:', error);
        showToast('小粥遇到了问题: ' + error.message, 'error');
    } finally {
        State.isGenerating = false;
        updateGenerateButton(false);
        const skeleton = document.getElementById('skeletonLoader');
        if (skeleton) skeleton.style.display = 'none';
    }
}

function formatContent(text) {
    return text
        .replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

function showOutputArea() {
    const outputPanel = document.getElementById('outputPanel');
    const emptyState = document.getElementById('emptyState');
    
    if (outputPanel) outputPanel.classList.add('show');
    if (emptyState) emptyState.style.display = 'none';
    
    setTimeout(() => {
        outputPanel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function closeOutput() {
    const outputPanel = document.getElementById('outputPanel');
    const emptyState = document.getElementById('emptyState');
    
    if (outputPanel) outputPanel.classList.remove('show');
    if (emptyState) emptyState.style.display = 'flex';
}

function updateOutputMeta(typeConfig) {
    const badge = document.getElementById('outputTypeBadge');
    if (badge) {
        badge.innerHTML = `<i class="${typeConfig.icon}"></i><span>${typeConfig.name}</span>`;
    }
    const time = document.getElementById('outputTime');
    if (time) time.textContent = '刚刚';
    const model = document.getElementById('outputModel');
    if (model) model.textContent = State.model;
}

function updateGenerateButton(loading) {
    const btn = document.getElementById('generateBtn');
    if (!btn) return;
    
    const content = btn.querySelector('.btn-content');
    const loadingDiv = btn.querySelector('.btn-loading');
    
    btn.disabled = loading;
    if (content) content.style.display = loading ? 'none' : 'flex';
    if (loadingDiv) loadingDiv.style.display = loading ? 'flex' : 'none';
}

function continueWriting() {
    generateContent(true);
}

function regenerate() {
    generateContent();
}

async function copyContent() {
    const content = document.getElementById('outputContent')?.innerText;
    if (!content) return;
    
    try {
        await navigator.clipboard.writeText(content);
        showToast('小粥已复制内容到剪贴板', 'success');
    } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('小粥已复制内容到剪贴板', 'success');
    }
}

function downloadContent() {
    const content = document.getElementById('outputContent')?.innerText;
    if (!content) return;
    
    const type = WRITING_TYPES[State.currentType];
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `小粥创作_${type.name}_${new Date().toISOString().slice(0,10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('小粥已为您下载文件', 'success');
}

function addToHistory(prompt, content, typeConfig) {
    const item = {
        id: Date.now(),
        type: State.currentType,
        typeName: typeConfig.name,
        typeIcon: typeConfig.icon,
        prompt: prompt.slice(0, 100) + (prompt.length > 100 ? '...' : ''),
        content: content.slice(0, 500),
        fullContent: content,
        timestamp: new Date().toISOString()
    };
    
    State.history.unshift(item);
    if (State.history.length > CONFIG.MAX_HISTORY_ITEMS) {
        State.history = State.history.slice(0, CONFIG.MAX_HISTORY_ITEMS);
    }
    
    State.saveToStorage();
    State.renderHistory();
}

function loadHistoryItem(id) {
    const item = State.history.find(h => h.id === id);
    if (!item) return;
    
    State.currentType = item.type;
    State.initUI();
    State.renderTemplates();
    
    showOutputArea();
    const outputContent = document.getElementById('outputContent');
    if (outputContent) outputContent.innerHTML = formatContent(item.fullContent);
    
    const typeConfig = WRITING_TYPES[item.type];
    updateOutputMeta(typeConfig);
    
    switchTab('write');
    showToast('小粥已加载历史记录', 'success');
}

function clearAllHistory() {
    if (!confirm('确定让小粥清空所有历史记录吗？')) return;
    State.history = [];
    State.saveToStorage();
    State.renderHistory();
    showToast('小粥已清空历史记录', 'success');
}

// ========================================
// UI功能
// ========================================

function toggleSidebar() {
    document.getElementById('sidebar')?.classList.toggle('open');
}

function toggleUserMenu() {
    document.getElementById('userMenu')?.classList.toggle('active');
}

function toggleTheme() {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, next);
    
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = next === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
}

function showApiModal() {
    const modal = document.getElementById('globalModal');
    const container = document.getElementById('modalContainer');
    if (!modal || !container) return;
    
    container.innerHTML = `
        <div class="modal-header">
            <div class="modal-title">
                <div class="title-icon-wrapper"><i class="ri-key-2-line"></i></div>
                <div><h3>配置API密钥</h3><span class="modal-subtitle">连接智谱AI，让小粥为您服务</span></div>
            </div>
            <button class="close-btn" onclick="closeAllModals()"><i class="ri-close-line"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">API Key <span class="label-hint">sk-开头</span></label>
                <div class="input-wrapper">
                    <input type="password" id="apiKeyInput" class="neon-input" placeholder="sk-..." value="${State.apiKey}">
                    <button class="input-action" onclick="togglePasswordVisibility()"><i class="ri-eye-line" id="eyeIcon"></i></button>
                </div>
                <p class="form-hint">
                    <i class="ri-information-line"></i>
                    您的API Key仅存储在本地浏览器中，小粥不会上传到任何服务器
                </p>
            </div>
            <div class="form-group">
                <label class="form-label">选择模型</label>
                <div class="model-cards">
                    <label class="model-card ${State.model === 'glm-4' ? 'active' : ''}">
                        <input type="radio" name="model" value="glm-4" ${State.model === 'glm-4' ? 'checked' : ''}>
                        <div class="model-info"><span class="model-name">GLM-4</span><span class="model-desc">最强性能，适合复杂任务</span></div>
                        <div class="model-badge">推荐</div>
                    </label>
                    <label class="model-card ${State.model === 'glm-4-flash' ? 'active' : ''}">
                        <input type="radio" name="model" value="glm-4-flash" ${State.model === 'glm-4-flash' ? 'checked' : ''}>
                        <div class="model-info"><span class="model-name">GLM-4-Flash</span><span class="model-desc">极速响应，成本更低</span></div>
                    </label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <a href="https://open.bigmodel.cn" target="_blank" class="link-btn">
                <i class="ri-external-link-line"></i>
                获取API Key
            </a>
            <div class="modal-actions">
                <button class="btn-secondary" onclick="closeAllModals()">取消</button>
                <button class="btn-primary gradient-btn" onclick="saveApiConfig()">
                    <span>保存并连接</span>
                    <i class="ri-check-line"></i>
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function saveApiConfig() {
    const key = document.getElementById('apiKeyInput')?.value.trim();
    const model = document.querySelector('input[name="model"]:checked')?.value || 'glm-4';
    
    if (!key) {
        showToast('请输入API Key，小粥才能为您创作', 'error');
        return;
    }
    
    State.apiKey = key;
    State.model = model;
    State.saveToStorage();
    State.updateConnectionStatus();
    closeAllModals();
    showToast('小粥已连接成功，开始创作吧！', 'success');
}

function togglePasswordVisibility() {
    const input = document.getElementById('apiKeyInput');
    const icon = document.getElementById('eyeIcon');
    if (!input || !icon) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'ri-eye-off-line';
    } else {
        input.type = 'password';
        icon.className = 'ri-eye-line';
    }
}

function closeAllModals() {
    document.getElementById('globalModal')?.classList.remove('active');
}

function showSettings() { showToast('小粥的设置功能开发中', 'info'); }
function showShortcuts() { showToast('快捷键：Ctrl+Enter生成，Esc关闭', 'info'); }
function showUsageStats() { showToast(`今日使用: 0 tokens`, 'info'); }
function exportData() { showToast('小粥正在开发导出功能', 'info'); }
function showAbout() { showToast('小粥AI写作 v2.0 - 基于智谱GLM-4', 'info'); }
function showPricing() { window.open('https://open.bigmodel.cn/pricing', '_blank'); }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = { success: 'ri-check-line', error: 'ri-error-warning-line', warning: 'ri-alert-line', info: 'ri-information-line' };
    toast.innerHTML = `<i class="${icons[type]}"></i><span>${message}</span>`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatTime(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return Math.floor(diff/60000) + '分钟前';
    if (diff < 86400000) return Math.floor(diff/3600000) + '小时前';
    return date.toLocaleDateString('zh-CN');
}

// ========================================
// 初始化启动
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('小粥正在醒来...');
    try {
        State.init();
    } catch (e) {
        console.error('小粥初始化失败:', e);
        document.getElementById('pageLoader')?.classList.add('hidden');
    }
});

// 点击模态框外部关闭
document.getElementById('globalModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAllModals();
});