import './App.css';
import React,{ Component } from 'react';
import Mycomponent from  './MyComponent'


class App extends Component {
  state={
    age : 27
  }
  addOneYear = () =>{
    this.setState((prevState)=>({
      age : prevState.age +1
    }))
  }
  render()
 {
    return (
    <div className="App">
     <Mycomponent age={this.state.age}/>
     <button onClick={this.addOneYear}>changer le props </button>
    </div>
  );
}}

export default App;
