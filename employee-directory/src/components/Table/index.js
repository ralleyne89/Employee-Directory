import React, { Component } from "react";
import TableRow from "../TableRow";
import SearchBar from "../SearchBar";
import api from "../../utils/api";
import "./style.css"



class Table extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    api.search()
      .then(res => this.setState(() => ({ result: res.data.results })))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch(search){
    return employee =>{
      return employee.name.first.toLowerCase().includes(search.toLowerCase()) || !search
    }
  }

  render() {
    const newResults = this.state.result;

    let employeesList = [];

    employeesList = newResults.filter(this.handleSearch(this.state.search)).map((e, index) => (
      <TableRow
        key={index}
        imageURL={e.picture.thumbnail}
        name={e.name.first + " " + e.name.last}
        phone={e.phone}
        email={e.email}
        DOB={e.dob}
      />
    ));

    return (
      <div className="tablecontainer">
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Team List</th>
              
            </tr>
          </thead>
          <tbody>{employeesList}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;