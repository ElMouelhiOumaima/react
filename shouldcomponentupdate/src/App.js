import ParentComponent from './ParentComponent';
import './App.css';
import React,{ Component } from 'react';

class App extends Component {
  
  render()
  {return (
    <div className="App">
    <ParentComponent/>
    </div>
  );
}}

export default App;
