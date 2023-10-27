import {Link} from "react-router-dom";

export function Index() {
  return (
    <div>
      <h1>Welcome to ScreenScore!</h1>
      <div>
        <Link to="/create">Create Review</Link>
      </div>
      <div>
        <Link to="/view">View Reviews</Link>
      </div>
    </div>
  );
}
