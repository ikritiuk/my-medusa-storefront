"use client";

import React from "react";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 inset-x-0 flex justify-center z-50">
      <button
        onClick={() => window.open("https://t.me/+X-jZyQk1Md9kOGVk", "_blank")}
        className="px-4 py-3 md:px-6 md:py-4 bg-[#0088cc] text-white text-center rounded-lg shadow-lg hover:bg-[#0077b5] transition-transform transform hover:scale-105 md:text-lg"
        aria-label="Order on Telegram"
      >
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.564 8.16l-1.758 8.31c-.132.589-.476.732-.963.456l-2.665-1.964-1.287 1.238c-.142.143-.262.262-.535.262l.191-2.69 4.896-4.415c.213-.19-.046-.295-.331-.105l-6.06 3.82-2.615-.818c-.569-.18-.581-.569.118-.84l10.278-3.968c.478-.174.896.118.745.838z" />
          </svg>
          Перейти в Telegram
        </div>
      </button>
    </div>
  );
};

export default FloatingButton;
