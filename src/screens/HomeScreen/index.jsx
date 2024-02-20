import Slider from "./Banner";
import News from "./News";
import Services from "./Services";
import ShowTime from "./ShowTime";
import UpcomingMovies from "./UpcomingMovies";

const HomeScreen = () => {
  return (
    <>
      <Slider />
      <Services />
      <UpcomingMovies />
      <News />
      <ShowTime />
    </>
  );
};

export default HomeScreen;
