import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
