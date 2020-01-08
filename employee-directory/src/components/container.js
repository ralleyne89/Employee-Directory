import React, { Component } from "react";
import "./container.css"
import showList from "./showlist"

class Container extends Component {
    
    showList(){
        console.log("it works!")
        return(<div className="alert alert-secondary" role="alert">
        Employee List
        <hr />
    <div className="employee-info"></div>
      </div>)
    }

    render() {
        return (
          <div className="jumbotron">
            <h1 className="display-4">Directory</h1>
            <p className="lead">
              A directory created for employee management using React
            </p>
            <hr className="my-4" />
            <p>
              Select an option to get started!
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.showList} id="view">
              View Employees
            </a>
            <a className="btn btn-success btn-lg" href="#" role="button">
              Add Employee
            </a>
            <a className="btn btn-danger btn-lg" href="#" role="button">
              Remove Employee
            </a>
          </div>
        );

    }
}

export default Container;
