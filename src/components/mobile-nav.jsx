import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { mobileNavOpen, setMobileNavOpen } = useStore();

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location, setMobileNavOpen]);

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
          <Link to="https://www.smalldarkone.com">
            <img src={gun} alt="" />
            <span>Merch</span>
          </Link>
          <Link to="/gallery">
            <img src={skull} alt="" />
            <span>Gallery</span>
          </Link>
          <Link to="/upcoming-shows">
            <img src={grave} alt="" />
            <span>Upcoming Shows</span>
          </Link>
          <Link to="/fall-tour">
            <img src={knife} alt="" />
            <span>Fall 2023 Tour</span>
          </Link>
          <Link to="/posters">
            <img src={cig} alt="" />
            <span>Posters</span>
          </Link>
          <Link to="/art">
            <img src={gun} alt="" />
            <span>Some Art</span>
          </Link>
          <Link to="/writing">
            <img src={booze} alt="" />
            <span>Writing</span>
          </Link>
          <Link to="/the-lost-songs">
            <img src={grave} alt="" />
            <span>The Lost Songs</span>
          </Link>
        </div>
        <div className="mobile-nav-copyright">
          Copyright © 2023 Lil Darkie - All Rights Reserved.
        </div>
      </div>
      <div className={`mushroom${mobileNavOpen ? " open" : ""}`}>
        <img src={mushroom} alt="" />
      </div>
      <div className={`planes${mobileNavOpen ? " open" : ""}`}>
        <img className="plane-one" src={planeTwo} alt="" />
        <img className="plane-two" src={planeOne} alt="" />
      </div>
    </>
  );
}
