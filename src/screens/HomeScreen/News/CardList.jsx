import Card from "./Card";
import propTypes from "prop-types";

const CardList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] gap-8">
      {posts?.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  posts: propTypes.any.isRequired,
};
