// Card.js
import React from "react"

const Card = ({title, videoId}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className='bg-white p-4 rounded-lg shadow-md h-[320px]'>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          title={title}
          src={embedUrl}
          className='w-full h-[320px] rounded-lg'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
      <div className='mt-4'>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </div>
  )
}

export default Card
