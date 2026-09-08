const dashboardData = {
  aiRequests: 127,
  aiRequestsChange: "↑ 12% this week",

  documents: 48,
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

document.getElementById("tasksChange").textContent = dashboardData.tasksChange;

document.getElementById("productivity").textContent =
  dashboardData.productivity;

document.getElementById("productivityChange").textContent =
  dashboardData.productivityChange;
const recentActivity = [
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
