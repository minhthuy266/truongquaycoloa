import { Link } from "react-router-dom";
import Card from "./Card";

import PropTypes from "prop-types";

const CardList = ({ postsService }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] gap-8">
      {postsService?.map((card, index) => (
        <Link to={`/dich-vu/${card.id}`} key={index}>
          <Card key={index} card={card} />
        </Link>
      ))}
    </div>
  );
};

CardList.propTypes = {
  postsService: PropTypes.array.isRequired,
};


export default CardList;
