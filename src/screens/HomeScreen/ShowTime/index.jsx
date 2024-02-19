import { useEffect, useState } from "react";
import "swiper/css";
import { api } from "../../../utils";
import { useLocation } from "react-router-dom";

const ShowTime = () => {
  const [post, setPost] = useState([]);

  const history = useLocation();

  useEffect(() => {
    api.posts
      .browse({
        limit: 4,
        include: "tags,authors",
        filter: "tag:lich-chieu-phim",
      })
      .then((posts) => {
        setPost(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div
      className={`text-black pt-24 pb-40 overflow-x-scroll ${
        history.pathname === "/lich-chieu-phim" ? "mt-40" : "bg-[#f1f1f2]"
      }`}
    >
      <div className="text-[38px] text-center pb-24">LỊCH CHIẾU PHIM</div>

      <div className="max-w-[100vw]">
        <div className="container flex justify-center mx-auto">
          <div
            dangerouslySetInnerHTML={{ __html: post?.[0]?.html }}
            className="text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
