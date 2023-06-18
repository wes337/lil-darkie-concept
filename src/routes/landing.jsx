import { useNavigate } from "react-router-dom";
import useStore from "../store";
import monsters from "../images/monsters.png";
import fallTourTitle from "../images/tour/fall-tour-title-dark-small.png";
import Face from "../components/face";
import "../styles/landing.scss";

export default function Landing() {
  const navigate = useNavigate();
  const { flashing, setFlashing, setBloodTransition } = useStore();

  return (
    <div className={`landing${flashing ? " flashing" : ""}`}>
      <Face />
      <div className="landing-footer">
        <div className="landing-footer-tour">
          <img src={fallTourTitle} alt="" />
        </div>
        <button
          onPointerOver={() => setFlashing(true)}
          onPointerLeave={() => setFlashing(false)}
          onClick={() => {
            setBloodTransition(true);
            setTimeout(() => navigate("/fall-tour"), 400);
          }}
        >
          Get Tickets
        </button>
      </div>
      <div className="landing-monsters">
        <img src={monsters} alt="" />
      </div>
    </div>
  );
}
