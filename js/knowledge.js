let savedResources = JSON.parse(localStorage.getItem("savedResources")) || [];

const knowledgeSearch = document.getElementById("knowledgeSearch");
const knowledgeGrid = document.querySelector(".knowledge-grid");

knowledgeSearch.addEventListener("input", function () {
  const searchText = knowledgeSearch.value.toLowerCase();
  const currentCards = document.querySelectorAll(".knowledge-card");

  currentCards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchText)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
const resourcePanel = document.getElementById("resourcePanel");
const closeResource = document.getElementById("closeResource");

const resourceTitle = document.getElementById("resourceTitle");
const resourceCategory = document.getElementById("resourceCategory");
const resourceDescription = document.getElementById("resourceDescription");
const resourceDetails = document.getElementById("resourceDetails");

const resources = {
  "company-policies": {
    category: "Workplace",
    title: "Company Policies",
    description:
      "General workplace policies, guidelines, and employee procedures.",
    details: [
      "Workplace conduct and professional behavior",
      "Attendance and leave guidelines",
      "Communication and workplace responsibilities",
      "General employee procedures",
    ],
  },

  "employee-handbook": {
    category: "Employee Resources",
    title: "Employee Handbook",
    description:
      "Information about workplace practices, responsibilities, and company guidelines.",
    details: [
      "Employee roles and responsibilities",
      "Workplace practices and expectations",
      "General company guidelines",
      "Employee support information",
    ],
  },

  "technical-resources": {
    category: "Technical",
    title: "Technical Resources",
    description:
      "Technical documentation and resources used for common workplace tasks.",
    details: [
      "Software and system documentation",
      "Common technical procedures",
      "Troubleshooting information",
      "Technical reference material",
    ],
  },

  "project-information": {
    category: "Projects",
    title: "Project Information",
    description:
      "Sample project details, requirements, notes, and supporting information.",
    details: [
      "Project requirements",
      "Task and milestone information",
      "Project notes",
      "Supporting documentation",
    ],
  },

  "training-materials": {
    category: "Learning",
    title: "Training Materials",
    description:
      "Learning resources and training material for employee development.",
    details: [
      "Employee training resources",
      "Learning guides",
      "Skill development material",
      "Training references",
    ],
  },

  "system-guides": {
    category: "Systems",
    title: "System Guides",
    description:
      "Sample guides explaining common systems, tools, and workplace processes.",
    details: [
      "System usage guides",
      "Common workplace tools",
      "Basic system procedures",
      "Process reference information",
    ],
  },
};

knowledgeGrid.addEventListener("click", function (event) {
  const card = event.target.closest(".knowledge-card");

  if (!card) {
    return;
  }

  const resourceId = card.dataset.resource;

  if (resourceId) {
    const resource = resources[resourceId];

    if (!resource) {
      return;
    }

    resourceCategory.textContent = resource.category;
    resourceTitle.textContent = resource.title;
    resourceDescription.textContent = resource.description;

    resourceDetails.innerHTML = "";

    resource.details.forEach(function (detail) {
      const item = document.createElement("li");
      item.textContent = detail;
      resourceDetails.appendChild(item);
    });
  } else {
    const title = card.querySelector("h3").textContent;
    const description = card.querySelector(".knowledge-content p").textContent;
    const category = card.querySelector(".knowledge-meta span").textContent;

    resourceCategory.textContent = category;
    resourceTitle.textContent = title;
    resourceDescription.textContent = description;

    resourceDetails.innerHTML = `
      <li>Custom knowledge resource</li>
      <li>Added by the employee</li>
      <li>Available for workplace reference</li>
    `;
  }

  resourcePanel.style.display = "block";
  addActivity(
    "Knowledge article opened",
    resourceTitle.textContent,
    "◈",
    "orange",
  );

  resourcePanel.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

closeResource.addEventListener("click", function () {
  resourcePanel.style.display = "none";
});
const addResourceBtn = document.getElementById("addResourceBtn");
const newResourceForm = document.getElementById("newResourceForm");
const cancelResourceBtn = document.getElementById("cancelResourceBtn");

addResourceBtn.addEventListener("click", function () {
  newResourceForm.style.display = "block";
});

cancelResourceBtn.addEventListener("click", function () {
  newResourceForm.style.display = "none";
});
const saveResourceBtn = document.getElementById("saveResourceBtn");
const resourceName = document.getElementById("resourceName");
const newResourceCategory = document.getElementById("newResourceCategory");
const resourceText = document.getElementById("resourceText");

saveResourceBtn.addEventListener("click", function () {
  const name = resourceName.value.trim();
  const category = newResourceCategory.value;
  const description = resourceText.value.trim();

  if (name === "" || description === "") {
    alert("Please enter a resource name and description.");
    return;
  }
  const newResource = {
    name: name,
    category: category,
    description: description,
  };

  savedResources.push(newResource);

  localStorage.setItem("savedResources", JSON.stringify(savedResources));

  const card = document.createElement("div");
  card.className = "knowledge-card";

  card.innerHTML = `
        <div class="knowledge-icon">
            ◈
        </div>

        <div class="knowledge-content">

            <h3>${name}</h3>

            <p>${description}</p>

            <div class="knowledge-meta">
                <span>${category}</span>
                <span>Added recently</span>
            </div>

        </div>
    `;

  knowledgeGrid.appendChild(card);

  resourceName.value = "";
  resourceText.value = "";

  newResourceForm.style.display = "none";
});
savedResources.forEach(function (resource) {
  const card = document.createElement("div");
  card.className = "knowledge-card";

  card.innerHTML = `
    <div class="knowledge-icon">
      ◈
    </div>

    <div class="knowledge-content">

      <h3>${resource.name}</h3>

      <p>${resource.description}</p>

      <div class="knowledge-meta">
        <span>${resource.category}</span>
        <span>Saved resource</span>
      </div>

    </div>
  `;

  knowledgeGrid.appendChild(card);
});
