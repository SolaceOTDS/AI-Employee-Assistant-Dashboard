const urlParams = new URLSearchParams(window.location.search);
const selectedPrompt = urlParams.get("prompt");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");

function addMessage(text, type) {

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
}


function sendMessage() {

    const message = chatInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    chatInput.value = "";

    setTimeout(() => {

        let response =
            "I've received your request. This is a simulated AI response for the frontend prototype.";

        if (message.toLowerCase().includes("email")) {
            response =
                "I can help you draft a professional workplace email. Please provide the recipient, subject, and main points.";
        }
        else if (message.toLowerCase().includes("summar")) {
            response =
                "I can summarize documents and highlight their key points. Please provide the document content you would like summarized.";
        }
        else if (message.toLowerCase().includes("report")) {
            response =
                "I can help structure a workplace report with sections such as introduction, findings, and conclusion.";
        }

        addMessage(response, "ai");

    }, 800);
}


sendButton.addEventListener("click", sendMessage);


chatInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }

});
const suggestions = document.querySelectorAll(".suggestion");

suggestions.forEach(function(button) {
    button.addEventListener("click", function() {
        chatInput.value = button.textContent;
        sendMessage();
    });
});
if (selectedPrompt) {
    chatInput.value = selectedPrompt;
    chatInput.focus();
}