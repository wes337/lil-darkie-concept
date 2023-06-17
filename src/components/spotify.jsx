import { Link } from "react-router-dom";
import spotify from "../images/icons/spotify.png";
import useStore from "../store";
import "../styles/spotify.scss";

export default function Spotify() {
  const { mobileNavOpen } = useStore();

  return (
    <Link
      className={`spotify${mobileNavOpen ? " hide" : ""}`}
      to="https://open.spotify.com/artist/62F9BiUmjqeXbBztCwiX1U"
      target="_blank"
    >
      <img src={spotify} alt="" />
    </Link>
  );
}