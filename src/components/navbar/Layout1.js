import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Layout1 = () => {
  const [searchState, setSearchState] = useState(true);
  const onClickSearchBtn = () => {
    setSearchState(false);
  };
  return (
    <div className="bg-zinc-900 w-96 flex flex-col justify-around gap-5 px-5 py-3 mx-2 rounded-xl h-[20%]">
      <div className="flex gap-3 hover:text-white text-zinc-400 cursor-pointer transition duration-300">
        <Link to="/" className="flex gap-3">
          <svg viewBox="0 0 32 32" class="h-6 w-6">
            <path
              fill="currentColor"
              d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15 31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79 10 7.8V26z"
            ></path>
          </svg>
          Home
        </Link>
      </div>
      <div
        onClick={() => onClickSearchBtn()}
        className="flex gap-3 hover:text-white text-zinc-400 cursor-pointer transition duration-300"
      >
        <svg viewBox="0 0 32 32" class="h-6 w-6" astro-icon="carbon:search">
          <path
            fill="currentColor"
            d="m29 27.586-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9z"
          ></path>
        </svg>
        Search
      </div>
      {setSearchState && (
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      )}
    </div>
  );
};

export default Layout1;
