import { Link } from "react-router-dom";
import { CDN_URL } from "../utils";
import useStore from "../store";
import "../styles/spotify.scss";

export default function Spotify() {
  const { navOpen, sticky } = useStore();

  return (
    <Link
      className={`spotify${navOpen ? " hide" : ""}${sticky ? " sticky" : ""}`}
      to="https://open.spotify.com/artist/62F9BiUmjqeXbBztCwiX1U"
      target="_blank"
    >
      <img src={`${CDN_URL}/icons/spotify.png`} alt="" />
    </Link>
  );
}
