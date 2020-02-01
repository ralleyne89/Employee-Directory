import React from 'react';
import Employee from '../employee';
import './style.css';


function SearchBar(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search an Employee"
            value={props.search}
            onChange={props.handleSearch}
            name="search"
            list="names"
          />
        </div>
        <div className="col-sm-4">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={props.searchEmail}
            onChange={props.handleEmailChange}
            name="email"
          />
        </div>
        <div className="col-sm-4">
          <select
            className="form-control"
            value={props.selectRole}
            onChange={props.handleRoleChange}
            name="roleselect"
            placeholder="Select a Role"
          >
            <option>Manager</option>
            <option>Engineer</option>
            <option>Intern</option>
          </select>
        </div>
        <div className="col-sm">
          <input
            className="btn"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
