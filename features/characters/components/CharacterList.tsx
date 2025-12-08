import FilterBar from "@/shared/components/FilterBar";
import SearchBar from "@/shared/components/SearchBar";
import { useThemeStore } from "@/store/theme.store";
import { useState } from "react";
import CharacterCard from "./CharacterCard";
import { useCharacterStore } from "../store/character.store";
import { useCharacters } from "../hooks/useCharacters";

const CharacterList = () => {
    const { theme, setTheme } = useThemeStore();
    const { characters, isLoading } = useCharacters();

    const [isDark, setIsDark] = useState(theme === "dark");

    const handleChange = () => {

    }

    console.log(characters);
    return (
        <section className={`py-4 md:py-6 px-4 md:px-8 pb-0!`}>
            <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:max-h-[400px]">
                <div className="flex justify-between items-center">
                    <SearchBar />
                    <FilterBar />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        characters && characters.map((character) => (
                            <CharacterCard key={character.id}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                origin={character.origin?.name}
                                image={character.image}
                                defaultFavorite
                                onFavoriteChange={handleChange} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
};

export default CharacterList;