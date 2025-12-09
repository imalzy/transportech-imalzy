# 🚀 Transportech-Imalzy

A modern web application built with Next.js, TypeScript, and Zustand for state management. This project is a character explorer, likely integrating with an external API (like The Rick and Morty API, based on the structure) to display character and episode information.

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

# Available Scripts
In the project directory, you can run:

Script,Description
npm run dev,Starts the application in development mode with hot-reloading.
npm run build,Creates an optimized production build of the application.
npm run start,Starts the Next.js production server. Must be run after npm run build.
npm run lint,Runs the linter (ESLint) to catch errors and enforce code style.

# Folder Structure
Directory/File,Description
app/,"Next.js App Router root, containing pages, layouts, and API routes."
app/(routes)/,Contains the main pages (page.tsx) and dynamic routes ([id]/page.tsx).
app/api/,"Custom API routes for handling server-side logic (e.g., /characters)."
features/,"Contains feature-specific logic, components, state, and types (e.g., characters)."
layouts/,Common layout components like Header.
lib/,Utility functions and configurations.
public/,Static assets like images and SVGs.
shared/,"Reusable components (FilterBar, Pagination), hooks, and utils used across multiple features."
store/,"Global state management with Zustand (e.g., theme.store.ts)."
package.json,Lists project dependencies and scripts.
tsconfig.json,TypeScript configuration.