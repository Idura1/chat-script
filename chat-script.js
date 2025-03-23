const API_KEY = 'AIzaSyC4yiq-8oZxj7hfwmGUJ1r8twKy1DO_QKY';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

let chatSessions = [];
let currentSessionId = null;

function loadChatSessions() {
    const savedSessions = localStorage.getItem('chatSessions');
    if (savedSessions) {
        chatSessions = JSON.parse(savedSessions);
        if (chatSessions.length > 0) {
            currentSessionId = chatSessions[0].id;
        }
    }
    if (chatSessions.length === 0) {
        startNewChat();
    }
    updateChatHistory();
    updateChatMessages();
}

function saveChatSessions() {
    localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
}

const themeToggle = document.getElementById('theme-toggle');
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌙';
} else {
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', toggleTheme);

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
}

function formatTimestamp(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function startNewChat() {
    const newSession = {
        id: Date.now(),
        messages: [],
        title: 'New Chat'
    };
    chatSessions.push(newSession);
    currentSessionId = newSession.id;
    updateChatHistory();
    updateChatMessages();
    document.getElementById('chat-input').value = '';
    document.getElementById('file-upload').value = '';
    saveChatSessions();
}

function deleteChatSession(sessionId) {
    if (confirm('Are you sure you want to delete this chat session?')) {
        chatSessions = chatSessions.filter(session => session.id !== sessionId);
        if (chatSessions.length > 0) {
            currentSessionId = chatSessions[0].id;
        } else {
            currentSessionId = null;
            startNewChat();
        }
        updateChatHistory();
        updateChatMessages();
        saveChatSessions();
    }
}

function deleteMessage(sessionId, messageIndex) {
    if (confirm('Are you sure you want to delete this message?')) {
        const session = chatSessions.find(s => s.id === sessionId);
        if (session) {
            session.messages.splice(messageIndex, 1);
            if (messageIndex === 0 && session.messages.length > 0) {
                const firstMessage = session.messages[0];
                if (firstMessage.role === 'file') {
                    session.title = `File: ${firstMessage.fileName.substring(0, 20)}${firstMessage.fileName.length > 20 ? '...' : ''}`;
                } else {
                    session.title = firstMessage.content.substring(0, 30) + (firstMessage.content.length > 30 ? '...' : '');
                }
            } else if (session.messages.length === 0) {
                session.title = 'New Chat';
            }
            updateChatHistory();
            updateChatMessages();
            saveChatSessions();
        }
    }
}

function updateChatHistory() {
    const chatHistory = document.getElementById('chat-history');
    chatHistory.innerHTML = '';
    chatSessions.forEach(session => {
        const sessionDiv = document.createElement('div');
        sessionDiv.className = `chat-session ${session.id === currentSessionId ? 'active' : ''}`;
        sessionDiv.innerHTML = `
            <span>${session.title}</span>
            <button class="delete-session-btn" onclick="deleteChatSession(${session.id})">🗑️</button>
        `;
        sessionDiv.querySelector('span').onclick = () => {
            currentSessionId = session.id;
            updateChatHistory();
            updateChatMessages();
        };
        chatHistory.appendChild(sessionDiv);
    });
}

function updateChatMessages() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    const currentSession = chatSessions.find(session => session.id === currentSessionId);
    if (currentSession) {
        currentSession.messages.forEach((message, index) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${message.role}`;
            if (message.role === 'file') {
                let fileContent = '';
                if (message.fileType.startsWith('image/')) {
                    fileContent = `<img src="${message.content}" alt="Uploaded Image">`;
                } else {
                    fileContent = `<a href="${message.content}" target="_blank">${message.fileName}</a>`;
                }
                messageDiv.innerHTML = `
                    <div class="message-content">${fileContent}</div>
                    <div class="message-timestamp">${formatTimestamp(new Date(message.timestamp))}</div>
                    <button class="delete-message-btn" onclick="deleteMessage(${currentSession.id}, ${index})">🗑️</button>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="message-content">${message.content}</div>
                    <div class="message-timestamp">${formatTimestamp(new Date(message.timestamp))}</div>
                    <button class="delete-message-btn" onclick="deleteMessage(${currentSession.id}, ${index})">🗑️</button>
                `;
            }
            chatMessages.appendChild(messageDiv);
        });
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleFileUpload(files) {
    if (files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const fileData = e.target.result;
        const currentSession = chatSessions.find(session => session.id === currentSessionId);
        if (!currentSession) {
            startNewChat();
            currentSession = chatSessions.find(session => session.id === currentSessionId);
        }

        currentSession.messages.push({
            role: 'file',
            content: fileData,
            fileName: file.name,
            fileType: file.type,
            timestamp: Date.now()
        });

        if (currentSession.messages.length === 1) {
            currentSession.title = `File: ${file.name.substring(0, 20)}${file.name.length > 20 ? '...' : ''}`;
        }

        updateChatHistory();
        updateChatMessages();
        saveChatSessions();

        sendFileMessage(file);
    };

    reader.readAsDataURL(file);
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    if (!currentSessionId) {
        startNewChat();
    }

    const currentSession = chatSessions.find(session => session.id === currentSessionId);
    currentSession.messages.push({
        role: 'user',
        content: message,
        timestamp: Date.now()
    });

    if (currentSession.messages.length === 1) {
        currentSession.title = message.substring(0, 30) + (message.length > 30 ? '...' : '');
    }

    updateChatHistory();
    updateChatMessages();
    saveChatSessions();

    input.value = '';
    autoResize(input);

    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.classList.add('active');
    document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: message
                    }]
                }]
            })
        });

        const data = await response.json();
        typingIndicator.classList.remove('active');

        if (data.candidates && data.candidates[0].content) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            currentSession.messages.push({
                role: 'ai',
                content: aiResponse,
                timestamp: Date.now()
            });
        } else {
            currentSession.messages.push({
                role: 'ai',
                content: 'Sorry, I couldn’t process your request. Please try again.',
                timestamp: Date.now()
            });
        }
    } catch (error) {
        typingIndicator.classList.remove('active');
        currentSession.messages.push({
            role: 'ai',
            content: 'An error occurred while fetching the response. Please try again.',
            timestamp: Date.now()
        });
    }

    updateChatMessages();
    saveChatSessions();
}

async function sendFileMessage(file) {
    const currentSession = chatSessions.find(session => session.id === currentSessionId);
    const prompt = `Describe the content of this file: ${file.name}. It is a ${file.type} file.`;

    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.classList.add('active');
    document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });

        const data = await response.json();
        typingIndicator.classList.remove('active');

        if (data.candidates && data.candidates[0].content) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            currentSession.messages.push({
                role: 'ai',
                content: aiResponse,
                timestamp: Date.now()
            });
        } else {
            currentSession.messages.push({
                role: 'ai',
                content: 'Sorry, I couldn’t analyze the file. Please try again or provide more details.',
                timestamp: Date.now()
            });
        }
    } catch (error) {
        typingIndicator.classList.remove('active');
        currentSession.messages.push({
            role: 'ai',
            content: 'An error occurred while analyzing the file. Please try again.',
            timestamp: Date.now()
        });
    }

    updateChatMessages();
    saveChatSessions();
}

document.addEventListener('DOMContentLoaded', loadChatSessions);
