import CardList from "./CardList"

const News = () => {
  return (
    <div className='container mx-auto pt-16 pb-16'>
      <div className='text-black p-8 uppercase text-[38px] text-center'>
        Tin tức
      </div>
      <div className='text-[38px] uppercase flex flex-row items-center mx-auto'>
        <CardList />
      </div>
    </div>
  )
}

export default News
