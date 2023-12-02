import CardList from "./CardList"

const UpcomingMovies = () => {
  return (
    <div className='container mx-auto pb-8'>
      <div className='text-black p-8 uppercase text-[38px] text-center'>
        Phim sắp chiếu
      </div>

      <CardList />
    </div>
  )
}

export default UpcomingMovies
