import Slider from "./Banner";
import News from "./News";
import Services from "./Services";
import ShowTime from "./ShowTime";
import UpcomingMovies from "./UpcomingMovies";

import PropTypes from 'prop-types';

const HomeScreen = ({ postsService, postsUpcomingMovie, postsNewsHome, postShowTime }) => {
  return (
    <>
      <Slider />
      <Services postsService={postsService}  />
      <UpcomingMovies postsUpcomingMovie={postsUpcomingMovie} />
      <News postsNewsHome={postsNewsHome}/>
      <ShowTime postShowTime={postShowTime}/>
    </>
  );
};

HomeScreen.propTypes = {
  postsService: PropTypes.object.isRequired,
  postsUpcomingMovie: PropTypes.object.isRequired,
  postsNewsHome: PropTypes.object.isRequired,
  postShowTime: PropTypes.object.isRequired,

};

export default HomeScreen;
