import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image1 from "../../../assets/images/Slider1.jpg";
import Image2 from "../../../assets/images/Slider2.jpg";

const Slider = () => {
  return (
    <div className="max-w-[100vw]">
      <Swiper
        className="w-[100vw] h-[100vh]"
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <img
              src={Image1}
              alt=""
              className="w-[100vw] h-[100vh] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Image2}
              alt=""
              className="w-[100vw] h-[100vh] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
