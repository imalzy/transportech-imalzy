"use client";

import { CheckIcon, HeartPulseIcon, HelpCircleIcon, SkullIcon } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
  onFilter?: (query: string) => void;
}


const FilterBar = ({ onFilter }: FilterBarProps) => {
  const [filterBy, SetFilterBy] = useState("all");

  const filters = [
    { label: "All", value: "all", icon: CheckIcon },
    { label: "Alive", value: "alive", icon: HeartPulseIcon },
    { label: "Dead", value: "dead", icon: SkullIcon },
    { label: "Unknown", value: "unknown", icon: HelpCircleIcon },
  ];

  const handleFilter = (value: string) => {
    if (value) {
      SetFilterBy(value);
      if (onFilter) onFilter(value);
    }
  }


  return (
    <div className="flex items-center flex-wrap lg:justify-start justify-center gap-3 select-none mt-4 md:mt-1 w-full md:w-auto">
      <h3 className="text-base">Filter By: </h3>
      <div className="flex items-center flex-wrap">
        {
          filters.map((filter) => (
            <label key={filter.value} className="relative flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="filterBy"
                value="light"
                checked={filterBy === filter.value}
                onChange={() => handleFilter(filter.value)}
                className="peer hidden"
              />

              <div
                className="
            flex items-center gap-2 px-1.5 py-1 rounded-full z-1
            transition-all animate-in fade-in duration-300
            peer-checked:text-white text-[#313234]
          "
              >
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
    </div>
  );
}


export default FilterBar;