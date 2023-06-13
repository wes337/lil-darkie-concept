import useStore from "../store";
import menu from "../images/menu.png";
import logo from "../images/logo-yellow.png";
import mushroom from "../images/mushroom.png";
import planeOne from "../images/plane-1.png";
import planeTwo from "../images/plane-2.png";
import skull from "../images/icons/skull.png";
import booze from "../images/icons/booze.png";
import knife from "../images/icons/knife.png";
import cig from "../images/icons/cig.png";
import gun from "../images/icons/gun.png";
import grave from "../images/icons/grave.png";
import close from "../images/icons/close.png";
import "../styles/mobile-nav.scss";

export default function MobileNav() {
  const { mobileNavOpen, setMobileNavOpen } = useStore();

  return (
    <>
      <button
        className="mobile-nav-button"
        onClick={() => setMobileNavOpen(true)}
      >
        <img src={menu} alt="" />
      </button>
      <div className={`mobile-nav${mobileNavOpen ? " open" : ""}`}>
        <div className="mobile-nav-header">
          <img className="mobile-nav-logo" src={logo} alt="Lil Darkie" />
          <button
            className="mobile-nav-close"
            onClick={() => setMobileNavOpen(false)}
          >
            <img src={close} alt="Close" />
          </button>
        </div>
        <div className="mobile-nav-links">
          <button>
            <img src={gun} alt="" />
            <span>Merch</span>
          </button>
          <button>
            <img src={grave} alt="" />
            <span>Gallery</span>
          </button>
          <button>
            <img src={skull} alt="" />
            <span>Upcoming Shows</span>
          </button>
          <button>
            <img src={knife} alt="" />
            <span>Fall 2023 Tour</span>
          </button>
          <button>
            <img src={cig} alt="" />
            <span>Posters</span>
          </button>
          <button>
            <img src={gun} alt="" />
            <span>Some Art</span>
          </button>
          <button>
            <img src={booze} alt="" />
            <span>Writing</span>
          </button>
          <button>
            <img src={grave} alt="" />
            <span>The Lost Songs</span>
          </button>
        </div>
        <div className={`planes${mobileNavOpen ? " open" : ""}`}>
          <img className="plane-one" src={planeTwo} alt="" />
          <img className="plane-two" src={planeOne} alt="" />
        </div>
        <div className="mobile-nav-copyright">
          Copyright © 2023 Lil Darkie - All Rights Reserved.
        </div>
      </div>
      <div className={`mushroom${mobileNavOpen ? " open" : ""}`}>
        <img src={mushroom} alt="" />
      </div>
    </>
  );
}
