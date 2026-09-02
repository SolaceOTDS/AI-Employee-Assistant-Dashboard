const saveButton = document.getElementById("saveSettings");
const saveMessage = document.getElementById("saveMessage");
const themeSelect = document.getElementById("themeSelect");

saveButton.addEventListener("click", function() {
    saveMessage.textContent = "Settings saved successfully.";

    setTimeout(function() {
        saveMessage.textContent = "";
    }, 2500);
});

themeSelect.addEventListener("change", function() {

    if (themeSelect.value === "light") {
        document.body.style.background = "#f8fafc";
        document.body.style.color = "#0f172a";
    } else {
        document.body.style.background = "var(--bg)";
        document.body.style.color = "var(--text)";
    }

});