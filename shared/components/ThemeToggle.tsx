"use client";

import { MoonIcon, SunIcon } from "lucide-react";

import { useThemeStore } from "@/store/theme.store";

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex items-center lg:justify-start justify-center gap-4 select-none">
      <label className="relative flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
          className="peer hidden"
        />


        <div className="flex items-center gap-2 px-[6px] py-1 rounded-full
            transition-all animate-in fade-in duration-300 z-1
            peer-checked:text-white text-[#313234]">

          <MoonIcon width={20} height={20} className="transition-all peer-checked:scale-110 animate-in fade-in duration-300" />

          <span className="text-sm">
            Dark
          </span>
        </div>

        <div
          className={`
            absolute inset-0  rounded-full bg-[#00b5cc]
            transition-all duration-300
            ${theme === "dark" ? "opacity-100 scale-100 animate-in slide-in-from-left-1" : "opacity-0 scale-90"}
          `}
        ></div>
      </label>

      <label className="relative flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
          className="peer hidden"
        />

        <div
          className="
            flex items-center gap-2 px-1.5 py-1 rounded-full z-1
            transition-all animate-in fade-in duration-300
            peer-checked:text-white text-[#313234]
          "
        >
          <SunIcon width={20} height={20} className="transition-all peer-checked:scale-110 animate-in fade-in duration-300" />

          <span className="text-sm">Light</span>
        </div>

        <div
          className={`
            absolute inset-0 rounded-full bg-[#00b5cc]
            transition-all duration-300
            ${theme === "light" ? "opacity-100 scale-100 animate-in slide-in-from-right-1" : "opacity-0 scale-90"}
          `}
        ></div>
      </label>

    </div>
  );
}
