import LifeCycle from './LifeCycle'
import './App.css';
import React,{ Component } from 'react';

class App extends Component {
  state ={
    display : true 
  }
  effacerOuAfiicher=() =>{
    /* if(this.state.display){
      this.setState({
        display: :false;
      })
    }
   else {
     this.setState({
       display : true ;
     })

   } */
   this.setState({
     display: !this.state.display
   })
  }
  render()
  {   const showComponent = this.state.display ? (<LifeCycle name="toto2"/>) :(<div></div>)
    return (
    <div className="App">
      {/* <LifeCycle name="toto2"/>  */}
     {showComponent}
     <button onClick={this.effacerOuAfiicher}> cliquez ici</button>
    </div>
  );
}}

export default App;
