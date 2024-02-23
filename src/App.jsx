import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
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
import { api } from "./utils";

export function App() {

  /* ----------------------------------- *** ---------------------------------- */
  const [postsAbout, setPostsAbout] = useState([])

  useEffect(() => {
    api.posts
      .browse({
        limit: 4,
        include: "tags,authors",
        filter: "tag:gioi-thieu",
      })
      .then((posts) => {
        setPostsAbout(posts)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

/* ----------------------------------- *** ---------------------------------- */
  const [postsService, setPostsService] = useState([]);

  useEffect(() => {
    api.posts
      .browse({
        include: "tags,authors",
        filter: "tag:dich-vu",
      })
      .then((posts) => {
        setPostsService(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  /* ----------------------------------- *** ---------------------------------- */
  const [postsUpcomingMovie, setPostsUpcomingMovie] = useState([]);

  useEffect(() => {
    api.posts
      .browse({
        limit: 4,
        include: "tags,authors",
        filter: "tag:phim-sap-chieu-trang-chu",
      })
      .then((posts) => {
        setPostsUpcomingMovie(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

/* ----------------------------------- *** ---------------------------------- */
const [postsNewsHome, setPostsNewsHome] = useState([]);

useEffect(() => {
  api.posts
    .browse({
      limit: 4,
      include: "tags,authors",
      filter: "tag:tin-tuc-trang-chu",
    })
    .then((posts) => {
      setPostsNewsHome(posts);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);


/* ----------------------------------- *** ---------------------------------- */
const [postShowTime, setPostShowTime] = useState([]);


useEffect(() => {
  api.posts
    .browse({
      limit: 4,
      include: "tags,authors",
      filter: "tag:lich-chieu-phim",
    })
    .then((posts) => {
      setPostShowTime(posts);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <HomeScreen
            postsService={postsService}
            postsUpcomingMovie={postsUpcomingMovie}
            postsNewsHome={postsNewsHome}
            postShowTime={postShowTime}
          />
        </MainLayout>
      ),
    },

    {
      path: "/gioi-thieu",
      element: (
        <MainLayout>
          <AboutScreen posts={postsAbout} />
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
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

