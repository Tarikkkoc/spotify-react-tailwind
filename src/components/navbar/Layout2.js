import React from "react";

const Layout2 = ({ library, onMouseClick }) => {
  return (
    <div className="bg-zinc-900 text-white w-96 min-h-screen flex flex-col gap-2 px-4 py-3 ml-2 rounded-xl">
      <div className="flex gap-2 px-2 hover:text-white text-zinc-400 cursor-pointer transition duration-300">
        <svg
          viewBox="0 0 32 32"
          class="h-6 w-6"
          astro-icon="carbon:media-library"
        >
          <path fill="currentColor" d="M13 15v8l7-4-7-4z"></path>
          <path
            fill="currentColor"
            d="M26 28H6a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.002 2.002 0 0 1-2 2zM6 12v14h20V12zM6 6h20v2H6zM8 2h16v2H8z"
          ></path>
        </svg>
        <span>Your library</span>
      </div>
      {library.map((item) => (
        <div
          className="flex gap-3 hover:bg-zinc-800 hover:rounded-lg p-2 shadow-lg cursor-pointer"
          onClick={() => onMouseClick(item.img, item.title, item.singer)}
        >
          <img className="w-12 h-12 rounded-lg object-cover" src={item.img} />
          <div className="flex flex-col">
            <span>{item.title}</span>
            <span className="text-zinc-400 text-sm">{item.singer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Layout2;
