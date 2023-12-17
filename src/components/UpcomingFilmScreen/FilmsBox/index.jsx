import { useState, useEffect } from "react";
import { api } from "../../../utils";
  
  const FilmsBox = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      api.posts
        .browse({ include: "tags,authors", filter: "tag:phim-sap-chieu" })
        .then((posts) => {
          setPosts(posts);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  

    return (
      <div className="container mx-auto p-4 mt-[120px] pb-[60px]">
      <input
        type="text"
        placeholder="Search news..."
        className="w-full mb-20 p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 global-text-base"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {posts.map((news) => (
          <div key={news.id} className="bg-white p-4 border rounded shadow">
            <img
              src={news.feature_image}
              alt={`News ${news.title}`}
              className="w-full h-[260px] object-cover mb-2 rounded"
            />

            <h3 className="text-gray-600 global-text-base">12/11/2023</h3>
            <div className="text-[#008417] text-[22px]">{news.title}</div>
            <div className="overflow-hidden">
              <p className="line-clamp-3 clamp-3 text-black global-text-base">
                {news.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  
  export default FilmsBox
  