"use client";
import { FilmIcon, Heart } from "lucide-react";
import Image from "next/image";

import EpisodeCard from "@/features/characters/components/EpisodeCard";
import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { useCharacterStore } from "@/features/characters/store/character.store";

export default function CharacterDetailPage({ params }: { params: { id: string } }) {
    const { character } = useCharacters();

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shadow-md">
                    <Image
                        src={character?.image || "/empty.png"}
                        width={220}
                        height={220}
                        alt={character?.name || "character"}
                        className="object-cover"
                    />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">{character?.name}</h1>
                        {/* {isFavorite ? (
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
                        )} */}

                          <Heart
                                className="w-7 h-7 text-cyan-600"
                                strokeWidth={2}
                            />
                    </div>

                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                        <FilmIcon />
                        Participate in {character?.episode?.length || 0} episodes
                    </p>


                    <div className="mt-3 space-y-2 text-sm">
                        <ul className="flex gap-4 space-y-1 text-sm text-gray-800">
                            <li className="flex items-center gap-2">
                                {character?.status}
                            </li>
                            <li className="flex items-center gap-2">
                                👽 {character?.species}
                            </li>
                            <li className="flex items-center gap-2">
                                🚹 {character?.gender}
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="mt-6 space-y-3">
                        <button className="flex items-center gap-2 w-fit hover:bg-gray-100 transition">
                            🪐 Planet — {character?.origin?.name}
                        </button>
                        <button className="flex items-center gap-2 w-fit hover:bg-gray-100 transition">
                            📍 Cidade — {character?.location?.name}
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 my-10" />

            <div className="mt-6">
                <h2 className="font-semibold flex items-center gap-2 text-gray-700">
                    ⭐ Episodes
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
                    {character?.episode?.map((_, i) => (
                        <EpisodeCard key={i} id={i} />
                    ))}
                </div>
            </div>

        </div>
    );
}
