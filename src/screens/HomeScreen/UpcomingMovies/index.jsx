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
    <div className="container mx-auto pt-40 pb-48">
      <div className="text-black pb-16 uppercase text-[38px] text-center">
        Phim sắp chiếu
      </div>

      <CardList posts={posts} />
    </div>
  );
};

export default UpcomingMovies;
