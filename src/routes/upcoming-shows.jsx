import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CDN_URL, formateDate, isMobileSizedScreen } from "../utils";
import useStore from "../store";
import upcomingShowsData from "../data/upcoming-shows.json";
import "../styles/upcoming-shows.scss";

const allShows = upcomingShowsData.map((show) => {
  const date = new Date(show.date);
  const isOver = date.getTime() < new Date().getTime();

  return {
    ...show,
    date,
    isOver,
  };
});

const previousShows = allShows
  .filter((show) => show.isOver)
  .sort((a, b) => {
    return b.date - a.date;
  });

const upcomingShows = allShows
  .filter((show) => !show.isOver)
  .sort((a, b) => {
    return a.date - b.date;
  });

export default function UpcomingShows() {
  const { flashing, setLightMode } = useStore();

  useEffect(() => {
    const hideScrollOnDesktop = () => {
      if (isMobileSizedScreen()) {
        document.body.classList.remove("no-scroll");
      } else {
        document.body.classList.add("no-scroll");
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("resize", hideScrollOnDesktop);

    hideScrollOnDesktop();

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("resize", hideScrollOnDesktop);
    };
  }, []);

  useEffect(() => {
    setLightMode(true);

    return () => {
      setLightMode(false);
    };
  }, [setLightMode]);

  return (
    <>
      <img className="camo" src={`${CDN_URL}/camo-small.png`} alt="" />
      <div className={`upcoming-shows${flashing ? " flashing" : ""}`}>
        <h1>Upcoming Shows</h1>
        <div className="upcoming-shows-list">
          <img
            className={`voices${flashing ? " flashing" : ""}`}
            src={`${CDN_URL}/voices-small.png`}
            alt=""
          />
          {[...upcomingShows, ...previousShows].map((upcomingShow) => {
            return (
              <div
                key={upcomingShow.date}
                className={`upcoming-show${upcomingShow.isOver ? " over" : ""}`}
              >
                <div className="upcoming-show-city">{upcomingShow.city}</div>
                <div className="upcoming-show-venue">
                  {upcomingShow.venue.match(/@/) ? "" : "@"}
                  {upcomingShow.venue}
                </div>
                <div className="upcoming-show-date">
                  {formateDate(upcomingShow.date)}
                </div>
                <Link
                  className={`upcoming-show-tickets${
                    upcomingShow.isOver ? " disabled" : ""
                  }`}
                  to={upcomingShow.ticketLink}
                  target="_blank"
                >
                  Tickets
                  <img className="boom" src={`${CDN_URL}/boom.png`} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
