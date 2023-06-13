import { Link } from "react-router-dom";
import useStore from "../store";
import logo from "../images/logo-small.webp";
import skull from "../images/icons/skull.png";
import booze from "../images/icons/booze.png";
import gun from "../images/icons/gun.png";
import grave from "../images/icons/grave.png";
import "../styles/top-bar.scss";

export default function TopBar() {
  const { lightMode } = useStore();

  return (
    <div className={`top-bar${lightMode ? " light" : ""}`}>
      <Link to="https://www.smalldarkone.com">
        <img src={gun} alt="" />
        <span>Merch</span>
      </Link>
      <Link to="/gallery">
        <img src={skull} alt="" />
        <span>Gallery</span>
      </Link>
      <Link to="/" className="top-bar-logo">
        <img src={logo} alt="Lil Darkie" />
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
  );
}
