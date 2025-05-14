## 🚀 whatsapp-chat-viewer-app

**A modern, immersive, and professional web application to view and explore WhatsApp chat messages.** 🎉

---

## 📋 Table of Contents

1. [Overview](#overview) 👀
2. [Features](#features) ✨
3. [Tech Stack](#tech-stack) 🛠️
4. [Screenshots & GIFs](#screenshots--gifs) 🎞️
5. [Getting Started](#getting-started) 🏁

   * [Prerequisites](#prerequisites) 📥
   * [Installation](#installation) ⚙️
   * [Running the App](#running-the-app) ▶️
6. [Usage](#usage) 💬
7. [Project Structure](#project-structure) 📂
8. [Contributing](#contributing) 🤝
9. [License](#license) 📝
10. [Contact](#contact) 📬

---

## Overview

The **whatsapp-chat-viewer-app** offers a **seamless**, **fast**, and **user-friendly** interface to explore your exported WhatsApp chats. Enjoy interactive animations, custom 🎨 themes, and embedded GIFs to make browsing conversations fun and engaging!

<figure>
  <img src="./docs/animations/intro-animation.gif" alt="Intro animation" />
  <figcaption>✨ Welcome animation on app load</figcaption>
</figure>

## Features

| Feature              | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| 🗂️ Import & Display | Upload WhatsApp `.txt` chat exports and view messages in a beautifully structured layout.     |
| 🔍 Search & Filter   | Instantly find keywords, dates, or participants with dynamic search animations.               |
| 📅 Date Grouping     | Messages auto-group by date, with subtle fade-in effects for better readability.              |
| 🚀 Performance       | Powered by Vite for near-instant builds, hot reload, and optimized performance.               |
| 🌙 Theme Support     | Toggle between light and dark mode with smooth CSS transitions for a personalized experience. |
| 📱 Responsive Design | Fully responsive UI that adapts seamlessly to desktop, tablet, and mobile screen sizes.       |

## Tech Stack

| Layer            | Technology         |
| ---------------- | ------------------ |
| Frontend Library | React              |
| Language         | TypeScript         |
| Build Tool       | Vite               |
| Styling          | CSS Modules / SCSS |
| Linting          | ESLint, Prettier   |

## Screenshots & GIFs

<details>
<summary>Click to expand media</summary>

### Import Screen

![Import Screen](./docs/screenshots/import.png)

### Chat View Animation

<figure>
  <img src="./docs/animations/chat-scroll.gif" alt="Chat scroll animation" />
  <figcaption>💬 Smooth scrolling through messages</figcaption>
</figure>

</details>

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v16 or higher 🌐
* npm (v8+) or yarn (v1.22+) 📦

### Installation

```bash
# Clone the repository
git clone https://github.com/Ayushj62/WhatsApp-chat-viewer-app.git
cd whatsapp-chat-viewer-app

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
# Start development server
npm run dev
# or
yarn dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. Export your WhatsApp chat:

   * Open the chat in WhatsApp
   * Tap **More options** ➡️ **More** ➡️ **Export chat** ➡️ **Without Media**
2. Upload the exported `.txt` file via the import screen.
3. Enjoy exploring your chats with animations and GIF overlays! 🎉

## Project Structure

```
whatsapp-chat-viewer-app/
├── public/                 # Static public assets
├── src/                    # Source code
│   ├── assets/             # Images, icons, animations
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-level components
│   ├── styles/             # CSS/SCSS modules
│   ├── utils/              # Helper functions
│   └── main.tsx            # App entry point
├── docs/                   # Documentation, screenshots & GIFs
└── vite.config.ts          # Vite configuration
```

## Contributing

Contributions welcome! 🛠️ Follow these steps:

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Commit: `git commit -m 'Add my feature'`
5. Push: `git push origin feature/my-feature`
6. Open a Pull Request

**Ensure code quality:**

```bash
npm run lint
# or
yarn lint
```


## Contact

Created by Ayush Warsh (https://github.com/Ayushj62). Feel free to reach out with questions or suggestions! 📧
