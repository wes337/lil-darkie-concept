import { useEffect } from "react";
import useStore from "../store";
import fallTourBackdrop from "../images/tour/tour-full.png";
import "../styles/fall-tour.scss";

export default function FallTour() {
  const { setLightMode } = useStore();

  useEffect(() => {
    setLightMode(true);

    return () => setLightMode(false);
  }, [setLightMode]);

  return (
    <div className="fall-tour">
      <img src={fallTourBackdrop} alt="" />
    </div>
  );
}
