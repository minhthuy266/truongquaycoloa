import { useEffect, useState } from "react";
import FilmsBox from "../../components/UpcomingFilmScreen/FilmsBox";
import { api } from "../../utils";

const UpcomingFilmScreen = () => {
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
    <div>
      <FilmsBox posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default UpcomingFilmScreen;
