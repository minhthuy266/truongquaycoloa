import React from "react"
import PrimaryButton from "../../../components/GlobalComponents/Button"

const Card = ({title, description, image}) => {
  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <div className=''>
      <img className='w-full h-[260px] object-cover' src={image} alt={title} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base text-[20px]'>{description}</p>
        <PrimaryButton onClick={handleClick} label='Xem thêm' />
      </div>
    </div>
  )
}

export default Card
