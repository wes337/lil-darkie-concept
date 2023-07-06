import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Landing from "./routes/landing";
import UpcomingShows from "./routes/upcoming-shows";
import FallTour from "./routes/fall-tour";
import Gallery from "./routes/gallery";
import Posters from "./routes/posters";
import Art from "./routes/art";
import Writing from "./routes/writing";
import TheLostSongs from "./routes/the-lost-songs";
import Admin from "./routes/admin";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/upcoming-shows",
        element: <UpcomingShows />,
      },
      {
        path: "/fall-tour",
        element: <FallTour />,
      },
      {
        path: "/posters",
        element: <Posters />,
      },
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/writing",
        element: <Writing />,
      },
      {
        path: "/the-lost-songs",
        element: <TheLostSongs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
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
