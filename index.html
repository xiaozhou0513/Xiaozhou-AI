<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小粥AI写作 - 专业级AI创作平台</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #6366f1;
            --secondary: #8b5cf6;
            --accent: #ec4899;
            --bg: #0f172a;
            --surface: #1e293b;
            --text: #f8fafc;
            --text-secondary: #94a3b8;
            --border: #334155;
            --shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --glass: rgba(30, 41, 59, 0.8);
        }

        /* 主题系统 */
        [data-theme="cyberpunk"] {
            --primary: #00f5ff;
            --secondary: #ff00ff;
            --accent: #ffff00;
            --bg: #0a0a0f;
            --surface: #1a1a2e;
            --text: #ffffff;
            --text-secondary: #a0a0a0;
            --border: #2a2a3e;
            --gradient: linear-gradient(135deg, #00f5ff 0%, #ff00ff 100%);
        }

        [data-theme="minimal"] {
            --primary: #2563eb;
            --secondary: #3b82f6;
            --accent: #60a5fa;
            --bg: #ffffff;
            --surface: #f8fafc;
            --text: #0f172a;
            --text-secondary: #64748b;
            --border: #e2e8f0;
            --gradient: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            --glass: rgba(248, 250, 252, 0.9);
        }

        [data-theme="dark"] {
            --primary: #10b981;
            --secondary: #059669;
            --accent: #34d399;
            --bg: #020617;
            --surface: #0f172a;
            --text: #ecfdf5;
            --text-secondary: #6ee7b7;
            --border: #1e293b;
            --gradient: linear-gradient(135deg, #059669 0%, #10b981 100%);
        }

        [data-theme="mint"] {
            --primary: #14b8a6;
            --secondary: #0d9488;
            --accent: #2dd4bf;
            --bg: #f0fdfa;
            --surface: #ffffff;
            --text: #134e4a;
            --text-secondary: #0f766e;
            --border: #ccfbf1;
            --gradient: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
        }

        [data-theme="royal"] {
            --primary: #7c3aed;
            --secondary: #a855f7;
            --accent: #c084fc;
            --bg: #2e1065;
            --surface: #4c1d95;
            --text: #faf5ff;
            --text-secondary: #d8b4fe;
            --border: #6b21a8;
            --gradient: linear-gradient(135deg, #7c3aed 0%, #db2777 100%);
        }

        [data-theme="sakura"] {
            --primary: #ec4899;
            --secondary: #f472b6;
            --accent: #f9a8d4;
            --bg: #fdf2f8;
            --surface: #ffffff;
            --text: #831843;
            --text-secondary: #be185d;
            --border: #fbcfe8;
            --gradient: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans SC', sans-serif;
            background: var(--bg);
            color: var(--text);
            min-height: 100vh;
            overflow-x: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* 动态背景 */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }

        .bg-animation::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 20% 80%, var(--primary) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, var(--secondary) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, var(--accent) 0%, transparent 30%);
            opacity: 0.1;
            animation: float 20s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        /* 布局 */
        .app-container {
            display: grid;
            grid-template-columns: 280px 1fr 320px;
            height: 100vh;
            gap: 0;
        }

        /* 侧边栏 */
        .sidebar {
            background: var(--glass);
            backdrop-filter: blur(20px);
            border-right: 1px solid var(--border);
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            overflow-y: auto;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 24px;
            font-weight: 900;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 8px;
        }

        .logo i {
            font-size: 32px;
            -webkit-text-fill-color: var(--primary);
        }

        .nav-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .nav-title {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--text-secondary);
            font-weight: 700;
            margin-bottom: 4px;
        }

        .nav-item {
            padding: 12px 16px;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
            font-weight: 500;
            border: 1px solid transparent;
        }

        .nav-item:hover {
            background: var(--surface);
            border-color: var(--border);
            transform: translateX(4px);
        }

        .nav-item.active {
            background: var(--gradient);
            color: white;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .nav-item i {
            width: 20px;
            text-align: center;
        }

        /* 主内容区 */
        .main-content {
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
        }

        .header {
            padding: 20px 32px;
            background: var(--glass);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-title {
            font-size: 20px;
            font-weight: 700;
        }

        .header-actions {
            display: flex;
            gap: 12px;
        }

        .btn {
            padding: 10px 20px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
        }

        .btn-primary {
            background: var(--gradient);
            color: white;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
            background: var(--surface);
            color: var(--text);
            border: 1px solid var(--border);
        }

        .btn-secondary:hover {
            background: var(--border);
        }

        .btn-icon {
            width: 40px;
            height: 40px;
            padding: 0;
            justify-content: center;
            border-radius: 10px;
        }

        /* 写作区域 */
        .workspace {
            flex: 1;
            display: grid;
            grid-template-rows: auto 1fr;
            overflow: hidden;
        }

        .toolbar {
            padding: 16px 32px;
            background: var(--surface);
            border-bottom: 1px solid var(--border);
            display: flex;
            gap: 16px;
            align-items: center;
            flex-wrap: wrap;
        }

        .tool-group {
            display: flex;
            gap: 8px;
            align-items: center;
            padding-right: 16px;
            border-right: 1px solid var(--border);
        }

        .tool-group:last-child {
            border-right: none;
        }

        select, input[type="text"], input[type="number"], textarea {
            background: var(--bg);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 8px 12px;
            border-radius: 8px;
            font-family: inherit;
            font-size: 14px;
            outline: none;
            transition: all 0.3s ease;
        }

        select:focus, input:focus, textarea:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .editor-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
            height: 100%;
            overflow: hidden;
        }

        .editor-panel, .preview-panel {
            padding: 32px;
            overflow-y: auto;
            position: relative;
        }

        .editor-panel {
            background: var(--bg);
            border-right: 1px solid var(--border);
        }

        .panel-label {
            position: absolute;
            top: 16px;
            right: 16px;
            font-size: 12px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 700;
        }

        .input-area {
            width: 100%;
            height: calc(100% - 60px);
            background: transparent;
            border: none;
            resize: none;
            font-size: 16px;
            line-height: 1.8;
            color: var(--text);
            outline: none;
            margin-top: 20px;
        }

        .input-area::placeholder {
            color: var(--text-secondary);
        }

        .char-count {
            position: absolute;
            bottom: 16px;
            right: 16px;
            font-size: 12px;
            color: var(--text-secondary);
        }

        .preview-content {
            margin-top: 20px;
            line-height: 1.8;
            font-size: 16px;
        }

        .preview-content h1, .preview-content h2, .preview-content h3 {
            margin: 24px 0 16px;
            color: var(--primary);
        }

        .preview-content p {
            margin: 12px 0;
        }

        /* 右侧面板 */
        .right-panel {
            background: var(--glass);
            backdrop-filter: blur(20px);
            border-left: 1px solid var(--border);
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            overflow-y: auto;
        }

        .panel-section {
            background: var(--surface);
            border-radius: 16px;
            padding: 20px;
            border: 1px solid var(--border);
        }

        .panel-header {
            font-weight: 700;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .ai-selector {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
        }

        .ai-option {
            flex: 1;
            padding: 12px;
            border-radius: 12px;
            border: 2px solid var(--border);
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
            background: var(--bg);
        }

        .ai-option:hover {
            border-color: var(--primary);
            transform: translateY(-2px);
        }

        .ai-option.active {
            border-color: var(--primary);
            background: rgba(99, 102, 241, 0.1);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
        }

        .ai-option i {
            font-size: 24px;
            margin-bottom: 4px;
            display: block;
        }

        .ai-option span {
            font-size: 12px;
            font-weight: 600;
        }

        .mode-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        .mode-item {
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--border);
            cursor: pointer;
            text-align: center;
            font-size: 13px;
            transition: all 0.3s ease;
            background: var(--bg);
        }

        .mode-item:hover {
            border-color: var(--secondary);
            background: rgba(139, 92, 246, 0.1);
        }

        .mode-item.active {
            background: var(--gradient);
            color: white;
            border-color: transparent;
        }

        .parameter {
            margin-bottom: 16px;
        }

        .parameter label {
            display: block;
            font-size: 13px;
            margin-bottom: 8px;
            color: var(--text-secondary);
        }

        .slider {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: var(--border);
            outline: none;
            -webkit-appearance: none;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        .history-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .history-item {
            padding: 12px;
            border-radius: 10px;
            background: var(--bg);
            border: 1px solid var(--border);
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 13px;
        }

        .history-item:hover {
            border-color: var(--primary);
            transform: translateX(4px);
        }

        .history-title {
            font-weight: 600;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .history-meta {
            font-size: 11px;
            color: var(--text-secondary);
        }

        /* 生成按钮 */
        .generate-btn {
            width: 100%;
            padding: 16px;
            font-size: 16px;
            font-weight: 700;
            margin-top: auto;
            position: relative;
            overflow: hidden;
        }

        .generate-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }

        .generate-btn:hover::before {
            left: 100%;
        }

        .generate-btn.generating {
            pointer-events: none;
            opacity: 0.8;
        }

        .generate-btn.generating::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border: 2px solid transparent;
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* 主题选择器 */
        .theme-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }

        .theme-option {
            aspect-ratio: 1;
            border-radius: 12px;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .theme-option:hover {
            transform: scale(1.05);
        }

        .theme-option.active {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
        }

        .theme-option[data-theme="cyberpunk"] { background: linear-gradient(135deg, #00f5ff, #ff00ff); }
        .theme-option[data-theme="minimal"] { background: linear-gradient(135deg, #3b82f6, #ffffff); }
        .theme-option[data-theme="dark"] { background: linear-gradient(135deg, #10b981, #020617); }
        .theme-option[data-theme="mint"] { background: linear-gradient(135deg, #14b8a6, #f0fdfa); }
        .theme-option[data-theme="royal"] { background: linear-gradient(135deg, #7c3aed, #2e1065); }
        .theme-option[data-theme="sakura"] { background: linear-gradient(135deg, #ec4899, #fdf2f8); }

        /* 提示词模板 */
        .template-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 12px;
        }

        .tag {
            padding: 6px 12px;
            border-radius: 20px;
            background: var(--bg);
            border: 1px solid var(--border);
            font-size: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .tag:hover {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }

        /* 流式输出光标 */
        .streaming-cursor {
            display: inline-block;
            width: 2px;
            height: 1.2em;
            background: var(--primary);
            animation: blink 1s infinite;
            vertical-align: middle;
            margin-left: 2px;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* 导出菜单 */
        .export-menu {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 8px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 8px;
            min-width: 160px;
            box-shadow: var(--shadow);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 100;
        }

        .export-wrapper {
            position: relative;
        }

        .export-wrapper:hover .export-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .export-item {
            padding: 10px 16px;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            transition: all 0.2s ease;
        }

        .export-item:hover {
            background: var(--bg);
        }

        /* 响应式 */
        @media (max-width: 1400px) {
            .app-container {
                grid-template-columns: 240px 1fr 280px;
            }
        }

        @media (max-width: 1200px) {
            .app-container {
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr;
            }
            .sidebar, .right-panel {
                display: none;
            }
            .mobile-menu {
                display: flex;
            }
        }

        /* 滚动条美化 */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary);
        }

        /* 加载动画 */
        .skeleton {
            background: linear-gradient(90deg, var(--surface) 25%, var(--border) 50%, var(--surface) 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 4px;
            height: 20px;
            margin: 8px 0;
        }

        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        /* 成功提示 */
        .toast {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: var(--surface);
            border: 1px solid var(--border);
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: var(--shadow);
            display: flex;
            align-items: center;
            gap: 12px;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            z-index: 1000;
        }

        .toast.show {
            transform: translateX(0);
        }

        .toast-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--gradient);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

        /* API配置弹窗 */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }

        .modal {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 32px;
            width: 90%;
            max-width: 500px;
            box-shadow: var(--shadow);
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }

        .modal-overlay.show .modal {
            transform: scale(1);
        }

        .modal-header {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--text-secondary);
        }

        .form-group input {
            width: 100%;
            padding: 12px;
        }

        .modal-footer {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
            margin-top: 24px;
        }

        .hidden {
            display: none !important;
        }
    </style>
</head>
<body data-theme="cyberpunk">
    <div class="bg-animation"></div>
    
    <div class="app-container">
        <!-- 左侧导航 -->
        <aside class="sidebar">
            <div class="logo">
                <i class="fas fa-pen-nib"></i>
                <span>小粥AI写作</span>
            </div>
            
            <div class="nav-section">
                <div class="nav-title">创作中心</div>
                <div class="nav-item active" onclick="switchTab('write')">
                    <i class="fas fa-edit"></i>
                    <span>AI写作</span>
                </div>
                <div class="nav-item" onclick="switchTab('templates')">
                    <i class="fas fa-layer-group"></i>
                    <span>模板库</span>
                </div>
                <div class="nav-item" onclick="switchTab('history')">
                    <i class="fas fa-history"></i>
                    <span>历史记录</span>
                </div>
            </div>

            <div class="nav-section">
                <div class="nav-title">工具箱</div>
                <div class="nav-item" onclick="switchTab('polish')">
                    <i class="fas fa-magic"></i>
                    <span>文章润色</span>
                </div>
                <div class="nav-item" onclick="switchTab('translate')">
                    <i class="fas fa-language"></i>
                    <span>智能翻译</span>
                </div>
                <div class="nav-item" onclick="switchTab('summary')">
                    <i class="fas fa-compress-alt"></i>
                    <span>摘要生成</span>
                </div>
            </div>

            <div class="nav-section">
                <div class="nav-title">设置</div>
                <div class="nav-item" onclick="showApiConfig()">
                    <i class="fas fa-key"></i>
                    <span>API配置</span>
                </div>
                <div class="nav-item" onclick="showHelp()">
                    <i class="fas fa-question-circle"></i>
                    <span>使用帮助</span>
                </div>
            </div>
        </aside>

        <!-- 主内容区 -->
        <main class="main-content">
            <header class="header">
                <h1 class="header-title" id="pageTitle">AI智能写作</h1>
                <div class="header-actions">
                    <div class="export-wrapper">
                        <button class="btn btn-secondary btn-icon" title="导出">
                            <i class="fas fa-download"></i>
                        </button>
                        <div class="export-menu">
                            <div class="export-item" onclick="exportContent('txt')">
                                <i class="fas fa-file-alt"></i>
                                <span>导出为TXT</span>
                            </div>
                            <div class="export-item" onclick="exportContent('md')">
                                <i class="fas fa-file-code"></i>
                                <span>导出为Markdown</span>
                            </div>
                            <div class="export-item" onclick="exportContent('html')">
                                <i class="fas fa-file-code"></i>
                                <span>导出为HTML</span>
                            </div>
                            <div class="export-item" onclick="copyContent()">
                                <i class="fas fa-copy"></i>
                                <span>复制全文</span>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-secondary btn-icon" onclick="clearContent()" title="清空">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="btn btn-primary" onclick="generateContent()">
                        <i class="fas fa-sparkles"></i>
                        立即生成
                    </button>
                </div>
            </header>

            <div class="workspace">
                <div class="toolbar">
                    <div class="tool-group">
                        <select id="writingMode" onchange="changeMode(this.value)">
                            <option value="article">文章创作</option>
                            <option value="essay">学术论文</option>
                            <option value="novel">小说故事</option>
                            <option value="marketing">营销文案</option>
                            <option value="code">代码注释</option>
                            <option value="email">商务邮件</option>
                            <option value="poetry">诗词歌赋</option>
                            <option value="script">视频脚本</option>
                            <option value="resume">简历优化</option>
                            <option value="social">社交媒体</option>
                            <option value="title">标题生成</option>
                            <option value="outline">大纲规划</option>
                        </select>
                    </div>
                    <div class="tool-group">
                        <select id="tone">
                            <option value="professional">专业严谨</option>
                            <option value="casual">轻松随意</option>
                            <option value="humorous">幽默风趣</option>
                            <option value="passionate">激情澎湃</option>
                            <option value="gentle">温柔细腻</option>
                            <option value="authoritative">权威可信</option>
                        </select>
                    </div>
                    <div class="tool-group">
                        <input type="number" id="wordCount" placeholder="字数" value="800" min="100" max="5000" style="width: 80px;">
                        <span style="color: var(--text-secondary); font-size: 13px;">字</span>
                    </div>
                    <div class="tool-group">
                        <button class="btn btn-secondary btn-icon" onclick="insertTemplate('prompt')" title="提示词模板">
                            <i class="fas fa-lightbulb"></i>
                        </button>
                        <button class="btn btn-secondary btn-icon" onclick="optimizePrompt()" title="优化提示词">
                            <i class="fas fa-wand-magic-sparkles"></i>
                        </button>
                    </div>
                </div>

                <div class="editor-container">
                    <div class="editor-panel">
                        <span class="panel-label">输入区</span>
                        <textarea class="input-area" id="inputArea" placeholder="请输入您的写作需求或主题...

例如：
- 写一篇关于人工智能发展的科技评论文章
- 为我的咖啡店写一段吸引人的推广文案
- 创作一个关于未来世界的科幻短篇故事开头
- 帮我优化这段简历描述，使其更专业

支持Markdown格式，可使用工具栏快捷插入模板。"></textarea>
                        <span class="char-count"><span id="inputCount">0</span> 字符</span>
                    </div>
                    <div class="preview-panel">
                        <span class="panel-label">生成结果</span>
                        <div class="preview-content" id="outputArea">
                            <div style="color: var(--text-secondary); text-align: center; margin-top: 40%;">
                                <i class="fas fa-robot" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                                <p>AI生成的内容将显示在这里</p>
                                <p style="font-size: 13px; margin-top: 8px;">点击右上角"立即生成"开始创作</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- 右侧面板 -->
        <aside class="right-panel">
            <div class="panel-section">
                <div class="panel-header">
                    <i class="fas fa-brain"></i>
                    AI模型选择
                </div>
                <div class="ai-selector">
                    <div class="ai-option active" onclick="selectAI('qwen')" data-ai="qwen">
                        <i class="fas fa-bolt" style="color: #ff6a00;"></i>
                        <span>通义千问</span>
                    </div>
                    <div class="ai-option" onclick="selectAI('chatglm')" data-ai="chatglm">
                        <i class="fas fa-dragon" style="color: #0066ff;"></i>
                        <span>智谱清言</span>
                    </div>
                </div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 8px;">
                    <i class="fas fa-info-circle"></i>
                    <span id="aiDesc">通义千问：擅长长文本理解与生成，适合深度写作</span>
                </div>
            </div>

            <div class="panel-section">
                <div class="panel-header">
                    <i class="fas fa-palette"></i>
                    主题风格
                </div>
                <div class="theme-grid">
                    <div class="theme-option active" data-theme="cyberpunk" onclick="setTheme('cyberpunk')" title="赛博朋克"></div>
                    <div class="theme-option" data-theme="minimal" onclick="setTheme('minimal')" title="极简白"></div>
                    <div class="theme-option" data-theme="dark" onclick="setTheme('dark')" title="深夜模式"></div>
                    <div class="theme-option" data-theme="mint" onclick="setTheme('mint')" title="薄荷清新"></div>
                    <div class="theme-option" data-theme="royal" onclick="setTheme('royal')" title="紫金贵族"></div>
                    <div class="theme-option" data-theme="sakura" onclick="setTheme('sakura')" title="樱花粉"></div>
                </div>
            </div>

            <div class="panel-section">
                <div class="panel-header">
                    <i class="fas fa-sliders-h"></i>
                    高级参数
                </div>
                <div class="parameter">
                    <label>创造力 (Temperature)</label>
                    <input type="range" class="slider" id="temperature" min="0" max="100" value="70">
                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-secondary); margin-top: 4px;">
                        <span>保守</span>
                        <span id="tempValue">0.7</span>
                        <span>创新</span>
                    </div>
                </div>
                <div class="parameter">
                    <label>输出长度限制</label>
                    <select id="maxTokens" style="width: 100%;">
                        <option value="1024">短文本 (1024 tokens)</option>
                        <option value="2048" selected>标准 (2048 tokens)</option>
                        <option value="4096">长文本 (4096 tokens)</option>
                        <option value="8192">超长文本 (8192 tokens)</option>
                    </select>
                </div>
            </div>

            <div class="panel-section">
                <div class="panel-header">
                    <i class="fas fa-clock-rotate-left"></i>
                    最近历史
                </div>
                <div class="history-list" id="historyList">
                    <div class="history-item" onclick="loadHistory(0)">
                        <div class="history-title">人工智能发展趋势分析...</div>
                        <div class="history-meta">2分钟前 • 通义千问</div>
                    </div>
                    <div class="history-item" onclick="loadHistory(1)">
                        <div class="history-title">春日咖啡店推广文案</div>
                        <div class="history-meta">1小时前 • 智谱清言</div>
                    </div>
                    <div class="history-item" onclick="loadHistory(2)">
                        <div class="history-title">Python异步编程指南</div>
                        <div class="history-meta">昨天 • 通义千问</div>
                    </div>
                </div>
            </div>

            <button class="btn btn-primary generate-btn" id="generateBtn" onclick="generateContent()">
                <i class="fas fa-sparkles"></i>
                开始创作
            </button>
        </aside>
    </div>

    <!-- API配置弹窗 -->
    <div class="modal-overlay" id="apiModal">
        <div class="modal">
            <div class="modal-header">
                <i class="fas fa-key"></i>
                API密钥配置
            </div>
            <div class="form-group">
                <label>通义千问 API Key (DashScope)</label>
                <input type="password" id="qwenApiKey" placeholder="sk-xxxxxxxxxxxxxxxx">
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                    获取地址：dashscope.aliyun.com
                </div>
            </div>
            <div class="form-group">
                <label>智谱清言 API Key (Zhipu)</label>
                <input type="password" id="chatglmApiKey" placeholder="xxxxxxxx.xxxxxxxxxxxxxxxx">
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                    获取地址：open.bigmodel.cn
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeApiConfig()">取消</button>
                <button class="btn btn-primary" onclick="saveApiConfig()">保存配置</button>
            </div>
        </div>
    </div>

    <!-- Toast提示 -->
    <div class="toast" id="toast">
        <div class="toast-icon">
            <i class="fas fa-check"></i>
        </div>
        <div>
            <div style="font-weight: 600;" id="toastTitle">成功</div>
            <div style="font-size: 13px; color: var(--text-secondary);" id="toastMessage">操作已完成</div>
        </div>
    </div>

    <script>
        // 全局状态
        let currentAI = 'qwen';
        let currentTheme = 'cyberpunk';
        let isGenerating = false;
        let historyData = [];
        let abortController = null;

        // 初始化
        document.addEventListener('DOMContentLoaded', () => {
            loadSettings();
            updateCharCount();
            
            // 输入框监听
            document.getElementById('inputArea').addEventListener('input', updateCharCount);
            
            // 温度滑块监听
            document.getElementById('temperature').addEventListener('input', (e) => {
                document.getElementById('tempValue').textContent = (e.target.value / 100).toFixed(1);
            });

            // 自动保存草稿
            setInterval(saveDraft, 30000);
            
            // 加载草稿
            const draft = localStorage.getItem('xiaozhou_draft');
            if (draft) {
                document.getElementById('inputArea').value = draft;
                updateCharCount();
            }
        });

        // 主题切换
        function setTheme(theme) {
            currentTheme = theme;
            document.body.setAttribute('data-theme', theme);
            
            // 更新激活状态
            document.querySelectorAll('.theme-option').forEach(el => {
                el.classList.toggle('active', el.dataset.theme === theme);
            });
            
            localStorage.setItem('xiaozhou_theme', theme);
            showToast('主题已切换', `当前使用${getThemeName(theme)}主题`);
        }

        function getThemeName(theme) {
            const names = {
                cyberpunk: '赛博朋克',
                minimal: '极简白',
                dark: '深夜模式',
                mint: '薄荷清新',
                royal: '紫金贵族',
                sakura: '樱花粉'
            };
            return names[theme] || theme;
        }

        // AI选择
        function selectAI(ai) {
            currentAI = ai;
            
            document.querySelectorAll('.ai-option').forEach(el => {
                el.classList.toggle('active', el.dataset.ai === ai);
            });
            
            const descs = {
                qwen: '通义千问：擅长长文本理解与生成，适合深度写作',
                chatglm: '智谱清言：擅长逻辑推理与创意生成，适合技术文档'
            };
            
            document.getElementById('aiDesc').textContent = descs[ai];
            showToast('AI模型已切换', descs[ai]);
        }

        // 写作模式切换
        function changeMode(mode) {
            const templates = {
                article: '写一篇关于[主题]的深度文章，要求观点鲜明、论据充分、结构清晰',
                essay: '以学术规范撰写关于[主题]的论文，包含摘要、关键词、引言、正文、结论和参考文献',
                novel: '创作一个以[主题]为核心的虚构故事，包含人物设定、情节发展和环境描写',
                marketing: '为[产品/服务]撰写一段吸引人的营销文案，突出卖点，激发购买欲望',
                code: '为以下代码添加详细的中文注释，解释关键逻辑和实现原理：',
                email: '撰写一封关于[主题]的专业商务邮件，语气得体，结构完整',
                poetry: '创作一首关于[主题]的[古诗/现代诗]，要求意境优美，用词精妙',
                script: '撰写一个关于[主题]的短视频脚本，包含场景描述、台词和镜头指示',
                resume: '优化以下简历内容，使其更具专业性和吸引力，突出关键成就',
                social: '为社交媒体平台撰写关于[主题]的爆款文案，适合传播和互动',
                title: '为以下内容生成10个吸引眼球的标题，要求简洁有力，富有创意',
                outline: '为[主题]制定详细的文章大纲，包含各级标题和要点概述'
            };
            
            const placeholder = templates[mode] || '请输入您的写作需求...';
            document.getElementById('inputArea').placeholder = placeholder;
        }

        // 生成内容
        async function generateContent() {
            if (isGenerating) {
                // 如果正在生成，则停止
                if (abortController) {
                    abortController.abort();
                    stopGeneration();
                }
                return;
            }

            const input = document.getElementById('inputArea').value.trim();
            if (!input) {
                showToast('提示', '请先输入写作需求', 'warning');
                document.getElementById('inputArea').focus();
                return;
            }

            // 检查API密钥
            const apiKeys = getApiKeys();
            if (!apiKeys[currentAI]) {
                showApiConfig();
                showToast('需要配置', '请先配置API密钥', 'warning');
                return;
            }

            startGeneration();

            const mode = document.getElementById('writingMode').value;
            const tone = document.getElementById('tone').value;
            const wordCount = document.getElementById('wordCount').value;
            const temperature = document.getElementById('temperature').value / 100;
            const maxTokens = document.getElementById('maxTokens').value;

            // 构建系统提示词
            const systemPrompt = buildSystemPrompt(mode, tone, wordCount);
            const userPrompt = input;

            try {
                abortController = new AbortController();
                
                if (currentAI === 'qwen') {
                    await callQwenAPI(systemPrompt, userPrompt, temperature, maxTokens);
                } else {
                    await callChatGLMAPI(systemPrompt, userPrompt, temperature, maxTokens);
                }
                
                // 保存到历史
                saveToHistory(input, document.getElementById('outputArea').innerText);
                
            } catch (error) {
                if (error.name === 'AbortError') {
                    showToast('已停止', '生成已取消');
                } else {
                    showToast('错误', error.message || '生成失败，请检查API配置', 'error');
                }
            } finally {
                stopGeneration();
            }
        }

        // 调用通义千问API (DashScope)
        async function callQwenAPI(systemPrompt, userPrompt, temperature, maxTokens) {
            const apiKey = getApiKeys().qwen;
            const outputArea = document.getElementById('outputArea');
            
            outputArea.innerHTML = '<div class="streaming-cursor"></div>';
            
            const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'qwen-turbo',
                    input: {
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: userPrompt }
                        ]
                    },
                    parameters: {
                        result_format: 'message',
                        max_tokens: parseInt(maxTokens),
                        temperature: temperature,
                        enable_search: true
                    }
                }),
                signal: abortController.signal
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'API请求失败');
            }

            const data = await response.json();
            const content = data.output.choices[0].message.content;
            
            // 模拟流式输出效果
            await streamOutput(content, outputArea);
        }

        // 调用智谱清言API
        async function callChatGLMAPI(systemPrompt, userPrompt, temperature, maxTokens) {
            const apiKey = getApiKeys().chatglm;
            const outputArea = document.getElementById('outputArea');
            
            outputArea.innerHTML = '<div class="streaming-cursor"></div>';
            
            const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'glm-4-flash',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userPrompt }
                    ],
                    temperature: temperature,
                    max_tokens: parseInt(maxTokens),
                    stream: false
                }),
                signal: abortController.signal
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'API请求失败');
            }

            const data = await response.json();
            const content = data.choices[0].message.content;
            
            await streamOutput(content, outputArea);
        }

        // 流式输出效果
        async function streamOutput(text, element) {
            const chars = text.split('');
            let currentText = '';
            
            for (let i = 0; i < chars.length; i++) {
                if (!isGenerating) break;
                
                currentText += chars[i];
                element.innerHTML = formatOutput(currentText) + '<span class="streaming-cursor"></span>';
                
                // 随机延迟模拟打字效果
                await new Promise(r => setTimeout(r, Math.random() * 20 + 10));
                
                // 每50字符滚动一次
                if (i % 50 === 0) {
                    element.scrollTop = element.scrollHeight;
                }
            }
            
            element.innerHTML = formatOutput(currentText);
        }

        // 格式化输出
        function formatOutput(text) {
            // 简单的Markdown渲染
            return text
                .replace(/### (.*)/g, '<h3>$1</h3>')
                .replace(/## (.*)/g, '<h2>$1</h2>')
                .replace(/# (.*)/g, '<h1>$1</h1>')
                .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*)\*/g, '<em>$1</em>')
                .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/\n/g, '<br>');
        }

        // 构建系统提示词
        function buildSystemPrompt(mode, tone, wordCount) {
            const toneDesc = {
                professional: '专业严谨，用词准确，逻辑清晰',
                casual: '轻松随意，通俗易懂，亲切自然',
                humorous: '幽默风趣，妙语连珠，引人入胜',
                passionate: '激情澎湃，富有感染力，鼓舞人心',
                gentle: '温柔细腻，情感真挚，润物无声',
                authoritative: '权威可信，数据支撑，深度分析'
            };

            const modeDesc = {
                article: '深度文章',
                essay: '学术论文',
                novel: '虚构故事',
                marketing: '营销文案',
                code: '技术文档',
                email: '商务邮件',
                poetry: '诗词创作',
                script: '视频脚本',
                resume: '简历优化',
                social: '社媒文案',
                title: '标题生成',
                outline: '大纲规划'
            };

            return `你是一位专业的${modeDesc[mode] || '写作'}专家，拥有30年经验。要求：
1. 语气风格：${toneDesc[tone] || '专业'}
2. 字数要求：约${wordCount}字
3. 根据用户需求创作高质量内容
4. 确保内容原创、有深度、符合中文表达习惯
5. 适当使用修辞手法增强表现力
6. 直接输出内容，不要解释说明`;
        }

        // 开始/停止生成
        function startGeneration() {
            isGenerating = true;
            const btn = document.getElementById('generateBtn');
            btn.classList.add('generating');
            btn.innerHTML = '<i class="fas fa-stop"></i> 停止生成';
        }

        function stopGeneration() {
            isGenerating = false;
            const btn = document.getElementById('generateBtn');
            btn.classList.remove('generating');
            btn.innerHTML = '<i class="fas fa-sparkles"></i> 开始创作';
        }

        // 导出功能
        function exportContent(format) {
            const content = document.getElementById('outputArea').innerText;
            if (!content || content.includes('AI生成的内容将显示在这里')) {
                showToast('提示', '没有可导出的内容', 'warning');
                return;
            }

            let blob, filename;
            const timestamp = new Date().toLocaleString().replace(/[/:]/g, '-');
            
            switch(format) {
                case 'txt':
                    blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                    filename = `小粥AI写作_${timestamp}.txt`;
                    break;
                case 'md':
                    const mdContent = document.getElementById('outputArea').innerHTML
                        .replace(/<h1>/g, '# ')
                        .replace(/<\/h1>/g, '\n\n')
                        .replace(/<h2>/g, '## ')
                        .replace(/<\/h2>/g, '\n\n')
                        .replace(/<h3>/g, '### ')
                        .replace(/<\/h3>/g, '\n\n')
                        .replace(/<strong>/g, '**')
                        .replace(/<\/strong>/g, '**')
                        .replace(/<em>/g, '*')
                        .replace(/<\/em>/g, '*')
                        .replace(/<br>/g, '\n')
                        .replace(/<[^>]+>/g, '');
                    blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
                    filename = `小粥AI写作_${timestamp}.md`;
                    break;
                case 'html':
                    const htmlContent = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>小粥AI写作</title></head>
<body style="max-width:800px;margin:50px auto;padding:20px;font-family:system-ui;line-height:1.8">
${document.getElementById('outputArea').innerHTML}
</body></html>`;
                    blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
                    filename = `小粥AI写作_${timestamp}.html`;
                    break;
            }

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            URL.revokeObjectURL(url);
            
            showToast('导出成功', `已保存为 ${filename}`);
        }

        function copyContent() {
            const content = document.getElementById('outputArea').innerText;
            navigator.clipboard.writeText(content).then(() => {
                showToast('复制成功', '内容已复制到剪贴板');
            });
        }

        function clearContent() {
            if (confirm('确定要清空当前内容吗？')) {
                document.getElementById('inputArea').value = '';
                document.getElementById('outputArea').innerHTML = `
                    <div style="color: var(--text-secondary); text-align: center; margin-top: 40%;">
                        <i class="fas fa-robot" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                        <p>AI生成的内容将显示在这里</p>
                    </div>
                `;
                updateCharCount();
                showToast('已清空', '内容已重置');
            }
        }

        // 历史记录
        function saveToHistory(input, output) {
            const item = {
                input: input.substring(0, 50) + '...',
                output: output,
                ai: currentAI,
                time: new Date().toLocaleString(),
                mode: document.getElementById('writingMode').value
            };
            
            historyData.unshift(item);
            if (historyData.length > 20) historyData.pop();
            
            updateHistoryUI();
            localStorage.setItem('xiaozhou_history', JSON.stringify(historyData));
        }

        function updateHistoryUI() {
            const list = document.getElementById('historyList');
            list.innerHTML = historyData.slice(0, 3).map((item, index) => `
                <div class="history-item" onclick="loadHistory(${index})">
                    <div class="history-title">${item.input}</div>
                    <div class="history-meta">${item.time} • ${item.ai === 'qwen' ? '通义千问' : '智谱清言'}</div>
                </div>
            `).join('');
        }

        function loadHistory(index) {
            const item = historyData[index];
            if (item) {
                document.getElementById('outputArea').innerHTML = formatOutput(item.output);
                showToast('已加载', '历史记录已恢复');
            }
        }

        // API配置
        function showApiConfig() {
            document.getElementById('apiModal').classList.add('show');
            const keys = getApiKeys();
            document.getElementById('qwenApiKey').value = keys.qwen || '';
            document.getElementById('chatglmApiKey').value = keys.chatglm || '';
        }

        function closeApiConfig() {
            document.getElementById('apiModal').classList.remove('show');
        }

        function saveApiConfig() {
            const qwen = document.getElementById('qwenApiKey').value.trim();
            const chatglm = document.getElementById('chatglmApiKey').value.trim();
            
            const keys = { qwen, chatglm };
            localStorage.setItem('xiaozhou_api_keys', JSON.stringify(keys));
            
            closeApiConfig();
            showToast('保存成功', 'API密钥已安全存储在本地');
        }

        function getApiKeys() {
            const stored = localStorage.getItem('xiaozhou_api_keys');
            return stored ? JSON.parse(stored) : {};
        }

        // 辅助功能
        function updateCharCount() {
            const count = document.getElementById('inputArea').value.length;
            document.getElementById('inputCount').textContent = count;
        }

        function saveDraft() {
            const content = document.getElementById('inputArea').value;
            if (content) {
                localStorage.setItem('xiaozhou_draft', content);
            }
        }

        function loadSettings() {
            // 加载主题
            const savedTheme = localStorage.getItem('xiaozhou_theme') || 'cyberpunk';
            setTheme(savedTheme);
            
            // 加载历史
            const savedHistory = localStorage.getItem('xiaozhou_history');
            if (savedHistory) {
                historyData = JSON.parse(savedHistory);
                updateHistoryUI();
            }
        }

        function showToast(title, message, type = 'success') {
            const toast = document.getElementById('toast');
            document.getElementById('toastTitle').textContent = title;
            document.getElementById('toastMessage').textContent = message;
            
            const icon = toast.querySelector('.toast-icon i');
            icon.className = type === 'error' ? 'fas fa-exclamation-triangle' : 
                             type === 'warning' ? 'fas fa-exclamation-circle' : 
                             'fas fa-check';
            
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }

        function switchTab(tab) {
            // 简化的标签切换逻辑
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            event.target.closest('.nav-item').classList.add('active');
            
            const titles = {
                write: 'AI智能写作',
                templates: '模板库',
                history: '历史记录',
                polish: '文章润色',
                translate: '智能翻译',
                summary: '摘要生成'
            };
            
            if (titles[tab]) {
                document.getElementById('pageTitle').textContent = titles[tab];
            }
            
            if (tab === 'history') {
                showToast('提示', '历史记录功能已集成在右侧面板');
            }
        }

        function insertTemplate(type) {
            const templates = {
                prompt: '请帮我写一篇关于[主题]的文章，要求：\n1. 观点明确，论证充分\n2. 结构清晰，层次分明\n3. 语言流畅，用词精准\n4. 字数约[数字]字',
                structure: '文章结构建议：\n一、引言（背景+观点）\n二、主体论述（分论点+论据）\n三、案例分析（具体实例）\n四、结论（总结+展望）'
            };
            
            const textarea = document.getElementById('inputArea');
            const start = textarea.selectionStart;
            const template = templates[type] || templates.prompt;
            
            textarea.value = textarea.value.substring(0, start) + template + textarea.value.substring(start);
            updateCharCount();
        }

        function optimizePrompt() {
            const input = document.getElementById('inputArea').value;
            if (!input) {
                showToast('提示', '请先输入内容');
                return;
            }
            
            // 简单的提示词优化逻辑
            const optimized = `【优化后的提示词】\n\n角色：你是一位专业写作专家\n任务：${input}\n要求：\n1. 内容原创且高质量\n2. 符合中文表达习惯\n3. 结构清晰，逻辑严密\n4. 适当使用修辞手法\n\n请直接输出内容，无需解释。`;
            
            document.getElementById('inputArea').value = optimized;
            updateCharCount();
            showToast('优化完成', '提示词已增强');
        }

        function showHelp() {
            alert(`【小粥AI写作】使用指南

1. 选择AI模型：通义千问适合长文本，智谱清言适合逻辑推理
2. 选择写作模式：12种专业模式满足不同场景
3. 调整参数：温度值控制创意程度，字数限制控制长度
4. 主题切换：6种精美主题，点击右侧面板切换
5. API配置：首次使用需配置API密钥（本地存储）

支持快捷键：
- Ctrl+Enter：快速生成
- Ctrl+S：保存草稿
- Ctrl+Shift+C：复制结果

遇到问题？请检查API密钥是否正确配置。`);
        }

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                generateContent();
            }
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                saveDraft();
                showToast('已保存', '草稿已保存到本地');
            }
        });

        // 点击模态框外部关闭
        document.getElementById('apiModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeApiConfig();
        });
    </script>
</body>
</html>
