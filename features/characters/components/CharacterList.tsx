import FilterBar from "@/shared/components/FilterBar";
import SearchBar from "@/shared/components/SearchBar";
import { useThemeStore } from "@/store/theme.store";
import { useState } from "react";
import CharacterCard from "./CharacterCard";
import { useCharacterStore } from "../store/character.store";
import { useCharacters } from "../hooks/useCharacters";
import { Pagination } from "@/shared/components/Pagination";

const CharacterList = () => {
    const { theme, setTheme } = useThemeStore();
    const { characters, currentPage, meta, setPage, isLoading, error } = useCharacters();
    
    const [isDark, setIsDark] = useState(theme === "dark");

    const handleChange = () => {

    }

    return (
        <section className={`py-4 md:py-6 px-4 md:px-8 pb-0!`}>


            <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:max-h-[400px]">
                <div className="flex justify-between items-center flex-wrap">
                    <SearchBar />
                    <FilterBar />
                </div>

                {isLoading && <p className="text-center py-10">Loading...</p>}

                {error && <p className="text-center text-red-500">{error}</p>}
                {!isLoading && characters?.length > 0 && (
                    <div className="p-6 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                        {meta && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={meta.pages}
                                onPageChange={setPage}
                            />
                        )}
                    </div>
                )}
            </div>
        </section>
    )
};

export default CharacterList;