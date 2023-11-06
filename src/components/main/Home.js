import React, { useState } from "react";

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
        }
      : { backgroundImage: "linear-gradient(#134e4a, #71717a4d)" };

  return (
    <div
      style={bgColorStyle}
      className="flex flex-col text-white rounded-xl w-full"
    >
      <div className="flex flex-col gap-3">
        <div className="w-full h-10 flex justify-between px-3 pt-2 rounded-t-xl">
          <img src="/img/back.svg" className="w-6 h-6 bg-white" />
          <img src="/img/github.svg" className="w-6 h-6 bg-white" />
        </div>
        <span className="px-3 text-xl font-semibold">{getTime()}</span>
        <div className="grid grid-cols-3 gap-5 px-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {library.map((item, index) => (
            <div
              onClick={() => onMouseClick(item.img, item.title, item.singer)}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              className="flex justify-between bg-transparentGray transition duration-300 group hover:bg-softGray rounded-lg"
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
                className="text-5xl text-black rounded-full hover:scale-110 bg-play w-10 h-10 mr-4 my-4 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <img src="/img/play.svg" className="h-10 pl-1 py-1" />
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
              <div className="w-full flex flex-col items-end">
                <img
                  className="object-cover w-44 h-44 rounded-lg mobile:w-full mobile:object-cover"
                  src={item.img}
                  alt=""
                />
                <div
                  id="play"
                  className="rounded-full bg-play w-10 h-10 opacity-0 group-hover:opacity-100 hover:scale-110 transition duration-300 relative bottom-12 right-2"
                >
                  <img src="/img/play.svg" className="h-10 pl-1 py-1" />
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
