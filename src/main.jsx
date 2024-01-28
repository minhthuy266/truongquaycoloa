import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./post-feed.css";
import "./single-post.css";
import "./animations.css";
import "./portal.css";
import "./kg.css";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import ServicesScreen from "./screens/ServicesScreen";
import UpcomingFilmScreen from "./screens/UpcomingFilmScreen";
import ShowTimeScreen from "./screens/ShowTimeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import OutDoorScreen from "./screens/OutDoorScreen";
import CostumeAndPropsScreen from "./screens/CostumeAndPropsScreen";
import FilmmakingEquipmentScreen from "./screens/FilmmakingEquipmentScreen";
import InDoorScreen from "./screens/InDoorScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import VideoScreen from "./screens/VideoScreen";

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
    path: "/dich-vu/truong-quay-ngoai-canh",
    element: (
      <MainLayout>
        <OutDoorScreen />
      </MainLayout>
    ),
  },

  {
    path: "/dich-vu/trang-phuc-dao-cu",
    element: (
      <MainLayout>
        <CostumeAndPropsScreen />
      </MainLayout>
    ),
  },

  {
    path: "/dich-vu/thiet-bi-lam-phim",
    element: (
      <MainLayout>
        <FilmmakingEquipmentScreen />
      </MainLayout>
    ),
  },

  {
    path: "/dich-vu/truong-quay-noi",
    element: (
      <MainLayout>
        <InDoorScreen />
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
