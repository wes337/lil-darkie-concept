import tv from "../images/tv.jpg";
import SlideShow from "../components/slide-show";
import "../styles/gallery.scss";

export default function Gallery() {
  const images = [];

  for (let i = 1; i <= 29; i++) {
    images.push(`${process.env.PUBLIC_URL}/photos/usa-2023/${i}.webp`);
  }

  return (
    <>
      <img className="tv" src={tv} alt="" />
      <div className="gallery">
        <SlideShow images={images} />
      </div>
    </>
  );
}
