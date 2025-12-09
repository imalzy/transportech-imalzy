// src/features/characters/hooks/useCharacters.ts
import { useEffect } from "react";
import { getCharacters } from "../api/character.api";
import { useCharacterStore } from "../store/character.store";

export const useCharacters = () => {
  const { currentPage, setCharacters, setLoading, setError } =
    useCharacterStore();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getCharacters(currentPage);

        setCharacters(res.data || [], res.meta);
        setError(null);
      } catch (err) {
        setError("Failed to load characters");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [currentPage]);

  return useCharacterStore();
};
