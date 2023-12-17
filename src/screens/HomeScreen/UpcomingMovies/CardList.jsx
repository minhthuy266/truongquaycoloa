import Card from "./Card"

const CardList = ({posts}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
      {posts?.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  )
}

export default CardList
