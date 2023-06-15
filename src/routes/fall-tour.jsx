import { useEffect } from "react";
// import { Link } from "react-router-dom";
import useStore from "../store";
import title from "../images/tour/fall-tour-title.png";
import end from "../images/tour/end.png";
import bottom from "../images/tour/bottom.png";
import voteGuy from "../images/vote_guy.png";
import tourDates from "../data/fall-tour-dates.json";
import "../styles/fall-tour.scss";

export default function FallTour() {
  const { setLightMode, scroll } = useStore();

  useEffect(() => {
    setLightMode(true);

    return () => setLightMode(false);
  }, [setLightMode]);

  return (
    <div className="fall-tour">
      <img className="title" src={title} alt="" />
      <img className="end" src={end} alt="" />
      <img className="bottom" src={bottom} alt="" />
      <div className={`panel${scroll >= 100 ? " scroll" : ""}`}>
        <div className="vote-guy">
          <img src={voteGuy} alt="" />
        </div>
        <div className="tour-cities">
          {tourDates.map(({ date, city, venue, ticketLink }) => {
            return (
              <div className="city" key={date}>
                {city.split(",")[0].trim()}
                <div className="date">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    weekday: "short",
                  }).format(new Date(date))}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="grid">
          {tourDates.map(({ date, city, venue, ticketLink }) => {
            return (
              <div className="tour-date" key={date}>
                <div className="city">{city}</div>
                <div className="date">{date}</div>
                <div className="venue">@ {venue}</div>
                <Link className="buy" to={ticketLink}>
                  Buy Tickets
                </Link>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
