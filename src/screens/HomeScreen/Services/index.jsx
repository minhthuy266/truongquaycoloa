import CardList from "./CardList";

const Services = () => {
  return (
    <div className="container mx-auto pt-24 pb-40">
      <div className="text-black pb-24 uppercase text-[38px] text-center">
        Dịch vụ cung cấp
      </div>
      <div className="text-[38px] uppercase flex flex-row items-center mx-auto">
        <CardList />
      </div>
    </div>
  );
};

export default Services;
