import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Landing from "./routes/landing";
import UpcomingShows from "./routes/upcoming-shows";
import FallTour from "./routes/fall-tour";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/upcoming-shows",
        element: <UpcomingShows />,
      },
      {
        path: "/fall-tour",
        element: <FallTour />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
