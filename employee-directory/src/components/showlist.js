import React from 'react';

function showList(props){
    return(<div className="alert alert-secondary" role="alert">
    Employee List
    <hr />
<div className="employee-info">{props.info}</div>
  </div>)
}

export default showList;