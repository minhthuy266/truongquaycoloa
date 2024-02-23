import CardList from "./CardList";

import PropTypes from 'prop-types';

const Services = ({ postsService }) => {
  return (
    <div className="container mx-auto pt-24 pb-40">
      <div className="text-black pb-24 uppercase text-[38px] text-center">
        Dịch vụ cung cấp
      </div>
      <div className="text-[38px] uppercase flex flex-row items-center mx-auto">
        <CardList postsService={postsService} />
      </div>
    </div>
  );
};

Services.propTypes = {
  postsService: PropTypes.array.isRequired,
};


export default Services;
