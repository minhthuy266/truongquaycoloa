import { useEffect, useState } from "react";
import NewsBox from "../../components/NewsScreenComponents/NewsBox";
import { api } from "../../utils";

const NewsScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.posts
      .browse({ include: "tags,authors", filter: "tag:tin-tuc-trang-chu" })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <NewsBox posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default NewsScreen;
