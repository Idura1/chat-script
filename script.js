const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const sidebar = document.querySelector('.sidebar');
let chatSessions = [];
let currentSessionId = null;

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    sidebar.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Basic chat functionality (expand as needed)
function startNewChat() {
    const newSession = { id: Date.now(), messages: [] };
    chatSessions.unshift(newSession);
    currentSessionId = newSession.id;
    updateChatHistory();
    updateChatMessages();
    saveChatSessions();
}

function updateChatHistory() {
    const chatHistory = document.getElementById('chat-history');
    chatHistory.innerHTML = chatSessions.map(session => `
        <div class="chat-session ${session.id === currentSessionId ? 'active' : ''}" onclick="loadSession(${session.id})">
            Chat #${session.id}
        </div>
    `).join('');
}

function updateChatMessages() {
    const chatMessages = document.getElementById('chat-messages');
    const session = chatSessions.find(s => s.id === currentSessionId);
    chatMessages.innerHTML = session && session.messages.length ? 
        session.messages.map(msg => `<div class="message ${msg.role}"><div class="message-content">${msg.text}</div></div>`).join('') : 
        `<div class="empty-state"><i class="fas fa-robot empty-state-icon"></i><h3>Start a Conversation</h3><p>Chat with AI, ask questions, or upload files to get started.</p></div>`;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    const session = chatSessions.find(s => s.id === currentSessionId);
    session.messages.push({ role: 'user', text });
    input.value = '';
    updateChatMessages();
    saveChatSessions();
    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
        session.messages.push({ role: 'ai', text: 'Hello! How can I assist you?' });
        updateChatMessages();
        saveChatSessions();
    }, 1000);
}

function loadSession(id) {
    currentSessionId = id;
    updateChatHistory();
    updateChatMessages();
}

function saveChatSessions() {
    localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
}

function loadChatSessions() {
    const saved = localStorage.getItem('chatSessions');
    if (saved) chatSessions = JSON.parse(saved);
    if (!chatSessions.length) startNewChat();
    else currentSessionId = chatSessions[0].id;
    updateChatHistory();
    updateChatMessages();
}

document.querySelectorAll('.new-chat-btn').forEach(btn => btn.addEventListener('click', startNewChat));
document.getElementById('chat-input').addEventListener('keypress', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

loadChatSessions();
