import PropTypes from "prop-types"
import CardList from "./CardList"

const News = ({postsNewsHome}) => {
  return (
    <div>
      <div className='container mx-auto pt-24 pb-72'>
        <div className='text-black pb-24 uppercase text-[3.375rem] text-center'>
          Tin tức
        </div>
        <div className='text-[3.375rem] uppercase flex flex-row items-center mx-auto'>
          <CardList postsNewsHome={postsNewsHome} />
        </div>
      </div>
    </div>
  )
}

export default News

News.propTypes = {
  postsNewsHome: PropTypes.array.isRequired,
}
