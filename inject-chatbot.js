// Load chatbot HTML into the page automatically
fetch("chatbot.html")
  .then(response => response.text())
  .then(html => {
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);

    // Load chatbot CSS
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "chatbot.css";
    document.head.appendChild(cssLink);

    // Load chatbot JS logic
    const script = document.createElement("script");
    script.src = "chatbot.js";
    document.body.appendChild(script);
  });
