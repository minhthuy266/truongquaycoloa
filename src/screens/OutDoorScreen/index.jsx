import Image from "../../assets/images/DichVu_TruongQuayNgoaiCanh.jpg";

const OutDoorScreen = () => {
  return (
    <div className="container mx-auto p-4 mt-[120px] pb-[60px]">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tUs97PFMAm4"
        title="TRUONG QUAY CO LOA THIE DUONG DIEN ANH"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <img
        src={Image}
        alt="TRUONG QUAY NGOAI CANH"
        className="w-full object-cover mb-2 mt-16 rounded border border-gray-300"
      />
    </div>
  );
};

export default OutDoorScreen;
