// ExampleButton.js
import React from "react"

const ExampleButton = ({onClick, label}) => {
  return (
    <button
      onClick={onClick}
      className='bg-[#6BAAB1] hover:bg-#89c8f1 text-white py-2 px-4 rounded global-text-base'>
      {label}
    </button>
  )
}

export default ExampleButton
