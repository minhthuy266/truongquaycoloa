import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./animations.css";
import "./index.css";
import "./kg.css";
import MainLayout from "./layouts/MainLayout";
import "./portal.css";
import "./post-feed.css";
import AboutScreen from "./screens/AboutScreen";
import GalleryScreen from "./screens/GalleryScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import NewsScreen from "./screens/NewsScreen";
import ServiceDetailScreen from "./screens/ServiceDetailScreen";
import ServicesScreen from "./screens/ServicesScreen";
import ShowTimeScreen from "./screens/ShowTimeScreen";
import UpcomingFilmScreen from "./screens/UpcomingFilmScreen";
import VideoScreen from "./screens/VideoScreen";
import "./single-post.css";

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
    path: "/gioi-thieu",
    element: (
      <MainLayout>
        <AboutScreen />
      </MainLayout>
    ),
  },

  {
    path: "/tin-tuc",
    element: (
      <MainLayout>
        <NewsScreen />
      </MainLayout>
    ),
  },

  {
    path: "/dich-vu",
    element: (
      <MainLayout>
        <ServicesScreen />
      </MainLayout>
    ),
  },

  {
    path: "/tin-tuc",
    element: (
      <MainLayout>
        <NewsScreen />
      </MainLayout>
    ),
  },

  {
    path: "/tin-tuc/:slug",
    element: (
      <MainLayout>
        <NewsDetailScreen />
      </MainLayout>
    ),
  },

  {
    path: "/dich-vu/:slug",
    element: (
      <MainLayout>
        <ServiceDetailScreen />
      </MainLayout>
    ),
  },

  {
    path: "/phim-sap-chieu",
    element: (
      <MainLayout>
        <UpcomingFilmScreen />
      </MainLayout>
    ),
  },
  {
    path: "/lich-chieu-phim",
    element: (
      <MainLayout>
        <ShowTimeScreen />
      </MainLayout>
    ),
  },
  {
    path: "/gallery/images",
    element: (
      <MainLayout>
        <GalleryScreen />
      </MainLayout>
    ),
  },
  {
    path: "/gallery/videos",
    element: (
      <MainLayout>
        <VideoScreen />
      </MainLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
