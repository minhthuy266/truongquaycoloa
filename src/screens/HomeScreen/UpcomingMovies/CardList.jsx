import Card from "./Card"
import PropTypes from "prop-types"

const CardList = ({postsUpcomingMovie}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
      {postsUpcomingMovie?.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  )
}

export default CardList

CardList.propTypes = {
  postsUpcomingMovie: PropTypes.array.isRequired,
}
