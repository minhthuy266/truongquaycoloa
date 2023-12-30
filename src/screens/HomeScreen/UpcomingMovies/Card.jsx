import PropTypes from "prop-types";

const Card = ({ card }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div
        dangerouslySetInnerHTML={{ __html: card.html }}
        className="h-[400px]"
      />

      <div className="px-6 py-4">
        <h3 className="text-gray-600 global-text-base">
          {new Date(card?.created_at).toLocaleString()}
        </h3>
        <div className="font-bold mb-2 text-[#008417] text-[20px] uppercase pt-2 pb-2 line-clamp-3 clamp-3">
          {card?.title}
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.any.isRequired,
};
