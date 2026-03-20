import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState();
  const [searchId, setSearchId] = useState(id);

  function onSearch() {
    fetchPost(searchId);
  }

  async function fetchPost(userId) {
    setLoading(true);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`,
    );
    setPost(data);
    setLoading(false);
  }

  function onSearchKeyPress(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="post__search">
        <button onClick={() => navigate("/")}>← Back</button>
        <div className="post__search--container">
          <label className="post__search--label">Search by Id</label>
          <input
            type="number"
            value={searchId}
            onChange={(event) => setSearchId(event.target.value)}
            onKeyPress={(event) => onSearchKeyPress(event.key)}
          />
          <button onClick={() => onSearch()}>Enter</button>
        </div>
      </div>

      {loading
        ? new Array(10).fill(0).map((_, index) => (
            <div className="post" key={index}>
              <div className="post__title">
                <div className="post__title--skeleton"></div>
              </div>
              <div className="post__body">
                <p className="post__body--skeleton"></p>
              </div>
            </div>
          ))
        : post.map((post) => (
            <div className="post" key={post.id}>
              <div className="post__title">{post.title}</div>
              <p className="post__body">{post.body}</p>
            </div>
          ))}
    </>
  );
};

export default Post;
