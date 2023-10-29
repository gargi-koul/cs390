import {useState} from "react";
import {Link} from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({title, content, date, rating});
    const headers = {"content-type": "application/json"};
    fetch("http://localhost:3000/blog/create-post", {method:"post", body:requestData,headers})
    .then(() => {
      setDone(true);
    });
    console.log(requestData);
  }

  if (done) {
    return (
      <div>
        <Link to="/view">Check out your review!</Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Review</h1>
      <div></div>
      <input
        placeholder="Add your movie title here"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
      <p>Rating 1-5</p>
      <input
  type="number"
  min="1"
  max="5"
  value={rating}
  onChange={(e) => setRating(e.currentTarget.value)}

></input>
      </div>
      <div>
        <textarea
          placeholder="Review"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        ></input>
      </div>
      <button>Post</button>
    </form>
  );
}
