import { Link, useLocation, useNavigate } from "react-router-dom";
import useStore from "../store";
import logo from "../images/logo-small.webp";
import logoYellow from "../images/logo-yellow.png";
import skull from "../images/icons/skull.png";
import booze from "../images/icons/booze.png";
import gun from "../images/icons/gun.png";
import grave from "../images/icons/grave.png";
import "../styles/top-bar.scss";

export default function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lightMode, sticky, setBloodTransition } = useStore();

  const onClickLogo = () => {
    if (location.pathname === "/") {
      return;
    }

    setBloodTransition(true);
    setTimeout(() => navigate("/"), 200);
  };

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
        <button
          onClick={onClickLogo}
          className={`top-bar-logo${sticky ? " sticky" : ""}`}
        >
          <img className="logo-yellow" src={logoYellow} alt="Lil Darkie" />
          <img className="logo-primary" src={logo} alt="Lil Darkie" />
        </button>
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
