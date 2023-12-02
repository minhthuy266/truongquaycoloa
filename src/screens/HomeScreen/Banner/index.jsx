import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
// import "./styles.css";

const Slider = () => {
  return (
    <div className='max-w-[100vw]'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div>
            <img
              src='http://truongquaycoloa.com/sites/default/files/857618_441963055878474_491307732_o.jpg'
              alt=''
              className='w-[100vw] h-[80vh] object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src='http://truongquaycoloa.com/sites/default/files/truongquay2.jpg'
              alt=''
              className='w-[100vw] h-[80vh] object-cover'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
