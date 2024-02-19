import { useParams } from "react-router-dom";
import { api } from "../../utils";
import { useEffect, useState } from "react";

const ServiceDetailScreen = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const getPostById = async (postId) => {
    try {
      const post = await api.posts.read({
        id: postId,
        include: "tags,authors",
      });
      setPost(post);
      return post;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  };

  useEffect(() => {
    getPostById(slug);
  }, [slug]);

  return (
    <div className="text-black container mx-auto mt-[120px] global-text-base custom-min-height pb-24">
      <div className="text-[32px] text-bold mb-8">{post?.title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: post?.html }}
        className="text-black"
      />
    </div>
  );
};

export default ServiceDetailScreen;
