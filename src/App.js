import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout1 from "./components/navbar/Layout1";
import Layout2 from "./components/navbar/Layout2";
import { useState } from "react";
import Home from "./components/main/Home";
import Playlist from "./components/main/Playlist";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState(null);

  const onMouseClick = (img, title, singer) => {
    let list = { img, title, singer };
    setPlaylist(list);
    navigate("/playlist");
  };
  const library = [
    {
      title: "Electronic Party",
      img: "https://picsum.photos/seed/picsum/200/300",
      singer: "Avicii, Alok",
      musics: [
        {
          img: "https://images.genius.com/1b94284fba835978ed7bb4f682c4a44d.600x600x1.jpg",
          title: "Sabah Fabrikam",
          singer: "Sagopa Kajmer",
        },
        {
          img: "https://i1.sndcdn.com/artworks-000642950101-u6gw4p-t500x500.jpg",
          title: "Güzel Kızlar Patron Dinler",
          singer: "Patron",
        },
        {
          img: "https://i1.sndcdn.com/artworks-000034198380-wr0le7-t500x500.jpg",
          title: "Galiba",
          singer: "Sagopa Kajmer",
        },
      ],
    },
    {
      title: "Trance",
      img: "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
      singer: "Tiesto, Armin Van Buuren",
      musics: [
        {
          img: "https://www.radyoviva.com.tr/wp-content/uploads/2023/04/MERVE.jpg",
          title: "Sahi",
          singer: "Merve Özbey",
        },
        {
          img: "https://cdns-images.dzcdn.net/images/cover/170c09896fb68decc65b6190f385b642/500x500.jpg",
          title: "Hadi Çal",
          singer: "Derya Uluğ",
        },
      ],
    },
    {
      title: "Trap Vibes",
      img: "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
      singer: "Post Malone, Travis Scott, 21 savage",
      musics: [
        {
          img: "https://www.radyoviva.com.tr/wp-content/uploads/2023/04/MERVE.jpg",
          title: "Vicdanın Affetsin",
          singer: "Merve Özbey",
        },
        {
          img: "https://www.radyoviva.com.tr/wp-content/uploads/2023/04/MERVE.jpg",
          title: "Vuracak",
          singer: "Merve Özbey",
        },
      ],
    },
    {
      title: "Beatles Classics",
      img: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
      singer: "The Beatles",
      musics: [
        {
          img: "https://cdns-images.dzcdn.net/images/cover/170c09896fb68decc65b6190f385b642/500x500.jpg",
          title: "Kanunlar Gibi",
          singer: "Derya Uluğ",
        },
        {
          img: "https://cdns-images.dzcdn.net/images/cover/170c09896fb68decc65b6190f385b642/500x500.jpg",
          title: "Nefes",
          singer: "Derya Uluğ",
        },
      ],
    },
    {
      title: "Electronic Dance",
      img: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
      singer: "Deadmau5",
      musics: [
        {
          img: "https://cdns-images.dzcdn.net/images/cover/170c09896fb68decc65b6190f385b642/500x500.jpg",
          title: "Kül",
          singer: "Merve Özbey",
        },
        {
          img: "https://cdns-images.dzcdn.net/images/cover/170c09896fb68decc65b6190f385b642/500x500.jpg",
          title: "Nefes",
          singer: "Derya Uluğ",
        },
      ],
    },
    {
      title: "Cow songs",
      img: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
      singer: "Saint Hilda, Canada Buffalo",
      musics: [
        {
          img: "https://cdns-images.dzcdn.net/images/cover/170c09896fb68decc65b6190f385b642/500x500.jpg",
          title: "Kül",
          singer: "Merve Özbey",
        },
        {
          img: "https://cdns-images.dzcdn.net/images/cover/170c09896fb68decc65b6190f385b642/500x500.jpg",
          title: "Nefes",
          singer: "Derya Uluğ",
        },
      ],
    },
  ];

  const [home, setHome] = useState(true);
  return (
    <div className="bg-darkHorizon flex w-full min-h-">
      <div className="pt-3 h-full flex flex-col gap-2 tablet:hidden mobile:hidden">
        <Layout1 />
        <Layout2 library={library} onMouseClick={onMouseClick} />
      </div>
      <div className="pt-3 w-full h-full px- pb-3">
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence exitBeforeEnter={false}>
                <motion.div
                  key="home"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.3 }}
                >
                  <Home library={library} onMouseClick={onMouseClick} />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/playlist"
            element={
              <AnimatePresence exitBeforeEnter={false}>
                <motion.div
                  key="playlist"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.3 }}
                >
                  <Playlist playlist={playlist} library={library} />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
