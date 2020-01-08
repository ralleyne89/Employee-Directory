import React, { Component } from "react";
import "./container.css"

class Container extends Component {
    
    showList(){
        console.log("it works!")
        return(<div className="alert alert-secondary" role="alert">
        Employee List
        <hr />
    <div className="employee-info"></div>
      </div>)
    }

    addEmployee(){
        console.log("it works!")
        return(<div></div>)
    }

    removeEmployee(){
        console.log("it works!")
        return(<div></div>)
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
            <a className="btn btn-success btn-lg" href="#" role="button" onClick={this.addEmployee} id="add">
              Add Employee
            </a>
            <a className="btn btn-danger btn-lg" href="#" role="button" onClick={this.removeEmployee} id="remove">
              Remove Employee
            </a>
          </div>
        );

    }
}

export default Container;
