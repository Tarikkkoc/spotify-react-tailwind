import React from "react";

const Layout1 = () => {
  return (
    <div className="bg-zinc-900 text-white w-96 flex flex-col gap-3 p-3 ml-3 rounded-xl">
      <div className="flex gap-3">
        <img src="/img/home.svg" alt="home" className="w-6 h-6 bg-white" />
        Home
      </div>
      <div className="flex gap-3">
        <img src="/img/search.svg" alt="search" className="w-6 h-6 bg-white" />
        Search
      </div>
    </div>
  );
};

export default Layout1;
