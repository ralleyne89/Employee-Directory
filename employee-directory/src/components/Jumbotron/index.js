import React, { Component, useState } from "react";
import '../employee'
import "./style.css";
import Employee from "../employee";

const EmployeesList = () => {
  const [list, setList] = useState([
    {
      firstname: "John",
      lastname: "Doe",
      role: "Drifter"
    }
  ]);
  
  return (
    <div>
      {list.map(employee => (
        <li>{list.firstname}</li>
      ))}
    </div>
  );
};

// Rewrite as a functional component

class Jumbotron extends Component {
  showList() {
    console.log("it works!");
    return (
      <div className="alert alert-secondary" role="alert">
        Employee List
        <hr />
        <div className="employee-info"></div>
      </div>
    );
  }

  addEmployee() {
    console.log("it works!");
    return <div></div>;
  }

  removeEmployee() {
    console.log("it works!");
    return <div></div>;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Directory</h1>
        <p className="lead">
          A directory created for employee management using React
        </p>
        <hr className="my-4" />
        <p>Select an option to get started!</p>
        
      </div>
    );
  }
}

export default Jumbotron;
