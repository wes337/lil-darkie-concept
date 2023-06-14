import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";
import logo from "../images/logo-small.webp";
import logoYellow from "../images/logo-yellow.png";
import skull from "../images/icons/skull.png";
import booze from "../images/icons/booze.png";
import gun from "../images/icons/gun.png";
import grave from "../images/icons/grave.png";
import "../styles/top-bar.scss";

export default function TopBar() {
  const { lightMode, sticky, setSticky } = useStore();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setSticky(scrollY >= 32);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scoll", onScroll);
  }, [setSticky]);

  return (
    <>
      <div
        className={`top-bar${lightMode ? " light" : ""}${
          sticky ? " sticky" : ""
        }`}
      >
        <Link to="https://www.smalldarkone.com">
          <img src={gun} alt="" />
          <span>Merch</span>
        </Link>
        <Link to="/gallery">
          <img src={skull} alt="" />
          <span>Gallery</span>
        </Link>
        <Link to="/" className="top-bar-logo">
          <img src={sticky ? logoYellow : logo} alt="Lil Darkie" />
        </Link>
        <Link to="/upcoming-shows">
          <img src={grave} alt="" />
          <span>Upcoming Shows</span>
        </Link>
        <button>
          <img src={booze} alt="" />
          <span>More</span>
        </button>
      </div>
      <div className={`top-bar-back${sticky ? " sticky" : ""}`} />
    </>
  );
}
