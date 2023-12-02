// CardList.js
import React from "react"
import Card from "./Card"

const cardData = [
  {
    title: "Video 1",
    videoId: "your_youtube_video_id_1",
  },
  {
    title: "Video 2",
    videoId: "your_youtube_video_id_2",
  },
  {
    title: "Video 3",
    videoId: "your_youtube_video_id_3",
  },
  {
    title: "Video 4",
    videoId: "your_youtube_video_id_4",
  },
]

const CardList = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} videoId={card.videoId} />
      ))}
    </div>
  )
}

export default CardList
