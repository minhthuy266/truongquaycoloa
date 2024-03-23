import ShowTime from "../HomeScreen/ShowTime";
import PropTypes from "prop-types";

const ShowTimeScreen = ({ postShowTime }) => {
  return (
    <div className="min-h-[100vh]">
      <ShowTime postShowTime={postShowTime} />
    </div>
  );
};

export default ShowTimeScreen;

ShowTimeScreen.propTypes = {
  postShowTime: PropTypes.array.isRequired,
};
