import Slider from "./Banner"
import News from "./News"
import Services from "./Services"
import ShowTime from "./ShowTime"
import UpcomingMovies from "./UpcomingMovies"

const HomeScreen = () => {
  return (
    <>
      <Slider />
      <Services />
      <ShowTime />
      <UpcomingMovies />
      <News />
    </>
  )
}

export default HomeScreen
