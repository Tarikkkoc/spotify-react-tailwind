import "./App.css";
import { Routes } from "react-router-dom";
import Layout1 from "./components/navbar/Layout1";
import Layout2 from "./components/navbar/Layout2";
import { useState } from "react";
import Home from "./components/main/Home";

function App() {
  const library = [
    {
      title: "Electronic Party",
      img: "https://picsum.photos/seed/picsum/200/300",
      singer: "Avicii, Alok",
    },
    {
      title: "Trance",
      img: "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
      singer: "Tiesto, Armin Van Buuren",
    },
    {
      title: "Trap Vibes",
      img: "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
      singer: "Post Malone, Travis Scott, 21 savage",
    },
    {
      title: "Beatles Classics",
      img: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
      singer: "The Beatles",
    },
    {
      title: "Electronic Dance",
      img: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
      singer: "Deadmau5",
    },
    {
      title: "Cow songs",
      img: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
      singer: "Saint Hilda, Canada Buffalo",
    },
  ];

  const [home, setHome] = useState(true);
  return (
    <div className="h-screen bg-darkHorizon flex w-full">
      <div className="pt-3 h-full flex flex-col gap-2">
        <Layout1 />
        <Layout2 library={library} />
      </div>
      <div className="pt-3 w-full h-full px-3 pb-3">
        {home && <Home library={library} />}
      </div>
    </div>
  );
}

export default App;
