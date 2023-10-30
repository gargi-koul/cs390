import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

export function View() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/blog/");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        {posts.map((post) => (
          <div
            key={post.id} // Add a unique key for each post if available
            style={{
              border: "2px solid",
              width: "50vw",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: "0.2rem" }}>{post.title}</h2>
            <div>Professor: {post.prof}</div>
            <div>Rating: {post.rating}/5</div>
            <div>Difficulty: {post.diff}/5</div>
            <div>Reccomend? {post.recc}</div>

            <div>Review: {post.content}</div>
            
            {/* <div>Date of Review: {moment(post.date).format('MM/DD/YY')}</div> Format the date using moment.js */}
          </div>
        ))}
      </div>
    </div>
  );
}
