import PropTypes from "prop-types"
import {useLocation} from "react-router-dom"
import "swiper/css"

const ShowTime = ({postShowTime}) => {
  const history = useLocation()

  return (
    <div
      className={`text-black pt-24 pb-40 overflow-x-scroll ${
        history.pathname === "/lich-chieu-phim" ? "mt-40" : "bg-[#f1f1f2]"
      }`}>
      <div className='text-[38px] text-center pb-24'>LỊCH CHIẾU PHIM</div>

      <div className='max-w-[100vw]'>
        <div className='container flex justify-center mx-auto'>
          <div
            dangerouslySetInnerHTML={{__html: postShowTime?.[0]?.html}}
            className='text-black'
          />
        </div>
      </div>
    </div>
  )
}

export default ShowTime

ShowTime.propTypes = {
  postShowTime: PropTypes.array.isRequired,
}
