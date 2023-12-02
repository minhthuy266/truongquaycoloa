import ReactDOM from "react-dom/client"
import * as React from "react"
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomeScreen from "./screens/HomeScreen"
import "./index.css"
import AboutScreen from "./screens/AboutScreen"
import NewsScreen from "./screens/NewsScreen"
import ServicesScreen from "./screens/ServicesScreen"
// import 'swiper/css/swiper.css';

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
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route element={<AboutScreen />} />
        </Route>
      </Routes>
    ),
  },

  {
    path: "/news",
    element: (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route element={<NewsScreen />} />
        </Route>
      </Routes>
    ),
  },

  {
    path: "/services",
    element: (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route element={<ServicesScreen />} />
        </Route>
      </Routes>
    ),
  },

  {
    path: "/news",
    element: (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route element={<NewsScreen />} />
        </Route>
      </Routes>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
