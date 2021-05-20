import React from "react";
import { Link } from "react-router-dom";

const Marks = () => {
  return (
    <div>
      <Link className="landing-buttons" to="/">
        Back to home page
      </Link>
      <div className="marks">Marks</div>
    </div>
  );
};

export default Marks;
