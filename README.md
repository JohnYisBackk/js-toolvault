# 🚀 ToolVault PRO

A modern and responsive developer tools directory built with HTML, CSS, and Vanilla JavaScript.

Discover useful tools, search by keywords, filter by categories, sort results, and organize your favorites in a clean dashboard interface.

## 📸 Preview

![ToolVault PRO Preview](/preview.png)

## 🌐 Live Demo

[View Live Demo](https://johnyisbackk.github.io/js-toolvault/)

## ✨ Features

- 🔎 Real-time search functionality
- 🗂️ Category-based filtering
- ↕️ Sorting by popularity, rating, and name
- ❤️ Add and remove favorite tools
- 💾 Favorites saved using LocalStorage
- 🌙 Dark and light theme support
- 📊 Dynamic dashboard statistics
- 📦 Show More / Show Less functionality
- 🔢 Dynamic results counter
- ⌨️ Ctrl + K / Cmd + K search shortcut
- 📱 Fully responsive layout
- 🎨 Modern dashboard UI with Lucide icons
- 🚫 Empty state for no search results

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage API
- Lucide Icons
- Google Fonts (Inter & JetBrains Mono)

## 🧠 JavaScript Concepts

This project focuses on practical JavaScript fundamentals:

- DOM manipulation
- Event listeners and event delegation
- Array methods: `map()`, `filter()`, `sort()`
- Spread operator
- Conditional rendering
- Template literals
- State management
- LocalStorage with JSON
- Dynamic HTML rendering
- Reusable functions

## 📂 Project Structure

```text
toolvault-pro/
├── index.html
├── style.css
├── script.js
├── README.md
├── license
└── preview.png
```

## ⚙️ How It Works

The application uses a predefined array of developer tools.

User interactions update the application state, which determines the displayed results.

The main rendering flow:

```text
DATA
  ↓
STATE
  ↓
FILTER
  ↓
SORT
  ↓
SHOW MORE / LESS
  ↓
RENDER
```

Each tool card is dynamically generated using JavaScript.

Favorites and theme preferences are stored locally in the browser.

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/JohnyIsBackk/toolvault-pro.git
```

2. Open the project folder.

3. Open `index.html` in your browser or use VS Code Live Server.

No installation or build process is required.

## 📱 Responsive Design

ToolVault PRO supports desktop, tablet, and mobile layouts using CSS Grid, Flexbox, and media queries.

## 📌 Project Purpose

This project was created to strengthen my Vanilla JavaScript skills, especially working with data, state management, filtering, sorting, dynamic rendering, and DOM events.

It is part of my frontend development portfolio.

## 👨‍💻 Author

**Samuel Jahn**

- Portfolio: https://samueljahn.sk
- GitHub: https://github.com/JohnyIsBackk

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
