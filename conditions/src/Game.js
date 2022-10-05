import React , {Component} from 'react'

class Result extends Component{
    state= {
        name : "Mario", 
        winner: true
    }
   /*  render () {

        let result ;
        if (this.state.winner){
            result= <h1> Bravo {this.state.name} </h1>
              
            

        } 
        else {
            result= <h1>raté </h1>
               
           

        }
        return result;
        
    }
 */
render(){
    return this.state.winner ?<h1> Bravo {this.state.name} </h1> :<h1> raté {this.state.name} </h1>  
        
   
}
}
export default Result;