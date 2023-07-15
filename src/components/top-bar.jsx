import { Link, useLocation, useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils";
import useStore from "../store";
import "../styles/top-bar.scss";

export default function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lightMode, sticky, setBloodTransition, setNavOpen } = useStore();

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
        {/* <Link to="https://www.smalldarkone.com"> */}
        <Link to="#">
          <img src={`${CDN_URL}/icons/gun.png`} alt="" />
          <span>Merch</span>
        </Link>
        <button onClick={() => transitionTo("/upcoming-shows")}>
          <img src={`${CDN_URL}/icons/skull.png`} alt="" />
          <span>Upcoming Shows</span>
        </button>
        <button
          onClick={() => transitionTo("/")}
          className={`top-bar-logo${sticky ? " sticky" : ""}`}
        >
          <img
            className="logo-yellow"
            src={`${CDN_URL}/logo-yellow.png`}
            alt="Lil Darkie"
          />
          <img
            className="logo-primary"
            src={`${CDN_URL}/logo-small.png`}
            alt="Lil Darkie"
          />
        </button>
        <button onClick={() => transitionTo("/fall-tour")}>
          <img src={`${CDN_URL}/icons/grave.png`} alt="" />
          <span>Fall Tour 2023</span>
        </button>
        <button onClick={() => setNavOpen(true)}>
          <img src={`${CDN_URL}/icons/booze.png`} alt="" />
          <span>More</span>
        </button>
      </div>
      <div className={`top-bar-back${sticky ? " sticky" : ""}`} />
    </>
  );
}
