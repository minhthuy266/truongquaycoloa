import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import ServicesScreen from "./screens/ServicesScreen";
import UpcomingFilmScreen from "./screens/UpcomingFilmScreen";
import ShowTimeScreen from "./screens/ShowTimeScreen";
import GalleryScreen from "./screens/GalleryScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomeScreen />
      </MainLayout>
    ),
  },

  {
    path: "/about",
    element: (
      <MainLayout>
        <AboutScreen />
      </MainLayout>
    ),
  },

  {
    path: "/news",
    element: (
      <MainLayout>
        <NewsScreen />
      </MainLayout>
    ),
  },

  {
    path: "/services",
    element: (
      <MainLayout>
        <ServicesScreen />
      </MainLayout>
    ),
  },

  {
    path: "/news",
    element: (
      <MainLayout>
        <NewsScreen />
      </MainLayout>
    ),
  },
  {
    path: "/upcoming-films",
    element: (
      <MainLayout>
        <UpcomingFilmScreen />
      </MainLayout>
    ),
  },
  {
    path: "/showtime",
    element: (
      <MainLayout>
        <ShowTimeScreen />
      </MainLayout>
    ),
  },
  {
    path: "/gallery",
    element: (
      <MainLayout>
        <GalleryScreen />
      </MainLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
