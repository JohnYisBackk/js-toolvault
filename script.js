"use strict";

lucide.createIcons();

// ======================================================
// 1. SELECT ELEMENTS
// ======================================================

// SEARCH
const searchInput = document.getElementById("searchInput");

// THEME
const themeBtn = document.getElementById("themeBtn");

// FILTERS
const filterButtons = document.querySelectorAll(".filter-btn");

// SORT
const sortSelect = document.getElementById("sortSelect");

// STATS
const totalToolsValue = document.getElementById("totalToolsValue");
const totalToolsGrowth = document.getElementById("totalToolsGrowth");

const favoritesValue = document.getElementById("favoritesValue");
const favoritesGrowth = document.getElementById("favoritesGrowth");

const categoriesValue = document.getElementById("categoriesValue");

const freeToolsValue = document.getElementById("freeToolsValue");
const freeToolsPercent = document.getElementById("freeToolsPercent");

// TOOLS GRID
const resultsCount = document.getElementById("resultsCount");
const toolsGrid = document.getElementById("toolsGrid");

// SHOW MORE / LESS
const showMoreBtn = document.getElementById("showMoreBtn");
const showMoreText = document.getElementById("showMoreText");

// ======================================================
// 2. DATA
// ======================================================

const tools = [
  {
    id: 1,
    name: "Visual Studio Code",
    description: "A powerful code editor for modern web development.",
    category: "development",
    rating: 4.9,
    reviews: 1250,
    popularity: 24500,
    pricing: "free",
    icon: "code-xml",
  },
  {
    id: 2,
    name: "GitHub",
    description: "Host repositories and collaborate on coding projects.",
    category: "development",
    rating: 4.8,
    reviews: 980,
    popularity: 22000,
    pricing: "freemium",
    icon: "github",
  },
  {
    id: 3,
    name: "Postman",
    description: "Build, test and manage APIs in one workspace.",
    category: "development",
    rating: 4.7,
    reviews: 640,
    popularity: 15800,
    pricing: "freemium",
    icon: "send",
  },
  {
    id: 4,
    name: "CodePen",
    description: "Experiment with HTML, CSS and JavaScript online.",
    category: "development",
    rating: 4.6,
    reviews: 420,
    popularity: 12300,
    pricing: "freemium",
    icon: "code",
  },
  {
    id: 5,
    name: "StackBlitz",
    description: "Create and run web applications in your browser.",
    category: "development",
    rating: 4.7,
    reviews: 350,
    popularity: 10800,
    pricing: "freemium",
    icon: "zap",
  },
  {
    id: 6,
    name: "Figma",
    description: "Design interfaces and collaborate on UI projects.",
    category: "design",
    rating: 4.9,
    reviews: 1100,
    popularity: 21000,
    pricing: "freemium",
    icon: "pen-tool",
  },
  {
    id: 7,
    name: "Canva",
    description: "Create graphics, presentations and social media designs.",
    category: "design",
    rating: 4.7,
    reviews: 870,
    popularity: 19500,
    pricing: "freemium",
    icon: "palette",
  },
  {
    id: 8,
    name: "Photopea",
    description: "Edit images and graphics directly in your browser.",
    category: "design",
    rating: 4.6,
    reviews: 510,
    popularity: 11200,
    pricing: "free",
    icon: "image",
  },
  {
    id: 9,
    name: "Coolors",
    description: "Generate beautiful color palettes for your designs.",
    category: "design",
    rating: 4.8,
    reviews: 390,
    popularity: 9400,
    pricing: "freemium",
    icon: "swatch-book",
  },
  {
    id: 10,
    name: "Notion",
    description: "Organize notes, documents and projects in one place.",
    category: "productivity",
    rating: 4.8,
    reviews: 960,
    popularity: 18700,
    pricing: "freemium",
    icon: "notebook-pen",
  },
  {
    id: 11,
    name: "Trello",
    description: "Manage tasks and projects using visual boards.",
    category: "productivity",
    rating: 4.6,
    reviews: 720,
    popularity: 14200,
    pricing: "freemium",
    icon: "kanban",
  },
  {
    id: 12,
    name: "Todoist",
    description: "Plan your daily tasks and improve productivity.",
    category: "productivity",
    rating: 4.7,
    reviews: 580,
    popularity: 13100,
    pricing: "freemium",
    icon: "list-todo",
  },
  {
    id: 13,
    name: "Google Calendar",
    description: "Schedule events and organize your daily activities.",
    category: "productivity",
    rating: 4.7,
    reviews: 790,
    popularity: 17400,
    pricing: "free",
    icon: "calendar-days",
  },
  {
    id: 14,
    name: "ChatGPT",
    description: "Explore ideas, write code and solve problems with AI.",
    category: "ai",
    rating: 4.9,
    reviews: 1450,
    popularity: 28000,
    pricing: "freemium",
    icon: "bot",
  },
  {
    id: 15,
    name: "Claude",
    description: "An AI assistant for writing, reasoning and coding.",
    category: "ai",
    rating: 4.8,
    reviews: 890,
    popularity: 20400,
    pricing: "freemium",
    icon: "brain-circuit",
  },
  {
    id: 16,
    name: "Perplexity",
    description: "Search for information with AI-powered answers.",
    category: "ai",
    rating: 4.7,
    reviews: 670,
    popularity: 16300,
    pricing: "freemium",
    icon: "sparkles",
  },
  {
    id: 17,
    name: "GitHub Copilot",
    description: "Get AI-powered coding suggestions in your editor.",
    category: "ai",
    rating: 4.8,
    reviews: 810,
    popularity: 19200,
    pricing: "freemium",
    icon: "terminal",
  },
  {
    id: 18,
    name: "DeepL",
    description: "Translate text and documents using artificial intelligence.",
    category: "ai",
    rating: 4.8,
    reviews: 620,
    popularity: 15100,
    pricing: "freemium",
    icon: "languages",
  },
  {
    id: 19,
    name: "JSON Formatter",
    description: "Format and validate JSON data with ease.",
    category: "utilities",
    rating: 4.5,
    reviews: 280,
    popularity: 7600,
    pricing: "free",
    icon: "braces",
  },
  {
    id: 20,
    name: "TinyPNG",
    description: "Compress images while maintaining visual quality.",
    category: "utilities",
    rating: 4.7,
    reviews: 540,
    popularity: 11900,
    pricing: "freemium",
    icon: "image-down",
  },
  {
    id: 21,
    name: "Regex101",
    description: "Test and debug regular expressions interactively.",
    category: "utilities",
    rating: 4.8,
    reviews: 310,
    popularity: 8900,
    pricing: "free",
    icon: "regex",
  },
  {
    id: 22,
    name: "UUID Generator",
    description: "Generate unique identifiers for your applications.",
    category: "utilities",
    rating: 4.4,
    reviews: 190,
    popularity: 5800,
    pricing: "free",
    icon: "fingerprint",
  },
  {
    id: 23,
    name: "Remove.bg",
    description: "Remove image backgrounds automatically in seconds.",
    category: "utilities",
    rating: 4.6,
    reviews: 470,
    popularity: 10500,
    pricing: "freemium",
    icon: "scissors",
  },
  {
    id: 24,
    name: "Speedtest",
    description: "Check your internet connection speed and performance.",
    category: "utilities",
    rating: 4.5,
    reviews: 430,
    popularity: 13800,
    pricing: "free",
    icon: "gauge",
  },
];

