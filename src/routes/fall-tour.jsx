import { useEffect } from "react";
import fallTourBackdrop from "../images/tour/tour-full.png";
import "../styles/fall-tour.scss";

export default function FallTour() {
  useEffect(() => {
    document.body.classList.add("light");

    return () => document.body.classList.remove("light");
  }, []);

  return (
    <div className="fall-tour">
      <img src={fallTourBackdrop} alt="" />
    </div>
  );
}
