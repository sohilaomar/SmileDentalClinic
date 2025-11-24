const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");

chatbotToggle.addEventListener("click", () => {
  chatbotContainer.style.display =
    chatbotContainer.style.display === "flex" ? "none" : "flex";
});

chatbotSend.addEventListener("click", sendMessage);
chatbotInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userText = chatbotInput.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  chatbotInput.value = "";

  setTimeout(() => {
    addMessage(botReply(userText), "bot");
  }, 600);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("chat-msg", sender);
  msg.textContent = text;
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function botReply(input) {
  const text = input.toLowerCase();

  if (text.includes("hours") || text.includes("open"))
    return "We are open from 9am–9pm every day.";

  if (text.includes("book") || text.includes("appointment"))
    return "You can book through the Booking page — would you like the link?";

  if (text.includes("services"))
    return "We offer cleaning, whitening, braces, implants, crowns, and emergency care.";

  if (text.includes("location"))
    return "We are located at: 123 Dental Street, Cairo.";

  return "Thanks for your message! A staff member will reply shortly.";
}

setTimeout(() => {
  addMessage("Hello! How can we help with your dental care today?", "bot");
}, 2000);
