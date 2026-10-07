function addActivity(title, description, icon, iconClass) {
  const activities = JSON.parse(localStorage.getItem("recentActivity")) || [];

  activities.unshift({
    title: title,
    description: description,
    icon: icon,
    iconClass: iconClass,
    time: "Just now",
  });

  localStorage.setItem(
    "recentActivity",
    JSON.stringify(activities.slice(0, 10)),
  );
}

if (document.getElementById("aiRequests")) {
  const savedSettings = JSON.parse(localStorage.getItem("settings")) || {};

  const userName = document.getElementById("userName");
  const userRole = document.getElementById("userRole");

  const topUserName = document.getElementById("topUserName");
  const topUserRole = document.getElementById("topUserRole");
  const welcomeName = document.getElementById("welcomeName");

  if (userName && savedSettings.profileName) {
    userName.textContent = savedSettings.profileName;
  }

  if (userRole && savedSettings.profileRole) {
    userRole.textContent = savedSettings.profileRole;
  }

  if (topUserName && savedSettings.profileName) {
    topUserName.textContent = savedSettings.profileName;
  }

  if (topUserRole && savedSettings.profileRole) {
    topUserRole.textContent = savedSettings.profileRole;
  }
  if (welcomeName && savedSettings.profileName) {
    welcomeName.textContent = savedSettings.profileName;
  }
  const greetingText = document.getElementById("greetingText");

  if (greetingText) {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      greetingText.textContent = "Good morning";
    } else if (hour >= 12 && hour < 17) {
      greetingText.textContent = "Good afternoon";
    } else {
      greetingText.textContent = "Good evening";
    }
  }
  const activityData = JSON.parse(localStorage.getItem("recentActivity")) || [];

  const aiRequestCount = activityData.filter(function (activity) {
    return activity.title === "AI request sent";
  }).length;

  const documentActivityCount = activityData.filter(function (activity) {
    return activity.title === "Knowledge article opened";
  }).length;

  const dashboardData = {
    aiRequests: 127 + aiRequestCount,
    aiRequestsChange: "↑ 12% this week",

    documents: 48 + documentActivityCount,
    documentsChange: "8 updated recently",

    tasksToday: "08",
    tasksChange: "3 completed",

    productivity: "86%",
    productivityChange: "↑ 5% this month",
  };

  document.getElementById("aiRequests").textContent = dashboardData.aiRequests;

  document.getElementById("aiRequestsChange").textContent =
    dashboardData.aiRequestsChange;

  document.getElementById("documents").textContent = dashboardData.documents;

  document.getElementById("documentsChange").textContent =
    dashboardData.documentsChange;

  document.getElementById("tasksToday").textContent = dashboardData.tasksToday;

  document.getElementById("tasksChange").textContent =
    dashboardData.tasksChange;

  document.getElementById("productivity").textContent =
    dashboardData.productivity;

  document.getElementById("productivityChange").textContent =
    dashboardData.productivityChange;
  const defaultActivity = [
    {
      icon: "✦",
      iconClass: "blue",
      title: "AI prompt generated",
      description: "You generated a project summary",
      time: "5 min ago",
    },
    {
      icon: "✓",
      iconClass: "green",
      title: "Document viewed",
      description: "Employee Guidelines.pdf",
      time: "32 min ago",
    },
    {
      icon: "▤",
      iconClass: "purple",
      title: "Prompt copied",
      description: "Meeting Summary prompt",
      time: "1 hr ago",
    },
    {
      icon: "◈",
      iconClass: "orange",
      title: "Knowledge article opened",
      description: "IT Support Guidelines",
      time: "2 hrs ago",
    },
  ];

  const savedActivity =
    JSON.parse(localStorage.getItem("recentActivity")) || [];

  const recentActivity =
    savedActivity.length > 0 ? savedActivity : defaultActivity;

  const activityList = document.getElementById("activityList");

  recentActivity.forEach(function (activity) {
    const item = document.createElement("div");
    item.className = "activity-item";

    item.innerHTML = `
        <div class="activity-icon ${activity.iconClass}">
            ${activity.icon}
        </div>

        <div class="activity-info">
            <strong>${activity.title}</strong>
            <span>${activity.description}</span>
        </div>

        <small>${activity.time}</small>
    `;

    activityList.appendChild(item);
  });
}
