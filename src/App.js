import { useState, useEffect } from "react";
import logo from "./images/logo-small.webp";
import menu from "./images/menu.png";
import monsters from "./images/monsters.png";
import spidergang from "./images/spidergang.png";
import skull from "./images/icons/skull.png";
import booze from "./images/icons/booze.png";
import knife from "./images/icons/knife.png";
import cig from "./images/icons/cig.png";
import gun from "./images/icons/gun.png";
import grave from "./images/icons/grave.png";
import { getRandomNumberBetween } from "./utils";
import Face from "./Face";
import "./App.scss";
import Sidebar from "./Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    let initialLightTimeout;
    let lightTimeout;

    const triggerLight = () => {
      setLight(true);
      const lightDuration = getRandomNumberBetween(500, 1000);
      lightTimeout = setTimeout(() => setLight(false), lightDuration);
    };

    const lightInterval = setInterval(() => {
      const random = Math.random() < 0.5;

      if (random) {
        triggerLight();
      }
    }, 5000);

    initialLightTimeout = setTimeout(() => {
      triggerLight();
    }, 1000);

    return () => {
      clearInterval(lightInterval);
      clearTimeout(lightTimeout);
      clearTimeout(initialLightTimeout);
    };
  }, []);

  return (
    <>
      <div className={`app${light ? " light" : ""}`}>
        <button className="sidebar-button" onClick={() => setSidebarOpen(true)}>
          <img src={menu} alt="" />
        </button>
        <div className="header">
          <button>
            <img src={cig} alt="" />
            <span>Merch</span>
          </button>
          <button>
            <img src={knife} alt="" />
            <span>Tour</span>
          </button>
          <button>
            <img src={grave} alt="" />
            <span>The Lost Songs</span>
          </button>
          <img className="logo" src={logo} alt="Lil Darkie" />
          <button>
            <img src={gun} alt="" />
            <span>Art</span>
          </button>
          <button>
            <img src={skull} alt="" />
            <span>Posters</span>
          </button>
          <button>
            <img src={booze} alt="" />
            <span>Writing</span>
          </button>
        </div>
        <div className="backdrop" />
        <Face />
        <div className="footer">
          <h2>U.S. Summer Tour 2023</h2>
          <button
            onPointerOver={() => setLight(true)}
            onPointerLeave={() => setLight(false)}
          >
            Get Tickets
          </button>
        </div>
        <div className="monsters">
          <img src={monsters} alt="" />
        </div>
        <div className={`spidergang${sidebarOpen ? " open" : ""}`}>
          <img src={spidergang} alt="Spider Gang" />
        </div>
      </div>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </>
  );
}

export default App;
