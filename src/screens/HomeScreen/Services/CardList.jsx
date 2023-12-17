import Card from "./Card";

const cardData = [
  {
    title: "Card 1",
    description: "TRƯỜNG QUAY NGOẠI CẢNH",
    image: "http://truongquaycoloa.com/sites/default/files/tong%20the-PA2.jpg",
  },
  {
    title: "Card 2",
    description: "TRANG PHỤC - ĐẠO CỤ",
    image:
      "http://truongquaycoloa.com/sites/default/files/M%C5%A9%20quan%20v%C4%83n%20%282%29.JPG",
  },
  {
    title: "Card 3",
    description: "THIẾT BỊ LÀM PHIM",
    image:
      "http://truongquaycoloa.com/sites/default/files/Sony%20fs%20700%20%282%29_0.JPG",
  },
  {
    title: "Card 4",
    description: "TRƯỜNG QUAY NỘI",
    image:
      "http://truongquaycoloa.com/sites/default/files/styles/sp_n_i_b_t/public/anh%20truong%20quay_0.jpg?itok=RMFCn6St",
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] gap-8">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
