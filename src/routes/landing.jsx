import { Link } from "react-router-dom";
import useStore from "../store";
import monsters from "../images/monsters.png";
import fallTourTitle from "../images/tour/fall-tour-title-dark.png";
import Face from "../components/face";
import "../styles/landing.scss";

export default function Landing() {
  const { flashing, setFlashing } = useStore();

  return (
    <div className={`landing${flashing ? " flashing" : ""}`}>
      <Face />
      <div className="landing-footer">
        <div className="landing-footer-tour">
          <img src={fallTourTitle} alt="" />
        </div>
        <Link
          to="/fall-tour"
          onPointerOver={() => setFlashing(true)}
          onPointerLeave={() => setFlashing(false)}
        >
          Get Tickets
        </Link>
      </div>
      <div className="landing-monsters">
        <img src={monsters} alt="" />
      </div>
    </div>
  );
}
