import React from "react";

const Layout2 = ({ library }) => {
  return (
    <div className="bg-zinc-900 text-white w-96 h-full flex flex-col gap-3 p-3 ml-3 mb-3 rounded-xl">
      <div className="flex gap-2 text-white">
        <img
          src="/img/library.svg"
          alt="library"
          className="w-6 h-6 bg-white"
        />
        <span>Your library</span>
      </div>
      {library.map((item) => (
        <div className="flex gap-3">
          <img className="w-12 h-12 rounded-lg object-cover" src={item.img} />
          <div className="flex flex-col">
            <span>{item.title}</span>
            <span>{item.singer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Layout2;
