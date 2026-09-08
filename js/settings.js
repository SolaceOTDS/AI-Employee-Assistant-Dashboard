const saveButton = document.getElementById("saveSettings");
const saveMessage = document.getElementById("saveMessage");

const themeSelect = document.getElementById("themeSelect");

const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");

const aiResponses = document.getElementById("aiResponses");
const promptSuggestions = document.getElementById("promptSuggestions");
const activityNotifications = document.getElementById("activityNotifications");
const weeklySummary = document.getElementById("weeklySummary");

const savedSettings = JSON.parse(localStorage.getItem("settings")) || {};

if (savedSettings.profileName) {
  profileName.value = savedSettings.profileName;
}

if (savedSettings.profileRole) {
  profileRole.value = savedSettings.profileRole;
}

if (savedSettings.aiResponses !== undefined) {
  aiResponses.checked = savedSettings.aiResponses;
}

if (savedSettings.promptSuggestions !== undefined) {
  promptSuggestions.checked = savedSettings.promptSuggestions;
}

if (savedSettings.activityNotifications !== undefined) {
  activityNotifications.checked = savedSettings.activityNotifications;
}

if (savedSettings.weeklySummary !== undefined) {
  weeklySummary.checked = savedSettings.weeklySummary;
}

if (savedSettings.theme) {
  themeSelect.value = savedSettings.theme;

  if (savedSettings.theme === "light") {
    document.body.style.background = "#f8fafc";
    document.body.style.color = "#0f172a";
  }
}

saveButton.addEventListener("click", function () {
  const settings = {
    profileName: profileName.value,
    profileRole: profileRole.value,
    aiResponses: aiResponses.checked,
    promptSuggestions: promptSuggestions.checked,
    activityNotifications: activityNotifications.checked,
    weeklySummary: weeklySummary.checked,
    theme: themeSelect.value,
  };

  localStorage.setItem("settings", JSON.stringify(settings));

  saveMessage.textContent = "Settings saved successfully.";

  setTimeout(function () {
    saveMessage.textContent = "";
  }, 2500);
});

themeSelect.addEventListener("change", function () {
  if (themeSelect.value === "light") {
    document.body.style.background = "#f8fafc";
    document.body.style.color = "#0f172a";
  } else {
    document.body.style.background = "var(--bg)";
    document.body.style.color = "var(--text)";
  }
});
