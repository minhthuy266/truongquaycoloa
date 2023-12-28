import Card from "./Card";
import Image1 from "../../../assets/images/DichVu_TruongQuayNgoaiCanh.jpg";
import Image2 from "../../../assets/images/DichVu_TrangPhucDaoCu.jpg";
import Image3 from "../../../assets/images/DichVu_ThietBiLamPhim.jpg";
import Image4 from "../../../assets/images/DichVu_TruongQuayNoi.jpg";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Card 1",
    description: "TRƯỜNG QUAY NGOẠI CẢNH",
    image: Image1,
    url: "/dich-vu/truong-quay-ngoai-canh",
  },
  {
    title: "Card 2",
    description: "TRANG PHỤC - ĐẠO CỤ",
    image: Image2,
    url: "/dich-vu/trang-phuc-dao-cu",
  },
  {
    title: "Card 3",
    description: "THIẾT BỊ LÀM PHIM",
    image: Image3,
    url: "/dich-vu/thiet-bi-lam-phim",
  },
  {
    title: "Card 4",
    description: "TRƯỜNG QUAY NỘI",
    image: Image4,
    url: "/dich-vu/truong-quay-noi",
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] gap-8">
      {cardData.map((card, index) => (
        <Link to={card.url} key={index}>
          <Card key={index} {...card} />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
