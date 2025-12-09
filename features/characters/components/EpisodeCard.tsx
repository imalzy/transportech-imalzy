import { PlayCircleIcon } from "lucide-react";


export default function EpisodeCard({id}: {id: number}) {
    return (
        <div className="    w-full bg-gray-100 rounded-lg shadow-md overflow-hidden
    transition-all duration-300 hover:shadow-xl hover:-translate-y-1
    animate-in fade-in zoom-in-50 p-4">
            <div className="flex items-center gap-2">
                <PlayCircleIcon className="w-5 h-5 text-[#313234]" />
                <span className="text-[#313234] text-[16px] font-normal">
                    Pilot | S01E{id}
                </span>
            </div>
        </div>
    );
}
