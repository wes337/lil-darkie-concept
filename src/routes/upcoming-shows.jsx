import { useEffect } from "react";
import { Link } from "react-router-dom";
import camo from "../images/camo.png";
import voices from "../images/voices.png";
import boom from "../images/boom.png";
import upcomingShows from "../data/upcoming-shows.json";
import { formateDate, isMobileSizedScreen } from "../utils";
import useStore from "../store";
import "../styles/upcoming-shows.scss";

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
      <img className="camo" src={camo} alt="" />
      <div className={`upcoming-shows${flashing ? " flashing" : ""}`}>
        <h1>Upcoming Shows</h1>
        <div className="upcoming-shows-list">
          <img
            className={`voices${flashing ? " flashing" : ""}`}
            src={voices}
            alt=""
          />
          {upcomingShows
            .sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map((upcomingShow) => {
              const isOver =
                new Date(upcomingShow.date).getTime() < new Date().getTime();

              return (
                <div
                  key={upcomingShow.date}
                  className={`upcoming-show${isOver ? " over" : ""}`}
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
                      isOver ? " disabled" : ""
                    }`}
                    to={upcomingShow.ticketLink}
                    target="_blank"
                  >
                    Tickets
                    <img className="boom" src={boom} alt="" />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
