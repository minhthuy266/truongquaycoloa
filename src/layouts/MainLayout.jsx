import Footer from "../components/Footer"
import ScrollToTop from "../components/GlobalComponents/ScrollToTop"
import Header from "../components/Header"
import propTypes from "prop-types"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default MainLayout

MainLayout.propTypes = {
  children: propTypes.node.isRequired,
}