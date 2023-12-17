const newsData = [
  {
    id: 1,
    title: "Lorem Ipsum 1",
    content: "News content goes here 1",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Lorem Ipsum 2",
    content: "News content goes here 2",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    title: "Lorem Ipsum 3",
    content: "News content goes here 3",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Lorem Ipsum 4",
    content: "News content goes here 4",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Lorem Ipsum 4",
    content: "News content goes here 4",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Lorem Ipsum 4",
    content: "News content goes here 4",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Lorem Ipsum 4",
    content: "News content goes here 4",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Lorem Ipsum 4",
    content: "News content goes here 4",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Lorem Ipsum 4",
    content: "News content goes here 4",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  // Add more news items as needed
]

const NewsBox = () => {
  return (
    <div className='container mx-auto p-4 mt-[120px] pb-[60px]'>
      {/* Search bar */}
      <input
        type='text'
        placeholder='Search news...'
        className='w-full mb-20 p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 global-text-base'
      />

      {/* News grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {newsData.map((news) => (
          <div key={news.id} className='bg-white p-4 border rounded shadow'>
            {/* Image */}
            <img
              src={news.imageUrl}
              alt={`News ${news.id}`}
              className='w-full h-[260px] object-cover mb-2 rounded'
            />

            {/* Title and Content */}
            <h3 className='text-gray-600 global-text-base'>12/11/2023</h3>
            <p className='text-[#008417] text-[22px] '>{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBox
