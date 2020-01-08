import React from 'react';

const showList = (props) => {
    return(<div className="alert alert-secondary" role="alert">
    Employee List
    <hr />
<div className="employee-name">{props}</div>
  </div>)
}

export default showList;