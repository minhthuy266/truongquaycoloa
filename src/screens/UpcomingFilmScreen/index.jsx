import UpcomingMovies from "../HomeScreen/UpcomingMovies";
import PropTypes from "prop-types";

const UpcomingFilmScreen = ({ postsUpcomingMovie }) => {
  return (
    <div className="mt-40">
      <UpcomingMovies postsUpcomingMovie={postsUpcomingMovie} />
    </div>
  );
};

export default UpcomingFilmScreen;

UpcomingFilmScreen.propTypes = {
  postsUpcomingMovie: PropTypes.array.isRequired,
};
