import logo from "../images/logo-small.webp";
import skull from "../images/icons/skull.png";
import booze from "../images/icons/booze.png";
import gun from "../images/icons/gun.png";
import grave from "../images/icons/grave.png";
import "../styles/top-bar.scss";

export default function TopBar() {
  return (
    <div className="top-bar">
      <button>
        <img src={gun} alt="" />
        <span>Merch</span>
      </button>
      <button>
        <img src={grave} alt="" />
        <span>Gallery</span>
      </button>
      <img className="top-bar-logo" src={logo} alt="Lil Darkie" />
      <button>
        <img src={skull} alt="" />
        <span>Upcoming Shows</span>
      </button>
      <button>
        <img src={booze} alt="" />
        <span>More</span>
      </button>
    </div>
  );
}
