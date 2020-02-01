import React, { Component } from 'react';
import api from '../../utils/api'
import './style.css';


class Table extends Component {
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
      return employee.first.name
    }
  }

  render(){
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src="" alt="" />
          </div>
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
  }


export default Table;
