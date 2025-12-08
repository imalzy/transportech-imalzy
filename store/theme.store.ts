import { create } from "zustand"

type Theme = "light" | "dark";

interface ThemeState {
    theme: Theme;
    setTheme: (value: "light" | "dark" | "system") => void;
    initTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: "light",


    setTheme: (value) => {
        let next: Theme;

        if (value === "system") {
            next = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        } else {
            next = value;
        }

        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");

        set({ theme: next });
    },

    initTheme: () => {
        const saved = localStorage.getItem("theme") as Theme | null;

        let next: Theme;

        if (saved) {
            next = saved;
        } else {
            next = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }

        document.documentElement.classList.toggle("dark", next === "dark");
        set({ theme: next });
    },
}))