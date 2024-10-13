import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ library, onMouseClick }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  console.log("item", hoveredItem);

  const onMouseEnter = (index) => {
    console.log("before", hoveredItem);
    console.log("index", index);
    setHoveredItem(index);
    console.log("after", hoveredItem);
  };

  const onMouseLeave = (index) => {
    setHoveredItem(null);
    console.log(index);
  };
  const colors = [
    "#134e4a",
    "#105f57",
    "#0f4d42",
    "#0e3c39",
    "#106e6b",
    "#0e5860",
  ];

  const getTime = () => {
    const currentHour = new Date().getHours();

    switch (true) {
      case currentHour >= 6 && currentHour < 12:
        return "Good Morning";
      case currentHour >= 12 && currentHour < 17:
        return "Good Afternoon";
      case currentHour >= 17 && currentHour < 21:
        return "Good Evening";
      default:
        return "Good Night";
    }
  };

  const bgColorStyle =
    hoveredItem !== null
      ? {
          backgroundImage: `linear-gradient(${colors[hoveredItem]}, #71717a4d)`,
          transition: `background-image 0.9s ease-in-out`,
        }
      : { backgroundImage: "linear-gradient(#134e4a, #71717a4d)" };

  return (
    <div
      style={bgColorStyle}
      className="flex flex-col text-white rounded-xl w-full min-h-screen"
    >
      <div className="flex flex-col gap-3">
        <div className="w-full h-10 flex justify-between px-3 pt-2 rounded-t-xl">
          <Link className="bg-zinc-900 rounded-full h-8 w-8 flex justify-center items-center hover:scale-110 transition duration-300">
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 -ml-0.5"
              astro-icon="bi:chevron-left"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </Link>
          <Link
            className="h-8 w-8 flex justify-center items-center hover:scale-110 transition duration-300"
            to="https://github.com/Tarikkkoc"
            target="_blank"
          >
            <svg viewBox="0 0 24 24" class="h-7 w-7" astro-icon="mdi:github">
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
              ></path>
            </svg>
          </Link>
        </div>
        <span className="px-3 text-xl font-semibold">{getTime()}</span>
        <div className="grid grid-cols-3 gap-5 px-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {library.map((item, index) => (
            <div
              onClick={() => onMouseClick(item.img, item.title, item.singer)}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              className="flex justify-between bg-transparentGray transition duration-300 group hover:bg-softGray rounded-lg cursor-pointer"
            >
              <div className="h-20 w-20 flex">
                <img
                  className="h-full shrink w-full shrink-1 object-cover rounded-lg"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="font-bold mt-4">{item.title}</div>
              <div
                id="play"
                className="flex justify-center items-center text-sm text-black rounded-full shadow-lg shadow-zinc-800 hover:scale-110 bg-play w-12 h-12 mr-4 my-4 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <svg viewBox="0 0 24 24" class="h-8 w-8" astro-icon="mdi:play">
                  <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <span className="text-xl font-semibold px-3">Made for you</span>
        <div className="grid grid-cols-5 px-3 gap-6 place-items-center tablet:grid-cols-3 mobile:grid-cols-1 ">
          {library.map((item, index) => (
            <div
              onClick={() => onMouseClick(item.img, item.title, item.singer)}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              className="flex flex-col group bg-white w-48 p-3 text-black rounded-lg hover:bg-zinc-500/50 duration-500 bg-zinc-500/5 mobile:w-full"
            >
              <div className="w-full flex flex-col items-end relative">
                <img
                  className="object-cover w-44 h-44 rounded-lg mobile:w-full mobile:object-cover"
                  src={item.img}
                  alt=""
                />
                <div
                  id="play"
                  className="absolute bottom-0 right-2 flex justify-center items-center text-sm text-black rounded-full shadow-lg shadow-zinc-800 hover:scale-110 bg-play w-12 h-12 ml-4 mb-4 opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    astro-icon="mdi:play"
                  >
                    <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                  </svg>
                </div>
              </div>
              <div className="font-bold text-base text-white">{item.title}</div>
              <div className="text-xs text-gray-300">{item.singer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
