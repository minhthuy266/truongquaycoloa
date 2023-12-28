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
import OutDoorScreen from "./screens/OutDoorScreen";
import CostumeAndPropsScreen from "./screens/CostumeAndPropsScreen";

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
    path: "/tin-tuc",
    element: (
      <MainLayout>
        <NewsScreen />
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
