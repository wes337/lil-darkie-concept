import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useStore from "../store";
import menu from "../images/menu.png";
import logo from "../images/logo-yellow.png";
import mushroom from "../images/mushroom-small.png";
import planeOne from "../images/plane-1-small.png";
import planeTwo from "../images/plane-2-small.png";
import skull from "../images/icons/skull.png";
import booze from "../images/icons/booze.png";
import knife from "../images/icons/knife.png";
import cig from "../images/icons/cig.png";
import gun from "../images/icons/gun.png";
import grave from "../images/icons/grave.png";
import close from "../images/icons/close.png";
import spotify from "../images/icons/spotify.png";
import soundcloud from "../images/icons/soundcloud.png";
import youtube from "../images/icons/youtube.png";
import "../styles/mobile-nav.scss";

export default function MobileNav() {
  const location = useLocation();
  const { mobileNavOpen, setMobileNavOpen, sticky, setFlashing } = useStore();

  useEffect(() => {
    setMobileNavOpen(false);
    setFlashing(false);
  }, [location, setFlashing, setMobileNavOpen]);

  return (
    <>
      <div
        className={`blur${mobileNavOpen ? " open" : ""}`}
        onClick={() => setMobileNavOpen(false)}
      />
      <button
        className={`mobile-nav-button${sticky ? " sticky" : ""}`}
        onClick={() => setMobileNavOpen(true)}
      >
        <img src={menu} alt="" />
      </button>
      <div className={`mobile-nav${mobileNavOpen ? " open" : ""}`}>
        <div className="mobile-nav-header">
          <img className="mobile-nav-logo" src={logo} alt="Lil Darkie" />
          <div className="social-media-links">
            <Link
              to="https://open.spotify.com/artist/62F9BiUmjqeXbBztCwiX1U"
              target="_blank"
            >
              <img src={spotify} alt="Spotify" />
            </Link>
            <Link to="https://soundcloud.com/lildvrkie" target="_blank">
              <img src={soundcloud} alt="Soundcloud" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCy1PnulzEixUtsR-w-Pgd4w"
              target="_blank"
            >
              <img src={youtube} alt="YouTube" />
            </Link>
          </div>
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
            <img src={booze} alt="" />
            <span>Some Art</span>
          </Link>
          <Link to="/the-lost-songs">
            <img src={grave} alt="" />
            <span>The Lost Songs</span>
          </Link>
          <div className="mobile-nav-copyright">
            Copyright © 2023 Lil Darkie - All Rights Reserved.
          </div>
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
