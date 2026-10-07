let savedPrompts = JSON.parse(localStorage.getItem("savedPrompts")) || [];
const promptGrid = document.querySelector(".prompt-grid");

promptGrid.addEventListener("click", function (event) {
  if (!event.target.classList.contains("use-prompt")) {
    return;
  }

  const promptTitle = event.target
    .closest(".prompt-card")
    .querySelector("h3").textContent;

  const promptDescription = event.target
    .closest(".prompt-card")
    .querySelector(".prompt-card-content p")
    .textContent.trim();

  const prompts = {
    "Professional Email": "Help me write a professional workplace email.",

    "Document Summary":
      "Summarize a document and highlight the most important points.",

    "Report Generator": "Help me create a structured workplace report.",

    "Explain a Topic":
      "Explain a technical or workplace topic in simple language.",

    "Task Planner":
      "Help me break a workplace task into clear and manageable steps.",

    "Research Assistant":
      "Help me organize a research topic into key questions and areas to investigate.",
  };

  const selectedPrompt = prompts[promptTitle] || promptDescription;

  addActivity("AI prompt used", promptTitle, "✦", "blue");

  window.location.href =
    "chat.html?prompt=" + encodeURIComponent(selectedPrompt);
});
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.category;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const promptCards = document.querySelectorAll(".prompt-card");

    promptCards.forEach(function (card) {
      const category = card.querySelector(".prompt-footer span").textContent;

      if (selectedCategory === "All" || category === selectedCategory) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const createPromptBtn = document.getElementById("createPromptBtn");
const newPromptForm = document.getElementById("newPromptForm");
const cancelPromptBtn = document.getElementById("cancelPromptBtn");

createPromptBtn.addEventListener("click", function () {
  newPromptForm.style.display = "block";
});

cancelPromptBtn.addEventListener("click", function () {
  newPromptForm.style.display = "none";
});
const savePromptBtn = document.getElementById("savePromptBtn");
const promptName = document.getElementById("promptName");
const promptCategory = document.getElementById("promptCategory");
const promptText = document.getElementById("promptText");

savePromptBtn.addEventListener("click", function () {
  const name = promptName.value.trim();
  const category = promptCategory.value;
  const text = promptText.value.trim();

  if (name === "" || text === "") {
    alert("Please enter a prompt name and prompt text.");
    return;
  }
  const newPrompt = {
    name: name,
    category: category,
    text: text,
  };

  savedPrompts.push(newPrompt);

  localStorage.setItem("savedPrompts", JSON.stringify(savedPrompts));

  const card = document.createElement("div");
  card.className = "prompt-card";

  card.innerHTML = `
        <div class="prompt-icon">✦</div>

        <div class="prompt-card-content">
            <h3>${name}</h3>

            <p>${text}</p>

            <div class="prompt-footer">
                <span>${category}</span>
                <button class="use-prompt">Use Prompt</button>
            </div>
        </div>
    `;

  promptGrid.appendChild(card);

  promptName.value = "";
  promptText.value = "";

  newPromptForm.style.display = "none";
});
savedPrompts.forEach(function (prompt) {
  const card = document.createElement("div");
  card.className = "prompt-card";

  card.innerHTML = `
    <div class="prompt-icon">✦</div>

    <div class="prompt-card-content">
      <h3>${prompt.name}</h3>

      <p>${prompt.text}</p>

      <div class="prompt-footer">
        <span>${prompt.category}</span>
        <button class="use-prompt">Use Prompt</button>
      </div>
    </div>
  `;

  promptGrid.appendChild(card);
});