// ======================================================
// 3. STATE
// ======================================================

let searchTerm = "";

let activeCategory = "all";

let activeSort = "popular";

let favoriteTools = [];

let isShowingAll = false;

let currentTheme = "dark";

// ======================================================
// 4. SAVE / LOAD DATA
// ======================================================

function saveFavorites() {
  localStorage.setItem("toolVaultFavorites", JSON.stringify(favoriteTools));
}

function loadFavorites() {
  const storedFavorites = localStorage.getItem("toolVaultFavorites");

  if (!storedFavorites) return;

  favoriteTools = JSON.parse(storedFavorites);
}

// ======================================================
// 5. THEME
// ======================================================

function loadTheme() {
  const storedTheme = localStorage.getItem("toolVaultTheme");

  if (storedTheme) {
    currentTheme = storedTheme;
  }

  applyTheme();
}

function applyTheme() {
  document.body.classList.toggle("light-mode", currentTheme === "light");
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme();

  localStorage.setItem("toolVaultTheme", currentTheme);
}

// ======================================================
// 6. FILTER & SORT LOGIC
// ======================================================

function getFilteredTools() {
  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm);

    const matchesCategory =
      activeCategory === "all" || activeCategory === tool.category;

    return matchesSearch && matchesCategory;
  });

  return filteredTools;
}

