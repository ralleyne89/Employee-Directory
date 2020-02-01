import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import NavBar from './components/NavBar';
import Table from './components/Table'
import Row from './components/TableRow'



function App() {
  return (
    <div>
      <NavBar/>
      <Jumbotron/>
      <SearchBar/>
      <Table>
      <Row/>

      </Table>

    </div>

    );
  }
  
  export default App;
  
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>