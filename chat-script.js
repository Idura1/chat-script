<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gdata' xmlns:data='http://www.google.com/2005/gdata' xmlns:expr='http://www.google.com/2005/gdata'>
<head>
    <meta charset='UTF-8'/>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
    <title><data:blog.pageTitle/> - Universal Eye</title>
    <b:include data='blog' name='all-head-content'/>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' rel='stylesheet'/>
    
    <b:skin><![CDATA[
        :root {
            /* Light Mode Variables */
            --bg-color: #f8f9fa;
            --card-bg: white;
            --text-color: #212529;
            --subtext-color: #6c757d;
            --nav-bg: rgba(255, 255, 255, 0.95);
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            --border: rgba(0, 0, 0, 0.08);
            --accent-color: #6366f1;
            --accent-hover: #4f46e5;
            --error-color: #ef4444;
            --chat-bg: #f1f5f9;
            --user-bg: #6366f1;
            --ai-bg: white;
            --file-bg: #f1f5f9;
            --scrollbar-thumb: #d1d5db;
            --scrollbar-track: #f1f5f9;
            --nav-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
        }

        [data-theme="dark"] {
            /* Dark Mode Variables */
            --bg-color: #111827;
            --card-bg: #1f2937;
            --text-color: #f9fafb;
            --subtext-color: #9ca3af;
            --nav-bg: rgba(17, 24, 39, 0.95);
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            --border: rgba(255, 255, 255, 0.08);
            --accent-color: #818cf8;
            --accent-hover: #a5b4fc;
            --error-color: #f87171;
            --chat-bg: #1f2937;
            --user-bg: #6366f1;
            --ai-bg: #374151;
            --file-bg: #374151;
            --scrollbar-thumb: #4b5563;
            --scrollbar-track: #1f2937;
            --nav-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s, color 0.3s;
            line-height: 1.5;
            overflow: hidden;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: var(--scrollbar-track);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
            border-radius: 6px;
        }

        /* Navigation Bar */
        .navbar {
            background-color: var(--nav-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 0.75rem 1.5rem;
            box-shadow: var(--nav-shadow);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s;
        }

        .logo {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-color);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo i {
            color: var(--accent-color);
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .nav-links a {
            color: var(--text-color);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            opacity: 0.8;
            transition: opacity 0.2s;
            position: relative;
        }

        .nav-links a:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background: var(--accent-color);
            left: 0;
            bottom: -4px;
            transition: width 0.2s;
        }

        .nav-links a:hover {
            opacity: 1;
        }

        .nav-links a:hover:after {
            width: 100%;
        }

        .nav-links a.active {
            opacity: 1;
            font-weight: 600;
        }

        .nav-links a.active:after {
            width: 100%;
        }

        #theme-toggle {
            background: none;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-color);
            transition: background-color 0.2s;
            font-size: 1.1rem;
        }

        #theme-toggle:hover {
            background-color: rgba(128, 128, 128, 0.1);
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.25rem;
            color: var(--text-color);
            cursor: pointer;
        }

        /* Main Content */
        .container {
            display: flex;
            height: calc(100vh - 60px);
            margin-top: 60px;
        }

        /* Sidebar */
        .sidebar {
            width: 280px;
            background: var(--card-bg);
            border-right: 1px solid var(--border);
            padding: 1.25rem;
            overflow-y: auto;
            transition: all 0.3s;
            flex-shrink: 0;
            position: relative;
        }

        .sidebar h2 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1.25rem;
            color: var(--text-color);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .sidebar h2 i {
            color: var(--accent-color);
            font-size: 0.875rem;
        }

        .chat-history {
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
        }

        .chat-session {
            padding: 0.75rem 1rem;
            background: var(--chat-bg);
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--text-color);
            transition: all 0.2s;
            word-break: break-word;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid transparent;
        }

        .chat-session:hover {
            background: var(--accent-color);
            color: white;
            transform: translateY(-1px);
            box-shadow: var(--shadow);
        }

        .chat-session.active {
            background: var(--accent-color);
            color: white;
            border: 1px solid var(--accent-hover);
            box-shadow: var(--shadow);
        }

        .chat-session .delete-session-btn {
            background: none;
            border: none;
            color: var(--error-color);
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .chat-session:hover .delete-session-btn {
            opacity: 1;
        }

        .chat-session .delete-session-btn:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .new-chat-btn {
            margin-bottom: 1rem;
            padding: 0.75rem;
            border-radius: 0.5rem;
            background: var(--accent-color);
            color: white;
            border: none;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
        }

        .new-chat-btn:hover {
            background: var(--accent-hover);
        }

        /* Chat Area */
        .chat-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: var(--card-bg);
            transition: background-color 0.3s;
            position: relative;
        }

        .chat-header {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            background: var(--card-bg);
        }

        .chat-header h2 {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-color);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .chat-header h2 i {
            color: var(--accent-color);
        }

        .chat-header button {
            padding: 0.5rem 0.75rem;
            border-radius: 0.375rem;
            background: var(--chat-bg);
            color: var(--text-color);
            border: 1px solid var(--border);
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 0.375rem;
        }

        .chat-header button:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
        }

        .chat-messages {
            flex: 1;
            padding: 1.5rem;
            overflow-y: auto;
            background: var(--chat-bg);
            transition: background-color 0.3s;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }

        .message {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            position: relative;
            max-width: 90%;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .message.user {
            align-self: flex-end;
        }

        .message.ai {
            align-self: flex-start;
        }

        .message-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            flex-shrink: 0;
        }

        .message.user .message-avatar {
            background: var(--user-bg);
            color: white;
            order: 2;
        }

        .message.ai .message-avatar {
            background: var(--accent-color);
            color: white;
        }

        .message-container {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .message-content {
            padding: 0.875rem 1.125rem;
            border-radius: 1rem;
            font-size: 0.9375rem;
            position: relative;
            word-break: break-word;
            box-shadow: var(--shadow);
        }

        .message.user .message-content {
            background: var(--user-bg);
            color: white;
            border-top-right-radius: 0.25rem;
        }

        .message.ai .message-content {
            background: var(--ai-bg);
            color: var(--text-color);
            border-top-left-radius: 0.25rem;
        }

        .message.file .message-content {
            background: var(--file-bg);
            color: var(--text-color);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border-radius: 0.75rem;
        }

        .message.file img {
            max-width: 140px;
            max-height: 140px;
            border-radius: 0.375rem;
            object-fit: cover;
        }

        .message.file a {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 500;
        }

        .message.file a:hover {
            text-decoration: underline;
        }

        .message-timestamp {
            font-size: 0.6875rem;
            color: var(--subtext-color);
            margin-top: 0.25rem;
        }

        .message.user .message-timestamp {
            text-align: right;
        }

        .message .message-actions {
            position: absolute;
            top: -10px;
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message.user .message-actions {
            right: 10px;
        }

        .message.ai .message-actions {
            left: 10px;
        }

        .message:hover .message-actions {
            opacity: 1;
        }

        .message-action-btn {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--card-bg);
            border: 1px solid var(--border);
            color: var(--subtext-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: var(--shadow);
        }

        .message-action-btn:hover {
            color: var(--accent-color);
            border-color: var(--accent-color);
        }

        .message-action-btn.delete:hover {
            color: var(--error-color);
            border-color: var(--error-color);
        }

        .typing-indicator {
            display: none;
            padding: 0.75rem;
            border-radius: 1rem;
            background: var(--ai-bg);
            color: var(--subtext-color);
            font-size: 0.875rem;
            max-width: 5rem;
            margin-bottom: 0.5rem;
            align-self: flex-start;
            box-shadow: var(--shadow);
        }

        .typing-indicator.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .typing-dots {
            display: flex;
            gap: 0.25rem;
        }

        .typing-dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--subtext-color);
            animation: typingBounce 1.4s infinite ease-in-out;
        }

        .typing-dot:nth-child(1) {
            animation-delay: 0s;
        }

        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typingBounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-4px);
            }
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            gap: 1.5rem;
            text-align: center;
            padding: 2rem;
        }

        .empty-state-icon {
            font-size: 3rem;
            color: var(--accent-color);
            opacity: 0.5;
        }

        .empty-state h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-color);
        }

        .empty-state p {
            color: var(--subtext-color);
            max-width: 400px;
            margin: 0 auto;
        }

        .chat-input {
            padding: 1.25rem;
            border-top: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            background: var(--card-bg);
            transition: background-color 0.3s;
            flex-shrink: 0;
        }

        .input-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .input-tools {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .tool-button {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            color: var(--subtext-color);
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .tool-button:hover {
            background-color: rgba(128, 128, 128, 0.1);
            color: var(--accent-color);
        }

        .char-count {
            font-size: 0.75rem;
            color: var(--subtext-color);
        }

        .input-wrapper {
            display: flex;
            align-items: flex-end;
            gap: 0.75rem;
            position: relative;
        }

        .chat-input textarea {
            flex: 1;
            padding: 0.875rem 1rem;
            border: 1px solid var(--border);
            border-radius: 0.75rem;
            font-size: 0.9375rem;
            font-family: inherit;
            resize: none;
            background: var(--chat-bg);
            color: var(--text-color);
            min-height: 2.5rem;
            max-height: 120px;
            transition: border-color 0.2s;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .chat-input textarea:focus {
            outline: none;
            border-color: var(--accent-color);
        }

        .chat-input .file-upload {
            position: relative;
            cursor: pointer;
        }

        .chat-input .file-upload input {
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .send-button {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: var(--accent-color);
            color: white;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
        }

        .send-button:hover {
            background: var(--accent-hover);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 60px;
            left: 0;
            width: 100%;
            background: var(--nav-bg);
            z-index: 999;
            padding: 1rem;
            border-bottom: 1px solid var(--border);
            display: none;
            flex-direction: column;
            gap: 1rem;
            box-shadow: var(--shadow);
        }

        .mobile-menu a {
            padding: 0.75rem;
            border-radius: 0.5rem;
            text-decoration: none;
            color: var(--text-color);
            font-size: 1rem;
            transition: background-color 0.2s;
        }

        .mobile-menu a:hover {
            background: rgba(128, 128, 128, 0.1);
        }

        .mobile-menu a.active {
            background: var(--accent-color);
            color: white;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .sidebar {
                width: 240px;
            }
        }

        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }

            .sidebar {
                position: fixed;
                left: -280px;
                top: 60px;
                height: calc(100vh - 60px);
                z-index: 100;
                box-shadow: var(--shadow);
                transition: left 0.3s ease;
            }

            .sidebar.active {
                left: 0;
            }

            .nav-links {
                display: none;
            }

            .chat-area {
                width: 100%;
            }

            .message {
                max-width: 100%;
            }

            .message-content {
                max-width: 80%;
            }

            .overlay {
                display: none;
                position: fixed;
                top: 60px;
                left: 0;
                width: 100%;
                height: calc(100vh - 60px);
                background: rgba(0, 0, 0, 0.5);
                z-index: 99;
            }

            .overlay.active {
                display: block;
            }
        }

        @media (max-width: 480px) {
            .navbar {
                padding: 0.625rem 1rem;
            }

            .chat-header {
                padding: 0.75rem 1rem;
            }

            .chat-messages {
                padding: 1rem;
            }

            .message-content {
                padding: 0.75rem 1rem;
                font-size: 0.875rem;
            }

            .chat-input {
                padding: 0.75rem 1rem;
            }

            .message.file img {
                max-width: 100px;
                max-height: 100px;
            }

            .chat-session .delete-session-btn {
                opacity: 1;
            }

            .message .message-actions {
                opacity: 1;
            }

            .chat-input textarea {
                font-size: 0.875rem;
                padding: 0.75rem;
            }

            .empty-state-icon {
                font-size: 2.5rem;
            }

            .empty-state h3 {
                font-size: 1.25rem;
            }

            .empty-state p {
                font-size: 0.875rem;
            }
        }
    ]]></b:skin>
