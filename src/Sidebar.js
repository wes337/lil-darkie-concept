import logo from "./images/logo-yellow.png";
import mushroom from "./images/mushroom.png";
import skull from "./images/icons/skull.png";
import booze from "./images/icons/booze.png";
import knife from "./images/icons/knife.png";
import cig from "./images/icons/cig.png";
import gun from "./images/icons/gun.png";
import grave from "./images/icons/grave.png";
import "./Sidebar.scss";

function Sidebar({ open, setOpen }) {
  return (
    <>
      <div className={`sidebar${open ? " open" : ""}`}>
        <div className="sidebar-header">
          <img className="sidebar-logo" src={logo} alt="Lil Darkie" />
          <button className="close" onClick={() => setOpen(false)}>
            <img src={skull} alt="Close" />
          </button>
        </div>
        <div className="sidebar-nav">
          <button>
            <img src={cig} alt="" />
            <span>Merch</span>
          </button>
          <button>
            <img src={gun} alt="" />
            <span>Art</span>
          </button>
          <button>
            <img src={knife} alt="" />
            <span>Tour</span>
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
      </div>
      <div className={`mushroom${open ? " open" : ""}`}>
        <img src={mushroom} alt="" />
      </div>
    </>
  );
}

export default Sidebar;
