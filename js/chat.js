const urlParams = new URLSearchParams(window.location.search);
const selectedPrompt = urlParams.get("prompt");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");

function addMessage(text, type, save = true) {
  const message = document.createElement("div");
  message.className = `message ${type}-message`;

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.textContent = type === "ai" ? "AI" : "RG";

  const content = document.createElement("div");
  content.className = "message-content";

  const name = document.createElement("strong");
  name.textContent = type === "ai" ? "AI Assistant" : "You";

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  content.appendChild(name);
  content.appendChild(paragraph);

  message.appendChild(avatar);
  message.appendChild(content);

  chatMessages.appendChild(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  if (save) {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

    chatHistory.push({
      text: text,
      type: type,
    });

    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }
}
const savedChatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

savedChatHistory.forEach(function (message) {
  addMessage(message.text, message.type, false);
});

function sendMessage() {
  const message = chatInput.value.trim();

  if (message === "") {
    return;
  }

  addMessage(message, "user");

  chatInput.value = "";
  addActivity("AI request sent", message, "✦", "blue");

  setTimeout(() => {
    let response =
      "I've received your request. This is a simulated AI response for the frontend prototype.";

    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      response =
        "Hello! I'm your AI Employee Assistant. I can help with emails, documents, reports, research, and workplace tasks.";
    } else if (
      lowerMessage.includes("email") ||
      lowerMessage.includes("mail")
    ) {
      response =
        "I can help you draft a professional workplace email. Please provide the recipient, subject, and main points.";
    } else if (
      lowerMessage.includes("summar") ||
      lowerMessage.includes("document")
    ) {
      response =
        "I can summarize documents and highlight their key points. Please provide the document content you would like summarized.";
    } else if (lowerMessage.includes("report")) {
      response =
        "I can help structure a workplace report with sections such as introduction, findings, recommendations, and conclusion.";
    } else if (lowerMessage.includes("research")) {
      response =
        "I can help organize a research topic by identifying key questions, important areas to investigate, and possible sources of information.";
    } else if (lowerMessage.includes("task") || lowerMessage.includes("plan")) {
      response =
        "I can help break a workplace task into smaller steps, prioritize them, and organize them into a simple action plan.";
    } else if (lowerMessage.includes("help")) {
      response =
        "I can assist with workplace emails, document summaries, reports, research, task planning, and general questions.";
    }

    addMessage(response, "ai");
  }, 800);
}

sendButton.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();

    sendMessage();
  }
});
const suggestions = document.querySelectorAll(".suggestion");

suggestions.forEach(function (button) {
  button.addEventListener("click", function () {
    chatInput.value = button.textContent;
    sendMessage();
  });
});
if (selectedPrompt) {
  chatInput.value = selectedPrompt;
  chatInput.focus();
}
const chatSuggestions = document.getElementById("chatSuggestions");

const savedSettings = JSON.parse(localStorage.getItem("settings")) || {};

if (savedSettings.promptSuggestions === false) {
  chatSuggestions.style.display = "none";
}
const clearChatButton = document.getElementById("clearChat");

clearChatButton.addEventListener("click", function () {
  localStorage.removeItem("chatHistory");

  chatMessages.innerHTML = `
    <div class="message ai-message">
      <div class="message-avatar">AI</div>

      <div class="message-content">
        <strong>AI Assistant</strong>

        <p>
          Hello! I'm your AI Employee Assistant.
          How can I help you today?
        </p>
      </div>
    </div>
  `;
});
