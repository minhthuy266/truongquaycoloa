import PrimaryButton from "../../../components/GlobalComponents/Button";
import PropTypes from "prop-types";

const Card = ({ card }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="shadow-lg">
      <img
        className="w-full h-[260px] object-cover"
        src={card?.feature_image}
        alt={card?.title}
      />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-[20px]">{card?.title}</p>
        <PrimaryButton onClick={handleClick} label="Xem thêm" />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: {
    feature_image: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired,
  },
};
