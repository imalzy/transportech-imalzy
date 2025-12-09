import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Character } from "../types/character.types";

interface CharacterState {
  characters: Character[];
  favorites: number[];
  meta: { pages: number; count: number } | null;

  currentPage: number;
  isLoading: boolean;
  error: string | null;

  searchName: string;
  statusFilter: string;

  setPage: (page: number) => void;
  setCharacters: (list: Character[], meta: any) => void;

  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;

  setLoading: (val: boolean) => void;
  setError: (msg: string | null) => void;

  setSearch: (q: string) => void;
  setStatusFilter: (status: string) => void;
}

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set, get) => ({
      characters: [],
      favorites: [],
      meta: null,

      currentPage: 1,
      isLoading: false,
      error: null,

      searchName: "",
      statusFilter: "",

      setPage: (page) => set({ currentPage: page }),

      setCharacters: (list, meta) => set({ characters: list, meta }),

      setLoading: (val) => set({ isLoading: val }),
      setError: (msg) => set({ error: msg }),

      toggleFavorite: (id) => {
        const { favorites } = get();
        set({
          favorites: favorites.includes(id)
            ? favorites.filter((f) => f !== id)
            : [...favorites, id],
        });
      },

      isFavorite: (id) => get().favorites.includes(id),

      setSearch: (q) => set({ searchName: q }),
      setStatusFilter: (status) => set({ statusFilter: status }),
    }),
    { name: "characters-storage" }
  )
);
