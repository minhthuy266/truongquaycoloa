import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../utils";
import Card from "./Card";

const CardList = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api.posts
      .browse({
        include: "tags,authors",
        filter: "tag:dich-vu",
      })
      .then((posts) => {
        setPost(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] gap-8">
      {post.map((card, index) => (
        <Link to={`/dich-vu/${card.id}`} key={index}>
          <Card key={index} card={card} />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
