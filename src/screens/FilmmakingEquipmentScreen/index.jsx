import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import Image0 from "../../assets/images/ThietBiLamPhim_0.jpg";
import Image1 from "../../assets/images/ThietBiLamPhim_1.jpg";
import Image2 from "../../assets/images/ThietBiLamPhim_2.jpg";
import Image3 from "../../assets/images/ThietBiLamPhim_3.jpg";
import Image4 from "../../assets/images/ThietBiLamPhim_4.jpg";
import Image5 from "../../assets/images/ThietBiLamPhim_5.jpg";
import Image6 from "../../assets/images/ThietBiLamPhim_6.jpg";
import Image7 from "../../assets/images/ThietBiLamPhim_7.jpg";

const FilmmakingEquipmentScreen = () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image1}
              alt=""
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image2}
              alt=""
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image3}
              alt=""
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image4}
              alt=""
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image5}
              alt=""
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image6}
              alt=""
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image7}
              alt=""
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={Image0}
              alt=""
              className="w-full h-[90vh] object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FilmmakingEquipmentScreen;
