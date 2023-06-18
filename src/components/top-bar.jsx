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
  const { lightMode, sticky, setBloodTransition, setMobileNavOpen } =
    useStore();

  const transitionTo = (url) => {
    if (location.pathname === url) {
      return;
    }

    setBloodTransition(true);
    setTimeout(() => navigate(url), 500);
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
        <button onClick={() => transitionTo("/upcoming-shows")}>
          <img src={skull} alt="" />
          <span>Upcoming Shows</span>
        </button>
        <button
          onClick={() => transitionTo("/")}
          className={`top-bar-logo${sticky ? " sticky" : ""}`}
        >
          <img className="logo-yellow" src={logoYellow} alt="Lil Darkie" />
          <img className="logo-primary" src={logo} alt="Lil Darkie" />
        </button>
        <button onClick={() => transitionTo("/fall-tour")}>
          <img src={grave} alt="" />
          <span>Fall Tour 2023</span>
        </button>
        <button onClick={() => setMobileNavOpen(true)}>
          <img src={booze} alt="" />
          <span>More</span>
        </button>
      </div>
      <div className={`top-bar-back${sticky ? " sticky" : ""}`} />
    </>
  );
}
