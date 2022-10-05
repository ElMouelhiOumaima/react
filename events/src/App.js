import React , {Component} from 'react';
import './App.css';
import Myapp from './Components/Myapp';

class App  extends Component {
  state = {
    titre : 'Mon catlogue voitures'
  }
  changetitle =(e)=>{
    console.log(e.target)
    this.setState({
      titre:'mon nouveau titre'
    })
  }
  changeviaparam = (titre) =>{
    this.setState({
      titre : titre 
    })
  }
changeviaBind = (param) =>{
  this.setState({
    titre : param 
  })
}
changeviainput = (e) => {
 this.setState({
   titre:e.target.value
  })
}
  render() {
    return (
      <div className="App">
        
        <Myapp title ={this.state.titre}/>
        <button onClick={this.changetitle}>changer le nom en dur</button>
        <button onClick={()=>this.changeviaparam('titre via un parametre')}>changer le nom en passant param </button>
        <button onClick={this.changeviaBind.bind(this,'titre via Bind')}>changer le nom via bind  </button>
        <input type="text" onChange={this.changeviainput} value = {this.state.titre}/>
      </div>
    );

  }
  
}

export default App;
