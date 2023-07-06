import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getJSON, TOUR_DATES_DATA, UPCOMING_SHOWS_DATA } from "../utils";
import useStore from "../store";
import TopBar from "../components/top-bar";
import Nav from "../components/nav";
import Backdrop from "../components/backdrop";
import Spotify from "../components/spotify";
import Blood from "../components/blood";

export default function Root() {
  const {
    tourDates,
    setTourDates,
    upcomingShows,
    setUpcomingShows,
    setSticky,
    setScroll,
  } = useStore();

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

  useEffect(() => {
    if (tourDates.length === 0) {
      const fetchTourDates = async () => {
        const tourDates = await getJSON(TOUR_DATES_DATA);
        setTourDates(tourDates);
      };

      fetchTourDates();
    }
  }, [tourDates, setTourDates]);

  useEffect(() => {
    if (upcomingShows.length === 0) {
      const fetchUpcomingShows = async () => {
        const upcomingShows = await getJSON(UPCOMING_SHOWS_DATA);
        setUpcomingShows(upcomingShows);
      };

      fetchUpcomingShows();
    }
  }, [upcomingShows, setUpcomingShows]);

  return (
    <>
      <Spotify />
      <TopBar />
      <Outlet />
      <Blood />
      <Nav />
      <Backdrop />
    </>
  );
}
