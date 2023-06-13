import { Outlet } from "react-router-dom";
import TopBar from "../components/top-bar";
import MobileNav from "../components/mobile-nav";
import Backdrop from "../components/backdrop";
//import "../styles/root.scss";

export default function Root() {
  return (
    <>
      <TopBar />
      <Outlet />
      <MobileNav />
      <Backdrop />
    </>
  );
}
