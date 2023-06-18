import { useState, useEffect } from "react";
import face from "../images/face/face-1.png";
import faceBlink from "../images/face/face-1-blink.png";
import faceSpeak from "../images/face/face-2.png";
import faceSpeakBlink from "../images/face/face-5.png";
import useStore from "../store";
import "../styles/face.scss";

export default function Face() {
  const { setFlashing } = useStore();
  const [facePressed, setFacePressed] = useState(false);
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

  useEffect(() => {
    setFlashing(facePressed);
  }, [facePressed, setFlashing]);

  return (
    <div
      className={`face${blinking ? " blink" : ""}`}
      onPointerDown={() => setFacePressed(true)}
      onPointerUp={() => setFacePressed(false)}
    >
      <div className={`red${facePressed ? " show" : ""}`} />
      <img
        className={`normal${facePressed ? "" : " show"}`}
        src={face}
        alt=""
      />
      <img
        className={`blink${!facePressed && blinking ? " show" : ""}`}
        src={faceBlink}
        alt=""
      />
      <img
        className={`speak${!blinking && facePressed ? " show" : ""}`}
        src={faceSpeak}
        alt=""
      />
      <img
        className={`speak-blink${blinking && facePressed ? " show" : ""}`}
        src={faceSpeakBlink}
        alt=""
      />
    </div>
  );
}
