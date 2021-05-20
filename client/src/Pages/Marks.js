import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addMarks } from "../actions/marks";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Marks = ({ addMarks }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    maths: "",
    physics: "",
    chemistry: "",
  });

  const { name, rollNo, maths, physics, chemistry } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addMarks({ name, rollNo, maths, physics, chemistry });
  };

  return (
    <div>
      <Link className="landing-buttons" to="/">
        Back to home page
      </Link>
      <div className="marks">
        <h1 className="large text-primary">Enter your marks</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Roll No."
              name="rollNo"
              value={rollNo}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Maths (Out of 100)"
              name="maths"
              value={maths}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Physics (Out of 100)"
              name="physics"
              value={physics}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Chemistry (Out of 100)"
              name="chemistry"
              value={chemistry}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Add Marks" />
        </form>
        <p className="my-1">
          <Link to="/leaderboard">View Leaderboard</Link>
        </p>
      </div>
    </div>
  );
};

Marks.propTypes = {
  addMarks: PropTypes.func.isRequired,
};

export default connect({ addMarks })(Marks);
