import React, {Component,Fragment} from 'react';
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
            <>
                <h1 > {this.state.titre} </h1>
                
               <button onClick={this.addTenyears}> +10 ans</button>
             <table>
                 <tr>
              <th> Marque</th>
              <th>Age  </th>
              <th> Couleur </th>
              </tr>
          
              {
                this.state.voitures.map((voiture,index) =>{
                    return(
                        <Fragment key ={index}>
                        <Voiture color={voiture.color} year={voiture.year +'ans'}>{voiture.name}</Voiture>
                   </Fragment> )
                })
              }
                 </table>
            </>
        );
    }
} 
export default Myapp;