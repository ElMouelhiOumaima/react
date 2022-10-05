import React, {Component} from 'react';
import Voiture from './Voiture';

class Myapp extends Component{
    state = {
        voitures : [{name: 'Ford', color :'Red',year:'2000'},
        {name: 'Mercedes', color :'black',year:'2010'},
        {name: 'Peugeot', color :'Green',year:'2018'}
    ],
    titre :'Mon catalogue Voiture 2'
    }
    addTenyears =  ()=>{
      const updatedstate = this.state.voitures.map((param)=>{ return param.year -=10
    })
    this.setState({
        updatedstate
    })
    }
   
    render(){
        const year = new Date().getFullYear();
        return(
            <div>
                <h1 > {this.state.titre} </h1>
               {/* <Voiture color={this.state.voitures[0].color}  year={year -this.state.voitures[0].year +'ans'}> {this.state.voitures[0].name} </Voiture>--> */}

                
                
               <button onClick={this.addTenyears}> +10 ans</button>
              {
                this.state.voitures.map((voiture,index) =>{
                    return(
                        <div key ={index}>
                        <Voiture color={voiture.color} year={year -voiture.year +'ans'}>{voiture.name}</Voiture>
                   </div> )
                })
              }
            </div>
        );
    }
} 
export default Myapp;