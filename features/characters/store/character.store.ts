import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Character } from "../types/character.types";


interface CharacterState {
    characters: Character[];
    favorites: number[]; 
    isLoading: boolean;
    error: string | null;

    setCharacters: (list: Character[]) => void;
    toggleFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;

    setLoading: (val: boolean) => void;
    setError: (msg: string | null) => void;
}

export const useCharacterStore = create<CharacterState>()(
    persist(
        (set, get) => ({
            characters: [],
            favorites: [],
            isLoading: false,
            error: null,

            setCharacters: (list) => set({ characters: list }),
            setLoading: (val) => set({ isLoading: val }),
            setError: (msg) => set({ error: msg }),

            toggleFavorite: (id) => {
                const { favorites } = get();
                set({
                    favorites: favorites.includes(id)
                        ? favorites.filter(f => f !== id)
                        : [...favorites, id],
                });
            },

            isFavorite: (id) => get().favorites.includes(id),
        }),
        {
            name: "characters-storage",
        }
    )
);
