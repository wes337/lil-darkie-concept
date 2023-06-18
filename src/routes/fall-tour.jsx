import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";
import { isMobileSizedScreen, formateDate } from "../utils";
import title from "../images/tour/fall-tour-title-small.png";
import end from "../images/tour/end.png";
import bottom from "../images/tour/bottom-small.png";
import voteGuy from "../images/vote_guy-small.png";
import tourDates from "../data/fall-tour-dates.json";
import paratrooper from "../images/paratrooper-small.png";
import "../styles/fall-tour.scss";

export default function FallTour() {
  const { setLightMode, scroll } = useStore();

  useEffect(() => {
    setLightMode(true);

    return () => setLightMode(false);
  }, [setLightMode]);

  return (
    <div className="fall-tour">
      <img
        className="title"
        src={title}
        alt=""
        style={{
          transform: `translateY(${
            isMobileSizedScreen()
              ? Math.min(Math.floor((scroll - 2) * -1), 0)
              : Math.floor(scroll + 5 * 2)
          }px)`,
        }}
      />
      <img
        className="end"
        src={end}
        alt=""
        style={{
          transform: `translateY(calc(
            ${isMobileSizedScreen() ? "280%" : "100%"} +
            ${
              isMobileSizedScreen()
                ? Math.floor(scroll / 4)
                : Math.floor(scroll * 0.75)
            }px))`,
        }}
      />
      <img className="bottom" src={bottom} alt="" />
      <div className={`panel${scroll >= 100 ? " scroll" : ""}`}>
        <div className="vote-guy">
          <img src={voteGuy} alt="" />
        </div>
        <div className="paratrooper">
          <img src={paratrooper} alt="" />
        </div>
        <div className="tour-cities">
          {tourDates.map(({ date, city, venue, ticketLink }) => {
            return (
              <Link className="city" key={date} to={ticketLink} target="_blank">
                {city.split(",")[0].trim()}
                <div className="date">{formateDate(date)}</div>
                <div className="venue">@ {venue}</div>
              </Link>
            );
          })}
        </div>
        <div className="copyright">
          Copyright © 2023 Lil Darkie
          <br />
          All Rights Reserved
        </div>
      </div>
    </div>
  );
}
