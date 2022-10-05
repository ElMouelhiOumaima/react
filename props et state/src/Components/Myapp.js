import React, {Component} from 'react';
import Voiture from './Voiture';

class Myapp extends Component{
    render(){
        console.log(this)
        return(
            <div>
                <h1> {this.props.title} </h1>
                <Voiture color="red"> Ford </Voiture>
                
                <Voiture color="black"></Voiture>
                
                <Voiture > Peaugeot </Voiture>
                
               
              
            </div>
        );
    }
} 
export default Myapp;