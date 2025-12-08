"use client";

import ThemeToggle from "@/shared/components/ThemeToggle";
import { useThemeStore } from "@/store/theme.store";
import Image from "next/image";

import { memo, useState } from "react";


const Hero = memo(() => {

    const { theme, setTheme } = useThemeStore();

    const [isDark, setIsDark] = useState(theme === "dark");
    return (
        <section className={`py-4 md:py-6 px-4 md:px-8 pb-0! ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:max-h-[400px]">
                <div className="flex-1 text-center lg:text-left lg:h-[400px] h-full  flex flex-col justify-between">
                    <div>
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold pt-10 mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Find out everything<br />in <span className="text-[#00b5cc]">one place..</span>
                        </h2>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Characters, locations, episodes, and much more.
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col lg:justify-start md:justify-center mt-4">
                        <ThemeToggle />
                        <p className="text-xs md:text-sm text-[#00b5cc] mt-4 mb-4">
                            Wubba Lubba Dub Dub! Watch your eyes.
                        </p>
                    </div>

                </div>
                <div className="flex-1 flex justify-center lg:justify-end w-full h-full">
                    <div className="relative w-full max-w-[480px] h-[300px] md:h-[380px] lg:h-[400px]">
                        <Image
                            src="/hero.png"
                            alt="Hero"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>

    )
})

export default Hero;