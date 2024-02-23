import PropTypes from "prop-types"

const AboutScreen = ({posts}) => {
  return (
    <div className='text-black container mx-auto mt-[120px] global-text-base custom-min-height'>
      <div className='container pb-24'>
        <div dangerouslySetInnerHTML={{__html: posts[0]?.html}}></div>
      </div>
    </div>
  )
}

AboutScreen.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      html: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default AboutScreen
