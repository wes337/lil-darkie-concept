import { useState, useEffect, useRef } from "react";
import "../styles/slide-show.scss";

export default function SlideShow({ images }) {
  const [stopAutoScroll, setStopAutoScroll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const resetAutoScrollTimer = useRef();

  useEffect(() => {
    if (stopAutoScroll) {
      return;
    }

    const image = document.getElementById(`image-${selectedImage}`);
    image.scrollIntoView({ behavior: "smooth" });
  }, [selectedImage, stopAutoScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((selectedImage) => {
        const nextIndex = selectedImage + 1;
        if (images[nextIndex]) {
          return nextIndex;
        }

        return 0;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slide-show">
      <h1>USA 2023 Tour Photos</h1>
      <div className="slide-show-selected-image">
        <img src={images[selectedImage]} alt="" />
      </div>
      <div
        className="slide-show-images"
        onScroll={() => {
          clearTimeout(resetAutoScrollTimer.current);
          setStopAutoScroll(true);
          resetAutoScrollTimer.current = setTimeout(() => {
            setStopAutoScroll(false);
          }, 10000);
        }}
      >
        {images.map((image, i) => (
          <button
            key={image}
            id={`image-${i}`}
            onClick={() => {
              clearTimeout(resetAutoScrollTimer.current);
              setSelectedImage(i);
              setStopAutoScroll(true);
              resetAutoScrollTimer.current = setTimeout(() => {
                setStopAutoScroll(false);
              }, 10000);
            }}
          >
            <img
              src={image}
              alt=""
              className={i === selectedImage ? "selected" : ""}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