function sortTools(filteredTools) {
  const sortedTools = [...filteredTools];

  if (activeSort === "popular") {
    sortedTools.sort((a, b) => b.popularity - a.popularity);
  }

  if (activeSort === "rating") {
    sortedTools.sort((a, b) => b.rating - a.rating);
  }

  if (activeSort === "name-asc") {
    sortedTools.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (activeSort === "name-desc") {
    sortedTools.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sortedTools;
}

// ======================================================
// 7. RENDER TOOLS
// ======================================================

function renderTools() {
  toolsGrid.innerHTML = "";

  const filteredTools = getFilteredTools();
  const sortedTools = sortTools(filteredTools);

  // EMPTY STATE
  if (sortedTools.length === 0) {
    toolsGrid.innerHTML = `
    <div class="empty-state">
      <h3>No tools found</h3>
      <p>Try another search or category.</p>
    </div> 
    `;

    resultsCount.textContent = "Showing 0 of 0 tools";
    showMoreBtn.classList.add("hidden");

    return;
  }

  // SHOW MORE / LESS
  const visibleTools = isShowingAll ? sortedTools : sortedTools.slice(0, 6);

  // RENDER CARDS
  toolsGrid.innerHTML = visibleTools
    .map((tool) => {
      return renderToolCard(tool);
    })
    .join("");

  // RESULTS COUNTER
  resultsCount.textContent = `Showing ${visibleTools.length} of ${sortedTools.length} tools`;

  // SHOW MORE / LESS BUTTON
  if (sortedTools.length <= 6) {
    showMoreBtn.classList.add("hidden");
  } else {
    showMoreBtn.classList.remove("hidden");
  }

  showMoreText.textContent = isShowingAll ? "Show Less" : "Show More";

  const showMoreIcon = showMoreBtn.querySelector("svg");

  if (showMoreIcon) {
    showMoreIcon.outerHTML = `
      <i data-lucide="${isShowingAll ? "chevron-up" : "chevron-down"}"></i>
    `;
  }

  // INITIALIZE ICONS
  lucide.createIcons();
}

function renderToolCard(tool) {
  const isFavorite = favoriteTools.includes(tool.id);

  return `
  <article class="tool-card">
  <div class="tool-card-header">
    <div class="tool-icon ${tool.category}">
      <i data-lucide="${tool.icon}"></i>
    </div>

    <button
      class="favorite-btn ${isFavorite ? "active" : ""}"
      type="button"
      data-id="${tool.id}"
      aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
      aria-pressed="${isFavorite}"
    >
      <i data-lucide="heart"></i>
    </button>
  </div>

  <div class="tool-card-content">
    <h3>${tool.name}</h3>
    <p>${tool.description}</p>
  </div>

  <div class="tool-card-tags">
    <span class="category-badge ${tool.category}">
    ${tool.category}
    </span>
 
    <span class="pricing-badge ${tool.pricing}">
    ${tool.pricing}
    </span>  
  </div>

  <div class="tool-card-footer">
    <div class="tool-rating">
      <i data-lucide="star"></i>
      <span>${tool.rating} (${tool.reviews})</span>
    </div>

    <div class="tool-popularity">
      <i data-lucide="users"></i>
      <span>${(tool.popularity / 1000).toFixed(1)}K users</span> 
    </div>
  </div>
</article>
  `;
}

// ======================================================
// 8. FAVORITES
// ======================================================

function toggleFavorite(toolId) {
  const isFavorite = favoriteTools.includes(toolId);

  if (isFavorite) {
    favoriteTools = favoriteTools.filter((id) => id !== toolId);
  } else {
    favoriteTools.push(toolId);
  }

  saveFavorites();
  updateStats();
  renderTools();
}

// ======================================================
// 9. UPDATE STATS
// ======================================================

function updateStats() {
  totalToolsValue.textContent = tools.length;

  favoritesValue.textContent = favoriteTools.length;

  const categories = new Set(tools.map((tool) => tool.category));

  categoriesValue.textContent = categories.size;

  const freeTools = tools.filter((tool) => tool.pricing === "free");

  freeToolsValue.textContent = freeTools.length;

  const freePercent = Math.round((freeTools.length / tools.length) * 100);

  freeToolsPercent.textContent = `${freePercent}%`;
}

// ======================================================
// 10. SHOW MORE / LESS
// ======================================================

function toggleShowMore() {
  isShowingAll = !isShowingAll;

  renderTools();
}

// ======================================================
// 11. EVENT LISTENERS
// ======================================================

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.toLowerCase().trim();

  isShowingAll = false;

  renderTools();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    isShowingAll = false;

    renderTools();
  });
});

sortSelect.addEventListener("change", () => {
  activeSort = sortSelect.value;

  renderTools();
});

toolsGrid.addEventListener("click", (event) => {
  const favoriteBtn = event.target.closest(".favorite-btn");

  if (!favoriteBtn) return;

  const toolId = Number(favoriteBtn.dataset.id);

  toggleFavorite(toolId);
});

showMoreBtn.addEventListener("click", toggleShowMore);

themeBtn.addEventListener("click", toggleTheme);

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();

    searchInput.focus();
    searchInput.select();
  }
});

// ======================================================
// 12. INITIALIZE APP
// ======================================================

function initApp() {
  loadTheme();
  loadFavorites();

  activeSort = sortSelect.value;

  updateStats();
  renderTools();

  lucide.createIcons();
}

initApp();
