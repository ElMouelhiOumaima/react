import './App.css';
import React,{ Component } from 'react';
import Modal from './Modal'
/* import MyComponent from './Mycomponent' */
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal :false
    }
  }
  handleShow =()=>{
    this.setState({
      showModal : true 
    })
  }
  handleHide =()=>{
      this.setState({
        showModal : false 
      })
    }
  render()
  { ///const modal = this.state.showModal  ? (<Modal/>) :null ;
    const modal = this.state.showModal  && <Modal close={this.handleHide}/>  
    return (
    <div className="App">
     {/* <MyComponent/> */}
     <button onClick={this.handleShow}> Afficher le Modal </button>
     {modal}
    </div>
  );
}}

export default App;
