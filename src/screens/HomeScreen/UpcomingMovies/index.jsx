import { useEffect, useState } from "react";
import { api } from "../../../utils";
import CardList from "./CardList";

const UpcomingMovies = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.posts
      .browse({
        limit: 4,
        include: "tags,authors",
        filter: "tag:phim-sap-chieu-trang-chu",
      })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className=' mx-auto pt-24 pb-48 bg-[#f1f1f2]'>
      <div className='container'>
        <div className='text-black pb-24 uppercase text-[38px] text-center'>
          Phim sắp chiếu
        </div>
      </div>

      <CardList posts={posts} />
    </div>
  )
};

export default UpcomingMovies;