</head>
<body>
    <!-- Navigation Bar -->
    <b:section class='navbar' id='navbar' maxwidgets='1' showaddelement='no'>
        <b:widget id='Header1' type='Header' locked='true'>
            <b:includable id='main'>
                <nav class='navbar'>
                    <div class='left-nav'>
                        <a href='#' class='logo'><i class='fas fa-eye'></i> Universal Eye</a>
                    </div>
                    <div class='right-nav'>
                        <div class='nav-links'>
                            <a href='#' class='nav-link'>Dashboard</a>
                            <a href='#' class='nav-link'>Tools</a>
                            <a href='#' class='nav-link active'>AI Chat</a>
                            <a href='#' class='nav-link'>Support</a>
                        </div>
                        <button id='theme-toggle'><i class='fas fa-sun'></i></button>
                        <button class='mobile-menu-btn'><i class='fas fa-bars'></i></button>
                    </div>
                </nav>
            </b:includable>
        </b:widget>
    </b:section>

    <!-- Mobile Menu -->
    <div class='mobile-menu'>
        <a href='#' class='mobile-link'>Dashboard</a>
        <a href='#' class='mobile-link'>Tools</a>
        <a href='#' class='mobile-link active'>AI Chat</a>
        <a href='#' class='mobile-link'>Support</a>
    </div>

    <!-- Overlay for mobile sidebar -->
    <div class='overlay'></div>

    <!-- Main Content -->
    <div class='container'>
        <!-- Sidebar -->
        <b:section class='sidebar' id='sidebar' maxwidgets='1' showaddelement='no'>
            <b:widget id='HTML1' type='HTML' title='Chat History'>
                <b:includable id='main'>
                    <div class='sidebar'>
                        <button class='new-chat-btn' onclick='startNewChat()'><i class='fas fa-plus'></i> New Chat</button>
                        <h2><i class='fas fa-history'></i> Chat History</h2>
                        <div class='chat-history' id='chat-history'>
                            <!-- Chat sessions will be added here -->
                        </div>
                    </div>
                </b:includable>
            </b:widget>
        </b:section>

        <!-- Chat Area -->
        <b:section class='chat-area' id='main' preferred='yes'>
            <b:widget id='HTML2' type='HTML' title='AI Chat'>
                <b:includable id='main'>
                    <div class='chat-area'>
                        <div class='chat-header'>
                            <h2><i class='fas fa-comments'></i> AI Chat</h2>
                            <button onclick='startNewChat()'><i class='fas fa-plus'></i> New Chat</button>
                        </div>
                        <div class='chat-messages' id='chat-messages'>
                            <div class='empty-state' id='empty-state'>
                                <div class='empty-state-icon'>
                                    <i class='fas fa-robot'></i>
                                </div>
                                <h3>Start a new conversation</h3>
                                <p>Ask a question, get creative, or share files to interact with the AI assistant.</p>
                            </div>
                        </div>
                        <div class='typing-indicator' id='typing-indicator'>
                            <div class='typing-dots'>
                                <div class='typing-dot'></div>
                                <div class='typing-dot'></div>
                                <div class='typing-dot'></div>
                            </div>
                        </div>
                        <div class='chat-input'>
                            <div class='input-actions'>
                                <div class='input-tools'>
                                    <div class='file-upload'>
                                        <input type='file' id='file-upload' accept='image/*,application/pdf' onchange='handleFileUpload(this.files)'/>
                                        <button class='tool-button' title='Upload File'><i class='fas fa-paperclip'></i></button>
                                    </div>
                                </div>
                                <div class='char-count' id='char-count'>0/1000</div>
                            </div>
                            <div class='input-wrapper'>
                                <textarea id='chat-input' placeholder='Type your message...' oninput='autoResize(this); updateCharCount(this);' onkeypress='if(event.key === "Enter" && !event.shiftKey) { event.preventDefault(); sendMessage(); }'></textarea>
                                <button class='send-button' onclick='sendMessage()'><i class='fas fa-paper-plane'></i></button>
                            </div>
                        </div>
                    </div>
                </b:includable>
            </b:widget>
        </b:section>
    </div>

    <script type='text/javascript'>
        //<![CDATA[
        const API_KEY = 'AIzaSyC4yiq-8oZxj7hfwmGUJ1r8twKy1DO_QKY';
        const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

        let chatSessions = [];
        let currentSessionId = null;
        let mobileMenuOpen = false;
        let sidebarOpen = false;

        // Load chat sessions from localStorage
        function loadChatSessions() {
            const savedSessions = localStorage.getItem('chatSessions');
            if (savedSessions) {
                chatSessions = JSON.parse(savedSessions);
                if (chatSessions.length > 0) {
                    currentSessionId = chatSessions[0].id;
                }
            }
            if (chatSessions.length === 0) {
                startNewChat(true);
            }
            updateChatHistory();
            updateChatMessages();
        }

        // Save chat sessions to localStorage
        function saveChatSessions() {
            localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
        }

        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const toggleTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'dark');
            }
        };

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeToggle.addEventListener('click', toggleTheme);

        // Mobile Menu and Sidebar Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');

        function toggleMobileMenu() {
            mobileMenuOpen = !mobileMenuOpen;
            mobileMenu.style.display = mobileMenuOpen ? 'flex' : 'none';
        }

        function toggleSidebar() {
            sidebarOpen = !sidebarOpen;
            sidebar.classList.toggle('active', sidebarOpen);
            overlay.classList.toggle('active', sidebarOpen);
        }

        mobileMenuBtn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });

        overlay.addEventListener('click', () => {
            if (sidebarOpen) {
                toggleSidebar();
            }
        });

        // Auto-resize textarea
        function autoResize(textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }

        // Update character count
        function updateCharCount(textarea) {
            const count = textarea.value.length;
            document.getElementById('char-count').textContent = `${count}/1000`;
        }

        // Start a new chat session
        function startNewChat(silent = false) {
            const newSession = {
                id: Date.now(),
                title: 'New Chat',
                messages: []
            };
            chatSessions.unshift(newSession);
            currentSessionId = newSession.id;
            if (!silent) {
                saveChatSessions();
                updateChatHistory();
                updateChatMessages();
            }
        }

        // Update chat history UI
        function updateChatHistory() {
            const chatHistory = document.getElementById('chat-history');
            chatHistory.innerHTML = '';
            chatSessions.forEach(session => {
                const sessionDiv = document.createElement('div');
                sessionDiv.className = `chat-session ${session.id === currentSessionId ? 'active' : ''}`;
                sessionDiv.innerHTML = `
                    <span>${session.title}</span>
                    <button class="delete-session-btn" onclick="deleteSession(${session.id}); event.stopPropagation();"><i class="fas fa-trash"></i></button>
                `;
                sessionDiv.addEventListener('click', () => {
                    currentSessionId = session.id;
                    updateChatHistory();
                    updateChatMessages();
                });
                chatHistory.appendChild(sessionDiv);
            });
        }

        // Delete a chat session
        function deleteSession(sessionId) {
            chatSessions = chatSessions.filter(session => session.id !== sessionId);
            if (chatSessions.length > 0) {
                currentSessionId = chatSessions[0].id;
            } else {
                currentSessionId = null;
                startNewChat();
            }
            saveChatSessions();
            updateChatHistory();
            updateChatMessages();
        }

        // Update chat messages UI
        function updateChatMessages() {
            const chatMessages = document.getElementById('chat-messages');
            const emptyState = document.getElementById('empty-state');
            const currentSession = chatSessions.find(session => session.id === currentSessionId);
            
            if (!currentSession || currentSession.messages.length === 0) {
                emptyState.style.display = 'flex';
                chatMessages.innerHTML = '';
                chatMessages.appendChild(emptyState);
            } else {
                emptyState.style.display = 'none';
                chatMessages.innerHTML = '';
                currentSession.messages.forEach((msg, index) => {
                    const msgDiv = document.createElement('div');
                    msgDiv.className = `message ${msg.type}`;
                    msgDiv.innerHTML = `
                        <div class="message-avatar">${msg.type === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>'}</div>
                        <div class="message-container">
                            <div class="message-content">${msg.content}</div>
                            <div class="message-timestamp">${new Date(msg.timestamp).toLocaleTimeString()}</div>
                        </div>
                        <div class="message-actions">
                            <button class="message-action-btn delete" onclick="deleteMessage(${index})"><i class="fas fa-trash"></i></button>
                        </div>
                    `;
                    chatMessages.appendChild(msgDiv);
                });
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        // Delete a message
        function deleteMessage(index) {
            const currentSession = chatSessions.find(session => session.id === currentSessionId);
            if (currentSession) {
                currentSession.messages.splice(index, 1);
                if (currentSession.messages.length === 0) {
                    currentSession.title = 'New Chat';
                }
                saveChatSessions();
                updateChatHistory();
                updateChatMessages();
            }
        }

        // Handle file upload
        function handleFileUpload(files) {
            if (files.length === 0) return;
            const file = files[0];
            const currentSession = chatSessions.find(session => session.id === currentSessionId);
            if (!currentSession) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                let content;
                if (file.type.startsWith('image/')) {
                    content = `<img src="${e.target.result}" alt="${file.name}" />`;
                } else if (file.type === 'application/pdf') {
                    content = `<a href="${e.target.result}" target="_blank">${file.name}</a>`;
                } else {
                    return;
                }
                const message = {
                    type: 'user',
                    content: content,
                    timestamp: Date.now()
                };
                currentSession.messages.push(message);
                currentSession.title = file.name.substring(0, 20);
                saveChatSessions();
                updateChatHistory();
                updateChatMessages();
                document.getElementById('file-upload').value = '';
            };
            reader.readAsDataURL(file);
        }

        // Send message
        async function sendMessage() {
            const input = document.getElementById('chat-input');
            const messageText = input.value.trim();
            if (messageText === '') return;

            const currentSession = chatSessions.find(session => session.id === currentSessionId);
            if (!currentSession) return;

            // Add user message
            const userMessage = {
                type: 'user',
                content: messageText,
                timestamp: Date.now()
            };
            currentSession.messages.push(userMessage);
            currentSession.title = messageText.substring(0, 20);
            input.value = '';
            autoResize(input);
            updateCharCount(input);
            saveChatSessions();
            updateChatHistory();
            updateChatMessages();

            // Show typing indicator
            const typingIndicator = document.getElementById('typing-indicator');
            typingIndicator.classList.add('active');

            try {
                const response = await fetch(`${API_URL}?key=${API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: messageText
                            }]
                        }]
                    })
                });

                if (!response.ok) throw new Error('API request failed');

                const data = await response.json();
                const aiResponse = data.candidates[0].content.parts[0].text;

                const aiMessage = {
                    type: 'ai',
                    content: aiResponse,
                    timestamp: Date.now()
                };
                currentSession.messages.push(aiMessage);
                saveChatSessions();
                updateChatMessages();
            } catch (error) {
                const errorMessage = {
                    type: 'ai',
                    content: 'Sorry, something went wrong. Please try again.',
                    timestamp: Date.now()
                };
                currentSession.messages.push(errorMessage);
                saveChatSessions();
                updateChatMessages();
            } finally {
                typingIndicator.classList.remove('active');
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadChatSessions();
        });
        //]]>
    </script>
</body>
</html>
