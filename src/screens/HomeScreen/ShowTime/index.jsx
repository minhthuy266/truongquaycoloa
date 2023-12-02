import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

const ShowTime = () => {
  return (
    <div
      className='text-black w-[100vw] h-[80vh] bg-no-repeat p-4'
      style={{
        backgroundImage:
          "url('http://truongquaycoloa.com/sites/all/themes/midnight/imgs/bg_lichchieu.jpg')",
        backgroundSize: "cover",
      }}>
      <div className='text-[38px] text-white text-center p-4 font-bold'>
        LỊCH CHIẾU PHIM
      </div>

      <div className='max-w-[100vw]'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide className='flex justify-center'>
            <div className='container'>
              <img
                src='http://truongquaycoloa.com/sites/default/files/LCP%2025.10-29.10.jpg'
                alt=''
                className='w-[100%] h-[65vh] object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center'>
            <div className='container'>
              <img
                src='http://truongquaycoloa.com/sites/default/files/LCP%2025.10-29.10.jpg'
                alt=''
                className='w-[100%] h-[65vh] object-contain'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ShowTime
