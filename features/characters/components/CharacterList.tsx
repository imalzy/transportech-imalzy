import FilterBar from "@/shared/components/FilterBar";
import SearchBar from "@/shared/components/SearchBar";
import { useThemeStore } from "@/store/theme.store";
import { useState } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const { theme, setTheme } = useThemeStore();

    const [isDark, setIsDark] = useState(theme === "dark");

    const handleChange = () => {
        
    }

    return (
        <section className={`py-4 md:py-6 px-4 md:px-8 pb-0! `}>
            <div className="flex justify-between items-center">
                <SearchBar />
                <FilterBar />
            </div>
            <div>
                <CharacterCard onFavoriteChange={handleChange}/>
            </div>
        </section>
    )
};

export default CharacterList;