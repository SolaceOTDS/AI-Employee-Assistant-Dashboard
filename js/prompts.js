const promptButtons = document.querySelectorAll(".use-prompt");

promptButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const promptTitle = button
            .closest(".prompt-card")
            .querySelector("h3")
            .textContent;

        const prompts = {
            "Professional Email":
                "Help me write a professional workplace email.",

            "Document Summary":
                "Summarize a document and highlight the most important points.",

            "Report Generator":
                "Help me create a structured workplace report.",

            "Explain a Topic":
                "Explain a technical or workplace topic in simple language.",

            "Task Planner":
                "Help me break a workplace task into clear and manageable steps.",

            "Research Assistant":
                "Help me organize a research topic into key questions and areas to investigate."
        };

        const selectedPrompt = prompts[promptTitle];

        window.location.href =
            "chat.html?prompt=" + encodeURIComponent(selectedPrompt);
    });
});