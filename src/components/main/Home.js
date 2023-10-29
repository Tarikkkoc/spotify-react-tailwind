import React, { useState } from "react";

const Home = ({ library }) => {
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

  const bgColorStyle =
    hoveredItem !== null
      ? {
          backgroundImage: `linear-gradient(${colors[hoveredItem]}, #71717a4d)`,
        }
      : { backgroundImage: "linear-gradient(#134e4a, #71717a4d)" };

  return (
    <div
      style={bgColorStyle}
      className="flex flex-col h-full text-white rounded-xl"
    >
      <div className="flex flex-col gap-3">
        <div className="w-full h-10 flex justify-between px-3 pt-2 rounded-t-xl">
          <img src="/img/back.svg" className="w-6 h-6 bg-white" />
          <img src="/img/github.svg" className="w-6 h-6 bg-white" />
        </div>
        <span className="px-3">Good afternoon &#129170;</span>
        <div className="grid grid-cols-3 gap-5 px-3">
          {library.map((item, index) => (
            <div
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              className="flex justify-between bg-transparentGray transition duration-300 group hover:bg-softGray"
            >
              <div className="h-20 w-20">
                <img
                  className="h-full w-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="font-bold block mt-4">{item.title}</div>
              <div
                id="play"
                className="text-5xl text-black rounded-full bg-play w-10 h-10 mr-4 my-4 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <img src="/img/play.svg" className="h-10 pl-1 py-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
