import PropTypes from "prop-types"

const PrimaryButton = ({onClick, label}) => {
  return (
    <button
      onClick={onClick}
      className='bg-[#6BAAB1] hover:bg-#89c8f1 text-white py-2 px-4 rounded global-text-base'>
      {label}
    </button>
  )
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default PrimaryButton
