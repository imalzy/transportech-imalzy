import { SearchIcon } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Character, episode, location......",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const [pulse, setPulse] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPulse(true);

    // remove pulse after animation
    setTimeout(() => setPulse(false), 300);

    if (onSearch) onSearch(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-[405px] h-12 border border-[#313234] rounded-full 
        flex items-center px-4 gap-3 bg-white
        animate-in fade-in zoom-in-50 duration-300
      "
    >
      <input
        type="text"
        className="
          flex-1 outline-none text-[#313234] text-base
          transition-transform duration-200
          focus:scale-[1.02]
        "
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />

      <button type="submit">
        <SearchIcon size={20} />
      </button>
    </form>
  );
}
