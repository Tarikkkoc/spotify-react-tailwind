import React from "react";

const Playlist = ({ playlist, library }) => {
  return !playlist ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="w-full bg-gray-900">
        <div className="w-full h-10 flex justify-between px-3 pt-2 rounded-t-xl">
          <img src="/img/back.svg" className="w-6 h-6 bg-white" />
          <img src="/img/github.svg" className="w-6 h-6 bg-white" />
        </div>
        <div className="p-3 flex items-center">
          <img
            className="w-60 h-60 object-cover shadow-xl"
            src={playlist.img}
            alt=""
          />
          <div className="text-white flex flex-col gap-5 px-5">
            <span className="text-xl">Playlist</span>
            <h2 className="text-6xl font-semibold">{playlist.title}</h2>
            <div>{playlist.singer}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 py-10 px-3 h-14 items-center bg-gray-600">
        <div
          id="play"
          className="rounded-full hover:scale-110 bg-play w-14 h-14 transition duration-300"
        >
          <img src="/img/play.svg" className="h-14 pl-1 py-1" />
        </div>
        <img
          src="/img/heart.svg"
          className="h-10 w-10 hover:scale-110 transition duration-300 cursor-pointer"
          alt=""
        />
        <img
          src="/img/ellipsis.svg"
          className="w-10 hover:scale-110 transition duration-300 cursor-pointer opacity-70 hover:opacity-100"
          alt=""
        />
      </div>
      <div className="bg-gray-600 px-10">
        <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/30">
          <thead>
            <tr className="text-gray-300">
              <th className="font-normal px-4 py-2 whitespace-nowrap">#</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">Title</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">Album</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">
                <svg
                  viewBox="0 0 32 32"
                  class="inline-block h-5 w-5"
                  astro-icon="carbon:time"
                >
                  <path
                    fill="currentColor"
                    d="M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M20.59 22 15 16.41V7h2v8.58l5 5.01L20.59 22z"
                  ></path>
                </svg>
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            {library.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex gap-2 p-2">
                    <img
                      className="w-12 h-12 rounded-lg object-cover"
                      src={item.img}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="text-base">{item.title}</span>
                      <span className="text-sm">{item.singer}</span>
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;
