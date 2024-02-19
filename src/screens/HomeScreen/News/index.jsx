import CardList from "./CardList";
import { api } from "../../../utils";
import { useState, useEffect } from "react";

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.posts
      .browse({
        limit: 4,
        include: "tags,authors",
        filter: "tag:tin-tuc-trang-chu",
      })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="bg-[#f1f1f2]">
      <div className="container mx-auto pt-24 pb-72">
        <div className="text-black pb-24 uppercase text-[38px] text-center">
          Tin tức
        </div>
        <div className="text-[38px] uppercase flex flex-row items-center mx-auto">
          <CardList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default News;
