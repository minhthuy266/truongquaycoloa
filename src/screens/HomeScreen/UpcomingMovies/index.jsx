import { useState, useEffect } from "react";
import CardList from "./CardList"
import { api } from "../../../utils";


const UpcomingMovies = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.posts
      .browse({ limit: 4, include: "tags,authors", filter: "tag:phim-sap-chieu-trang-chu"})
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='container mx-auto pb-8'>
      <div className='text-black p-8 uppercase text-[38px] text-center'>
        Phim sắp chiếu
      </div>

      <CardList posts={posts}/>
    </div>
  )
}

export default UpcomingMovies
