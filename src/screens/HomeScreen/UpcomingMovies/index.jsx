import PropTypes from "prop-types"
import CardList from "./CardList"

const UpcomingMovies = ({postsUpcomingMovie}) => {
  return (
    <div className=' mx-auto pt-24 pb-48 bg-[#f1f1f2]'>
      <div className='text-black pb-24 uppercase text-[38px] text-center'>
        Phim sắp chiếu
      </div>

      <div className='container'>
        <CardList postsUpcomingMovie={postsUpcomingMovie} />
      </div>
    </div>
  )
}

export default UpcomingMovies

UpcomingMovies.propTypes = {
  postsUpcomingMovie: PropTypes.array.isRequired,
}
