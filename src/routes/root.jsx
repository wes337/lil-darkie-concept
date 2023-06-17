import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useStore from "../store";
import TopBar from "../components/top-bar";
import MobileNav from "../components/mobile-nav";
import Backdrop from "../components/backdrop";
import Spotify from "../components/spotify";
import Blood from "../components/blood";

export default function Root() {
  const { setSticky, setScroll } = useStore();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = Math.floor(window.scrollY);
      setScroll(scrollY);
      setSticky(scrollY >= 32);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scoll", onScroll);
  }, [setScroll, setSticky]);

  return (
    <>
      <Spotify />
      <TopBar />
      <Outlet />
      <Blood />
      <MobileNav />
      <Backdrop />
    </>
  );
}
