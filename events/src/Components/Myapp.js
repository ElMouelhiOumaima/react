import React, {Component} from 'react';
import Voiture from './Voiture';

class Myapp extends Component{
    nonCopy = () => {
        alert('pas copie')
    }
    /*
    <h1 onMouseOver= {this.addStyle}> {this.props.title} </h1>addStyle = (e) =>{ 

         
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled')
        }
        else{
            e.target.classList.add('styled')
        }
        <h1 onMouseOver={this.addStyle}> {this.props.title} </h1>
    }*/

    render(){
        return(
            <div>
                <h1 > {this.props.title} </h1>
                <p onCopy={this.nonCopy}> ouma 9wiya barsha </p>
                <Voiture color="red"> Ford </Voiture>
                
                <Voiture color="black"></Voiture>
                
                <Voiture > Peaugeot </Voiture>
                
               
              
            </div>
        );
    }
} 
export default Myapp;