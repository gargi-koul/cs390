import {Link} from "react-router-dom";

export function Index() {
  return (
    <div>
      <h1>Welcome to DB Track Rater!</h1>
      <div>
      <Link to="/signup">Create Account</Link>
      </div>
      <div>
      <Link to="/login">Login to create or edit reviews</Link>
      </div>
      <div>
        <Link to="/view">View Reviews</Link>
      </div>
    </div>
  );
}
