import React from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  return (
    <div>
      <Link className="landing-buttons" to="/">
        Back to home page
      </Link>
      <div className="leaderboard">Leaderboard</div>
    </div>
  );
};
export default Leaderboard;
