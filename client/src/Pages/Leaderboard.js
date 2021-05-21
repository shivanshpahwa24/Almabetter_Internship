import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMarks } from "../actions/marks";
import { DataGrid } from "@material-ui/data-grid";

const Leaderboard = ({ getMarks, marks: { users } }) => {
  useEffect(() => {
    //So that all the data is already filled as soon as the page loads
    getMarks();
  }, [getMarks]);
  return (
    <div className="leaderboard">
      <div style={{ width: "100%" }}>
        <DataGrid
          columns={[
            { field: "name", headerName: "Name" },
            { field: "rollNo", headerName: "Roll No." },
            { field: "maths", headerName: "Maths" },
            { field: "physics", headerName: "Physics" },
            { field: "chemistry", headerName: "Chemistry" },
            { field: "total", headerName: "Total" },
            { field: "percentage", headerName: "Percentage" },
          ]}
          rows={users}
          autoHeight
          disableColumnMenu
          sortModel={[
            {
              field: "percentage",
              sort: "desc",
            },
          ]}
          hideFooter={true}
        />
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  getMarks: PropTypes.func.isRequired,
  marks: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ marks: state.marks });

export default connect(mapStateToProps, { getMarks })(Leaderboard);
