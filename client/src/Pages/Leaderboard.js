import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMarks } from "../actions/marks";
import { Link } from "react-router-dom";

const Leaderboard = ({ getMarks, marks: { marks, loading } }) => {
  useEffect(() => {
    //So that all the data is already filled as soon as the page loads
    getMarks();
  }, [getMarks]);
  return (
    <div>
      <Link className="landing-buttons" to="/">
        Back to home page
      </Link>
      <div className="leaderboard">Leaderboard</div>
    </div>
  );
};

Leaderboard.propTypes = {
  getMarks: PropTypes.func.isRequired,
  marks: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ marks: state.marks });

export default connect(mapStateToProps, { getMarks })(Leaderboard);
