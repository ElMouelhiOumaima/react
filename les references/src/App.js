import MyRef from './MyRef';
import './App.css';
import React,{ Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
     this.refcomponent =React.createRef();
    
  }
  handleClick =() =>{
   this.refcomponent.current.addFocus()
  }
  render()
  {return (
    <div className="App">
    <MyRef ref={this.refcomponent}/>
    <button  onClick={this.handleClick}> Valider </button>
    </div>
  );
}}

export default App;
