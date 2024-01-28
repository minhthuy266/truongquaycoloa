import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeAccents } from "../../../utils";

const FilmsBox = ({ posts }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(posts);

  useEffect(() => {
    setResults(posts);
  }, [posts]);

  const handleChange = (e) => {
    setKeyword(e.target.value);

    const results = posts.filter(
      (el) =>
        el.title
          .toLowerCase()
          .includes(
            e.target.value.toLowerCase().trim().replace(/\s\s+/g, " ")
          ) ||
        removeAccents(el.title)
          .toLowerCase()
          .includes(
            removeAccents(
              e.target.value.toLowerCase().trim().replace(/\s\s+/g, " ")
            )
          )
    );

    setResults(results);
  };

  return (
    <div className="container mx-auto p-4 mt-48 pb-72">
      <input
        value={keyword}
        onChange={handleChange}
        type="text"
        placeholder="Tìm kiếm phim..."
        className="w-full mb-20 p-2 border border-gray-300 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 global-text-base"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {results.map((news) => (
          <Link to={`/tin-tuc/${news.id}`} key={news.id}>
            <div
              key={news.id}
              className="bg-white p-4 border rounded shadow h-[500px]"
            >
              <img
                src={news.feature_image}
                alt={`News ${news.title}`}
                className="w-full h-[260px] object-cover mb-2 rounded"
              />

              <h3 className="text-gray-600 global-text-base">12/11/2023</h3>
              <div className="text-[#008417] text-[22px] line-clamp-3 clamp-3 h-[100px]">
                {news.title}
              </div>
              <div className="overflow-hidden">
                <p className="line-clamp-3 clamp-3 text-black global-text-base">
                  {news.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilmsBox;

FilmsBox.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};
