import { useEffect } from "react";
import { getRandomNumberBetween } from "../utils";
import useStore from "../store";
import "../styles/backdrop.scss";

export default function Backdrop() {
  const { lightMode, flashing, setFlashing } = useStore();

  useEffect(() => {
    let initialFlashingTimeout;
    let flashingTimeout;
    setFlashing(false);

    const triggerFlashing = () => {
      setFlashing(true);
      const flashingDuration = getRandomNumberBetween(1000, 1500);
      flashingTimeout = setTimeout(() => setFlashing(false), flashingDuration);
    };

    const flashingInterval = setInterval(() => {
      const random = Math.random() < 0.5;

      if (random) {
        triggerFlashing();
      }
    }, 5000);

    initialFlashingTimeout = setTimeout(() => {
      triggerFlashing();
    }, 1500);

    return () => {
      clearInterval(flashingInterval);
      clearTimeout(flashingTimeout);
      clearTimeout(initialFlashingTimeout);
    };
  }, [setFlashing]);

  return (
    <div className={`backdrop${flashing || lightMode ? " flashing" : ""}`} />
  );
}
