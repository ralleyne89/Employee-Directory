import React, { Component, useState, useEffect } from "react";
import api from '../utils/api'
import Table from '../components/Table'
import Row from './TableRow'
import NavBar from '../components/NavBar'

class Employee extends Component{
  state = {
    result: [],
    search: '',
  };
  componentDidMount() {
    api
      .search()
      .then(res => this.setState(() => ({result: res.data.results})))
      .catch(err => console.log(err));
  }
  
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  };
  
  handleSearch(search) {
    return employee => {
      return employee.first.name.toLowerCase().includes(search.toLowerCase()) || !search
    }
  }

}


export default Employee;
