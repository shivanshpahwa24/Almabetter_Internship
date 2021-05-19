import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <Link className="landing-buttons" to="marks">
        Enter Marks
      </Link>
      <Link className="landing-buttons" to="leaderboard">
        View Leaderboard
      </Link>
    </div>
  );
};

export default Landing;
