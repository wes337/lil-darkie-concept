import { useState, useEffect } from "react";
import face from "../images/face/face-1.png";
import faceBlink from "../images/face/face-1-blink.png";
import "../styles/face.scss";

export default function Face() {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    let blinkTimeout;

    const triggerBlink = () => {
      setBlinking(true);
      const blinkDuration = 200;
      blinkTimeout = setTimeout(() => setBlinking(false), blinkDuration);
    };

    const blinkInterval = setInterval(() => {
      const random = Math.random() < 0.5;

      if (random) {
        triggerBlink();
      }
    }, 2000);

    return () => {
      clearInterval(blinkInterval);
      clearTimeout(blinkTimeout);
    };
  }, []);

  return (
    <div className={`face${blinking ? " blink" : ""}`}>
      <img src={face} alt="" />
      <img
        className={`blink${blinking ? " show" : ""}`}
        src={faceBlink}
        alt=""
      />
    </div>
  );
}
