import PropTypes from "prop-types";
import PrimaryButton from "../../../components/GlobalComponents/Button";

const Card = ({ card }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  console.log(card);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-[260px] object-cover"
        src={card?.feature_image}
        alt={card?.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{card?.title}</div>
        {/* <p className='text-gray-700 text-[20px]'>{description}</p> */}
        <PrimaryButton onClick={handleClick} label="Xem thêm" />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.any.isRequired,
};
