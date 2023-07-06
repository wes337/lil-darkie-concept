import { Fragment, useState, useEffect } from "react";
import {
  TOUR_DATES_DATA,
  UPCOMING_SHOWS_DATA,
  getJSON,
  toDateInput,
} from "../utils";
import "../styles/admin.scss";
import { uploadFile } from "../upload";

export default function Admin() {
  const [selectedData, setSelectedData] = useState("tourDates");
  const [tourDatesData, setTourDatesData] = useState();
  const [upcomingShowsData, setUpcomingShowsData] = useState();
  const [tourDates, setTourDates] = useState();
  const [upcomingShows, setUpcomingShows] = useState();
  const [password, setPassword] = useState("");
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("full");

    return () => document.body.classList.remove("full");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const tourDates = await getJSON(TOUR_DATES_DATA);
      const upcomingShows = await getJSON(UPCOMING_SHOWS_DATA);
      setTourDates(tourDates);
      setTourDatesData(tourDates);
      setUpcomingShows(upcomingShows);
      setUpcomingShowsData(upcomingShows);
      setLoading(false);
    };

    fetchData();
  }, []);

  const updateValue = (data, key, value, index) => {
    if (data === "tourDates") {
      setTourDates((tourDates) => {
        return tourDates.map((tourDate, i) => {
          if (i !== index) {
            return tourDate;
          }

          return {
            ...tourDate,
            [key]: value,
          };
        });
      });
    } else if (data === "upcomingShows") {
      setUpcomingShows((upcomingShows) => {
        return upcomingShows.map((upcomingShow, i) => {
          if (i !== index) {
            return upcomingShow;
          }

          return {
            ...upcomingShow,
            [key]: value,
          };
        });
      });
    }
  };

  useEffect(() => {
    if (selectedData === "upcomingShows") {
      const unsavedChanges =
        JSON.stringify(upcomingShowsData) !== JSON.stringify(upcomingShows);
      setUnsavedChanges(unsavedChanges);
    } else if (selectedData === "tourDates") {
      const unsavedChanges =
        JSON.stringify(tourDatesData) !== JSON.stringify(tourDates);
      setUnsavedChanges(unsavedChanges);
    }
  }, [
    selectedData,
    upcomingShows,
    tourDates,
    upcomingShowsData,
    tourDatesData,
  ]);

  const onSave = async () => {
    setLoading(true);

    if (selectedData === "upcomingShows") {
      // SAVE UPCOMING SHOWS
      const blob = new Blob([JSON.stringify(upcomingShows, null, 2)], {
        type: "application/json",
      });
      const file = new File([blob], "upcomingShows.json");
      await uploadFile(password, file);
    } else if (selectedData === "tourDates") {
      // SAVE TOUR DATES
      const blob = new Blob([JSON.stringify(tourDates, null, 2)], {
        type: "application/json",
      });
      const file = new File([blob], "tourDates.json");
      await uploadFile(password, file);
    }

    setLoading(false);
  };

  const renderTourDates = () => {
    return (
      <>
        {tourDates.map(({ date, city, venue, ticketLink }, index) => {
          return (
            <Fragment key={`tourDate-${index}`}>
              <input
                type="text"
                value={city}
                onChange={(event) =>
                  updateValue("tourDates", "city", event.target.value, index)
                }
              />
              <input
                type="date"
                value={toDateInput(date)}
                onChange={(event) =>
                  updateValue("tourDates", "date", event.target.value, index)
                }
              />
              <input
                type="text"
                value={venue}
                onChange={(event) =>
                  updateValue("tourDates", "venue", event.target.value, index)
                }
              />
              <input
                type="text"
                value={ticketLink}
                onChange={(event) =>
                  updateValue(
                    "tourDates",
                    "ticketLink",
                    event.target.value,
                    index
                  )
                }
              />
            </Fragment>
          );
        })}
      </>
    );
  };

  const renderUpcomingShows = () => {
    return (
      <>
        {upcomingShows.map(({ date, city, venue, ticketLink }, index) => {
          return (
            <Fragment key={`upcomingShow-${index}`}>
              <input
                type="text"
                value={city}
                onChange={(event) =>
                  updateValue(
                    "upcomingShows",
                    "city",
                    event.target.value,
                    index
                  )
                }
              />
              <input
                type="date"
                value={toDateInput(date)}
                onChange={(event) =>
                  updateValue(
                    "upcomingShows",
                    "date",
                    event.target.value,
                    index
                  )
                }
              />
              <input
                type="text"
                value={venue}
                onChange={(event) =>
                  updateValue(
                    "upcomingShows",
                    "venue",
                    event.target.value,
                    index
                  )
                }
              />
              <input
                type="text"
                value={ticketLink}
                onChange={(event) =>
                  updateValue(
                    "upcomingShows",
                    "ticketLink",
                    event.target.value,
                    index
                  )
                }
              />
            </Fragment>
          );
        })}
      </>
    );
  };

  const renderSelectedData = () => {
    switch (selectedData) {
      case "tourDates":
        return renderTourDates();
      case "upcomingShows":
        return renderUpcomingShows();
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="admin">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="header">
        <button
          className={`${selectedData === "tourDates" ? "selected" : ""}`}
          onClick={() => setSelectedData("tourDates")}
        >
          Fall Tour
        </button>
        <button
          className={`${selectedData === "upcomingShows" ? "selected" : ""}`}
          onClick={() => setSelectedData("upcomingShows")}
        >
          Upcoming Shows
        </button>
      </div>
      <div className="grid">
        <div>Date</div>
        <div>City</div>
        <div>Venue</div>
        <div>Ticket Link</div>
        {renderSelectedData()}
      </div>
      <div className="footer">
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button
          disabled={password.length === 0 || !unsavedChanges}
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
