import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Playlist = ({ playlist, library }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const bgStyle = () => {
    if (playlist) {
      return playlist.img;
    } else {
      return null;
    }
  };

  return !playlist ? (
    <div>Loading...</div>
  ) : (
    <div
      style={{
        maxHeight: "97vh",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        id="playlist-body"
        style={{
          backgroundImage: `url(${bgStyle()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(16px)",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        <div
          id="playlist-header-topbar"
          className="w-full h-10 flex justify-between px-3 pt-2"
        >
          <div
            id="playlist-header-topbar-goback"
            className="bg-zinc-900 rounded-full cursor-pointer h-8 w-8 flex justify-center items-center hover:scale-110 transition duration-300"
            onClick={goBack}
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 -ml-0.5 text-white bg-zinc-900"
              astro-icon="bi:chevron-left"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </div>
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
        <div
          id="playlist-header-bodybar"
          className="p-3 flex items-center mobile:flex-col"
        >
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
      <div
        id="playlist-body-headerbar"
        className="flex gap-5 py-10 px-3 items-center bg-gray-600"
      >
        <div
          id="play"
          className="rounded-full text-center hover:scale-110 p-2 h-14 w-14 bg-play transition duration-300"
        >
          <svg viewBox="0 0 24 24" className="" astro-icon="mdi:play">
            <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
          </svg>
        </div>
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10 hover:scale-110 text-play transition duration-300 cursor-pointer"
          astro-icon="mdi:heart"
        >
          <path
            fill="currentColor"
            d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
          ></path>
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="hover:scale-110 transition text-white duration-300 cursor-pointer opacity-50 hover:opacity-100 w-10"
          astro-icon="tabler:dots"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="icon-tabler"
          >
            <circle cx="5" cy="12" r="1"></circle>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
          </g>
        </svg>
      </div>
      <div
        id="playlist-body-table"
        className="bg-gray-600 px-10 h-screen rounded-b-xl"
      >
        <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/30">
          <thead>
            <tr className="text-gray-300">
              <th className="font-normal px-4 py-2 whitespace-nowrap">#</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">Title</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">Album</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap mobile:hidden">
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
            {library
              .filter((lib) => lib.title === playlist.title)
              .map((item) =>
                item.musics.map((music, musicIndex) => (
                  <tr
                    key={musicIndex}
                    className="cursor-pointer hover:bg-zinc-500 p-2"
                  >
                    <td className="px-2">{musicIndex + 1}</td>
                    <td>
                      <div className="flex gap-2.5 p-2.5">
                        <img
                          className="w-12 h-12 rounded-lg object-cover mobile:hidden"
                          src={music.img}
                          alt=""
                        />
                        <div className="flex flex-col">
                          <span className="text-base">{music.title}</span>
                          <span className="text-sm">{music.singer}</span>
                        </div>
                      </div>
                    </td>
                    <td>{music.title}</td>
                    <td className="mobile:hidden">2:00</td>
                  </tr>
                ))
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;
