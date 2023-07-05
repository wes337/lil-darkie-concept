import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils";
import useStore from "../store";
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
          <img src={`${CDN_URL}/fall-tour-title-dark-small.png`} alt="" />
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
        <img src={`${CDN_URL}/monsters.png`} alt="" />
      </div>
    </div>
  );
}
