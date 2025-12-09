# 🚀 Transportech-Imalzy

A modern web application built with Next.js, TypeScript, and Zustand for state management. This project is a character explorer, likely integrating with an external API (like The Rick and Morty API, based on the structure) to display character and episode information.

### ⏱️ Task Time Breakdown

| Task Category | Estimated Time Spent |
| :--- | :--- |
| **Project Setup & Configuration** | [10 min] |
| *(Includes Next.js initialization, TypeScript, ESLint, Tailwind CSS setup, and basic file structure.)* | |
| **UI Component Development** | [2 hours] |
| *(Includes building `CharacterCard`, `Hero`, `Header`, `ThemeToggle`, etc.)* | |
| **State Management Implementation** | [30 min] |
| *(Includes setting up `character.store.ts` using Zustand.)* | |
| **API Integration & Services** | [30 min] |
| *(Includes creating API routes in `app/api` and service functions in `character.api.ts`.)* | |
| **Testing & Debugging** | [2 hours] |
| *(Time spent troubleshooting issues and verifying functionality.)* | |
| **Total Time** | **[5 hours 10 min]** |

---

## 🌟 Features

* **Next.js App Router:** Utilizes the latest routing conventions for a robust structure.
* **TypeScript:** Ensures type safety across the entire codebase.
* **Zustand:** A fast and scalable state management solution (used for `theme.store` and `character.store`).
* **API Routes:** Custom backend endpoints for character data fetching and serving.
* **Theming:** Includes a theme-toggle feature, likely using Tailwind CSS.
* **Modular Structure:** Logic is organized into `app`, `features`, `layouts`, and `shared` directories.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (v16.0.7)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **State Management:** [Zustand](https://zustand-bear.github.io/zustand/) (v5.0.9)
* **HTTP Client:** [Axios](https://axios-http.com/)

## ⚙️ Setup Instructions

Follow these steps to get the project running on your local machine.

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/en) installed (preferably the latest LTS version).

### 2. Clone the Repository

git clone <repository-url>
cd transportech-imalzy

### 3. Install Dependencies

npm install 
# or
yarn install 
# or
pnpm install

### 4. Environment Variables

# .env file
# Replace this with the actual API URL used in the project
NEXT_PUBLIC_API_URL=https://rickandmortyapi.com/api
