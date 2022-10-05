import React , {Component} from 'react';
import './App.css';
import Myapp from './Components/Myapp';

class App  extends Component {
  state = {
    titre : 'Mon catlogue voitures'
  }
  render() {
    return (
      <div className="App">
        
        <Myapp title ={this.state.titre}/>
     

      </div>
    );

  }
  
}

export default App;
