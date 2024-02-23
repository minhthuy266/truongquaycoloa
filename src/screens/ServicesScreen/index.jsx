import PropTypes from 'prop-types';
import Services from "../HomeScreen/Services"

const ServicesScreen = ({postsService}) => {
  return (
    <div className='min-h-[100vh] mt-48'>
      <Services postsService={postsService}/>
    </div>
  )
}

ServicesScreen.propTypes = {
  postsService: PropTypes.array.isRequired
};

export default ServicesScreen
