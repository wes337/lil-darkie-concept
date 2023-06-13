import { useEffect } from "react";
import { getRandomNumberBetween } from "../utils";
import useStore from "../store";
import "../styles/backdrop.scss";

export default function Backdrop() {
  const { flashing, setFlashing } = useStore();

  useEffect(() => {
    let initialLightTimeout;
    let lightTimeout;

    const triggerLight = () => {
      setFlashing(true);
      const lightDuration = getRandomNumberBetween(500, 1000);
      lightTimeout = setTimeout(() => setFlashing(false), lightDuration);
    };

    const lightInterval = setInterval(() => {
      const random = Math.random() < 0.5;

      if (random) {
        triggerLight();
      }
    }, 5000);

    initialLightTimeout = setTimeout(() => {
      triggerLight();
    }, 1000);

    return () => {
      clearInterval(lightInterval);
      clearTimeout(lightTimeout);
      clearTimeout(initialLightTimeout);
    };
  }, [setFlashing]);

  return <div className={`backdrop${flashing ? " flashing" : ""}`} />;
}
