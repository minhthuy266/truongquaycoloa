import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import Image1 from "../../assets/images/TrangPhucDaoCu_AoHoanBao.jpg";
import Image2 from "../../assets/images/TrangPhucDaoCu_BoGiapTuong.jpg";
import Image3 from "../../assets/images/TrangPhucDaoCu_BoGiapTuongTruoc.jpg";
import Image4 from "../../assets/images/TrangPhucDaoCu_HaiDamHoangHau.jpg";
import Image5 from "../../assets/images/TrangPhucDaoCu_MuQuanVan.jpg";
import Image6 from "../../assets/images/TrangPhucDaoCu_MuVuaThietTrieu.jpg";
import Image7 from "../../assets/images/TrangPhucDaoCu_ThuongQuan1.jpg";
import Image8 from "../../assets/images/TrangPhucDaoCu_VayCongChuaBe.jpg";

const CostumeAndPropsScreen = () => {
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
              src={Image8}
              alt=""
              className="w-full h-[90vh] object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CostumeAndPropsScreen;
