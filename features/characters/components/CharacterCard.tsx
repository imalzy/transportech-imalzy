import Image from "next/image";

import {
    Heart,
    Activity,
    User,
    Globe,
    InfoIcon,
} from "lucide-react";
import { useState } from "react";

interface CharacterCardProps {
    name?: string;
    status?: string;
    species?: string;
    origin?: string;
    image?: string;
    defaultFavorite?: boolean;
    onFavoriteChange?: (fav: boolean) => void;
}

const CharacterCard = ({
    name = "Rick Sanchez",
    status = "Vivo",
    species = "Humano",
    origin = "Earth (C-137)",
    image = "/c1.jpg",
    defaultFavorite = false,
    onFavoriteChange,
}: CharacterCardProps) => {

    const [favorite, setFavorite] = useState(defaultFavorite);

    const toggleFavorite = () => {
        const newState = !favorite;
        setFavorite(newState);
        onFavoriteChange?.(newState);
    };

    return (
        <div
            className="
        w-[294px] bg-gray-100 rounded-lg shadow-md overflow-hidden
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        animate-in fade-in zoom-in-50 p-4
      "
        >
            <div className="w-full h-[200px] relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="
              object-cover rounded-xl
              animate-in fade-in slide-in-from-bottom-4
            "
                    sizes="(max-width: 768px) 100vw, 294px"
                    priority
                />
            </div>

            <div className="mt-2">
                <h2 className="text-lg font-bold text-gray-800 animate-in fade-in slide-in-from-bottom-2">
                    {name}
                </h2>
                <button
                    onClick={toggleFavorite}
                    className="transition active:scale-90 cursor-pointer"
                >
                    {favorite ? (
                        <Heart
                            className="w-7 h-7 text-cyan-600 animate-in zoom-in-50"
                            fill="#11B0C8"
                            stroke="#11B0C8"
                        />
                    ) : (
                        <Heart
                            className="w-7 h-7 text-cyan-600"
                            strokeWidth={2}
                        />
                    )}
                </button>
            </div>


            <div className="mt-3 space-y-2 text-sm">
                <ul className="space-y-1 text-sm text-gray-800">
                    <li className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-lime-500" strokeWidth={2} />
                        {status}
                    </li>
                    <li className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-700" strokeWidth={2} />
                        {species}
                    </li>
                    <li className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-700" strokeWidth={2} />
                        {origin}
                    </li>
                </ul>
            </div>

            <div className="flex items-center justify-end">
                <button
                    className="flex gap-1 items-center
            p-1.5 bg-cyan-600 text-white rounded-full 
            text-sm hover:bg-cyan-700 transition active:scale-95
            animate-in fade-in slide-in-from-bottom-2 cursor-pointer
          "
                >
                    <InfoIcon size={20} color="#fff" />

                    Learn More
                </button>
            </div>
        </div>
    );
}

export default CharacterCard
