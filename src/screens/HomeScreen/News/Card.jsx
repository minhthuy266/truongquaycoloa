import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <Link to={`/tin-tuc/${card.id}`} key={card.id}>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-[260px] object-cover"
          src={card?.feature_image}
          alt={card?.title}
        />
        <div className="px-6 py-4">
          <h3 className="text-gray-600 global-text-base">
            {new Date(card?.created_at).toLocaleString()}
          </h3>
          <div className="font-bold mb-2 text-[#008417] text-[20px] h-[100px] pt-2 pb-2 line-clamp-3 clamp-3">
            {card?.title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.any.isRequired,
};
