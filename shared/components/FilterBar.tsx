"use client";

import { CheckIcon, EarthIcon, FilmIcon, MoonIcon, MoveIcon, SmileIcon, SunIcon } from "lucide-react";
import { useState } from "react";

const FilterBar = () => {
  const [filterBy, SetFilterBy] = useState("all");

  const filters = [
    { label: "All", value: "all", icon: CheckIcon },
    { label: "Characters", value: "characters", icon: SmileIcon },
    { label: "Locations", value: "locations", icon: EarthIcon },
    { label: "Episode", value: "episode", icon: FilmIcon },
  ];


  return (
    <div className="flex items-center lg:justify-start justify-center gap-3 select-none">
      <h3 className="text-base">Filter By: </h3>
      {
        filters.map((filter) => (
          <label className="relative flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="filterBy"
              value="light"
              checked={filterBy === filter.value}
              onChange={() => SetFilterBy(filter.value)}
              className="peer hidden"
            />

            <div
              className="
            flex items-center gap-2 px-1.5 py-1 rounded-full z-1
            transition-all animate-in fade-in duration-300
            peer-checked:text-white text-[#313234]
          "
            >
              {/* <SunIcon width={20} height={20} className="transition-all peer-checked:scale-110 animate-in fade-in duration-300" /> */}

              {
                filter.icon && (
                  <filter.icon width={20} height={20} className="transition-all peer-checked:scale-110 animate-in fade-in duration-300" />
                )
              }

              <span className="text-sm"> {filter.label}</span>
            </div>

            <div
              className={`
            absolute inset-0 rounded-full bg-[#00b5cc]
            transition-all duration-300
            ${filterBy === filter.value ? "opacity-100 scale-100 animate-in slide-in-from-right-1" : "opacity-0 scale-90"}
          `}
            ></div>
          </label>
        ))
      }
    </div>
  );
}


export default FilterBar;