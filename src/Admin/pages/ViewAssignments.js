import React from "react";
import { Link } from "react-router-dom";
import AdminAssignments from "./AdminAssignments";
import AdminNavBar from "../NavBar/AdminNavBar";
import AssignmentsListed from "../components/AssignmentsListed";
import Button from "react-bootstrap/Button";

export default class ViewAssignments extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.match.params);
    const input = this.props.match.params.module;
    return (
      <div>
        <AdminNavBar />
        <div style={{ paddingLeft: "20px", paddingTop: "30px" }}>
          <Link to="/AdminAssignments">
            <Button variant="secondary" style={{ backgroundColor: "#1A1A1B" }}>
              Back to Assignment page
            </Button>
          </Link>
        </div>
        <br />

        <div className="col s12 m6 l6" style={{ backgroundColor: "#1A1A1B" }}>
          <AssignmentsListed input={input} />
        </div>
      </div>
    );
  }
}
