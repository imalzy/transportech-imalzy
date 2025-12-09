"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const generatePages = () => {
    const pages: (number | string)[] = [];
    const siblings = 1; 

    pages.push(1);

    if (currentPage - siblings > 2) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - siblings);
      i <= Math.min(totalPages - 1, currentPage + siblings);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage + siblings < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-6 flex-wrap">
  <button
    disabled={isFirst}
    onClick={() => onPageChange(currentPage - 1)}
    className={`
      px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border-2 font-semibold text-sm sm:text-base
      ${
        isFirst
          ? "border-[#BFDE42] text-[#BFDE42] cursor-not-allowed opacity-40"
          : "border-[#11B0C8] text-[#11B0C8] hover:bg-[#42B4CA] hover:text-white animate-hover"
      }
      transition-colors duration-300
    `}
  >
    Prev
  </button>

  <div className="flex gap-1 sm:gap-2 items-center overflow-x-auto no-scrollbar max-w-full px-1">
    {pages.map((page, idx) =>
      page === "..." ? (
        <span
          key={`ellipsis-${idx}`}
          className="px-2 text-[#313234] font-semibold text-sm sm:text-base"
        >
          ...
        </span>
      ) : (
        <button
          key={page}
          onClick={() => onPageChange(Number(page))}
          className={`
            px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border-2 text-xs sm:text-sm font-semibold
            ${
              currentPage === page
                ? "bg-[#11B0C8] border-[#11B0C8] text-white animate-in zoom-in-90"
                : "border-[#BFDE42] text-[#313234] hover:bg-[#42B4CA] hover:border-[#42B4CA] hover:text-white animate-hover"
            }
            transition-colors duration-300
          `}
        >
          {page}
        </button>
      )
    )}
  </div>

  <button
    disabled={isLast}
    onClick={() => onPageChange(currentPage + 1)}
    className={`
      px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border-2 font-semibold text-sm sm:text-base
      ${
        isLast
          ? "border-[#BFDE42] text-[#BFDE42] cursor-not-allowed opacity-40"
          : "border-[#11B0C8] text-[#11B0C8] hover:bg-[#42B4CA] hover:text-white animate-hover"
      }
      transition-colors duration-300
    `}
  >
    Next
  </button>
</div>

  );
};
