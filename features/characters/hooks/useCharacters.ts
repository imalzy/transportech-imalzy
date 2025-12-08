import { useEffect } from "react";
import { useCharacterStore } from "../store/character.store";
import { getCharacters } from "../api/character.api";

export const useCharacters = () => {
  const { setCharacters, setLoading, setError, characters } = useCharacterStore();

  useEffect(() => {
    if (characters.length > 0) return; // avoid refetch if already loaded

    const load = async () => {
      try {
        setLoading(true);
        const data = await getCharacters();
        setCharacters(data.data || []);
      } catch {
        setError("Failed to load characters");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return useCharacterStore();
};
