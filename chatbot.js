// Wait until chatbot HTML is ready
document.addEventListener("DOMContentLoaded", function () {

    const icon = document.getElementById("chatbot-icon");
    const windowEl = document.getElementById("chatbot-window");
    const sendBtn = document.getElementById("chatbot-send");
    const input = document.getElementById("chatbot-text");
    const messages = document.querySelector(".chatbot-messages");
    const quickButtons = document.querySelectorAll(".chatbot-quick");

    if (!icon || !windowEl) return;

    // Toggle chatbot visibility
    icon.addEventListener("click", () => {
        windowEl.classList.toggle("open");
    });

    // Auto greeting after 3 seconds
    setTimeout(() => {
        botMessage("Hello! 👋 I'm here to help with appointments, services, and clinic info.");
    }, 1500);

    // Send message on click
    sendBtn.addEventListener("click", sendMessage);

    // Send message on Enter
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") sendMessage();
    });

    // Quick buttons logic
    quickButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            userMessage(btn.dataset.msg);
            respondToQuick(btn.dataset.msg);
        });
    });

    // Add user message to chat
    function userMessage(text) {
        messages.innerHTML += `<div class="chatbot-user-msg">${text}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }

    // Add bot message to chat
    function botMessage(text) {
        messages.innerHTML += `<div class="chatbot-bot-msg">${text}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }

    // Main send message handler
    function sendMessage() {
        const text = input.value.trim();
        if (text === "") return;
        userMessage(text);
        input.value = "";
        setTimeout(() => botMessage(autoResponse(text)), 500);
    }

    // Smart reply handling
    function respondToQuick(option) {
        setTimeout(() => botMessage(autoResponse(option)), 500);
    }

    // Predefined responses
    function autoResponse(input) {
        input = input.toLowerCase();

        if (input.includes("book")) {
            return `✅ You can book an appointment here:<br><a href="BookingDP.html">Click to Book</a>`;
        }

        if (input.includes("service")) {
            return `🦷 We offer whitening, implants, braces, root canals and more:<br><a href="ServiceDP.html">View Services</a>`;
        }

        if (input.includes("emergency")) {
            return `🚑 Emergency dental care is available:<br><a href="EmergencyDP.html">Emergency Info</a>`;
        }

        if (input.includes("hours") || input.includes("open")) {
            return `🕒 Our clinic hours:<br>Sat–Thu: 9am – 9pm<br>Friday: Closed`;
        }

        return `Thank you! A team member will assist you soon. 😊`;
    }
});
