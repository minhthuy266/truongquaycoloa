import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image1 from "../../../assets/images/Slider1.jpg";
import Image2 from "../../../assets/images/Slider2.jpg";

const Slider = () => {
  return (
    <div className="max-w-[100vw]">
      <Swiper
        className="w-[100vw] h-[80vh]"
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div style={{ backgroundImage: Image1 }}>
            <img
              src={Image1}
              alt=""
              className="w-[100vw] h-[80vh] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Image2}
              alt=""
              className="w-[100vw] h-[80vh] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
