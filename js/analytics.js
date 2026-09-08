const analyticsData = {
  totalAIRequests: 127,
  documentsProcessed: 48,
  promptsUsed: 73,
  productivityScore: "86%",
};

document.getElementById("totalAIRequests").textContent =
  analyticsData.totalAIRequests;

document.getElementById("documentsProcessed").textContent =
  analyticsData.documentsProcessed;

document.getElementById("promptsUsed").textContent = analyticsData.promptsUsed;

document.getElementById("productivityScore").textContent =
  analyticsData.productivityScore;
const timeRange = document.getElementById("timeRange");
const chartDescription = document.getElementById("chartDescription");

timeRange.addEventListener("change", function () {
  if (timeRange.value === "Last 7 Days") {
    chartDescription.textContent = "Sample requests over the last 7 days";
  } else if (timeRange.value === "Last 30 Days") {
    chartDescription.textContent = "Sample requests over the last 30 days";
  } else if (timeRange.value === "Last 90 Days") {
    chartDescription.textContent = "Sample requests over the last 90 days";
  }
});
const chartBars = [
  document.getElementById("bar1"),
  document.getElementById("bar2"),
  document.getElementById("bar3"),
  document.getElementById("bar4"),
  document.getElementById("bar5"),
  document.getElementById("bar6"),
  document.getElementById("bar7"),
];

timeRange.addEventListener("change", function () {
  let heights;

  if (timeRange.value === "Last 7 Days") {
    heights = [45, 65, 52, 78, 62, 35, 55];
  } else if (timeRange.value === "Last 30 Days") {
    heights = [58, 72, 64, 82, 70, 48, 67];
  } else {
    heights = [68, 75, 70, 88, 79, 60, 73];
  }

  chartBars.forEach(function (bar, index) {
    bar.style.height = heights[index] + "%";
  });
});
