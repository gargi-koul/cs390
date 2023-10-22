import {useState} from "react";
import {Link} from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  const [date, setDate] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({title, content, date});
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
        <Link to="/view">Check out your blog post</Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
        <textarea
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
