import React, { Component } from 'react'






class Users extends Component {
    render (){
      /*  console.log(this.props.age) */ 
       const {name,age} =this.props ;
        return(
            <div>
                <p>chanteur :{name}{age} </p>
            </div>
        )
    }
}
 /*const Users = props => {
     console.log(props)
      const name = props.name;
     const age= props.age ; 
   
     console.log(name,age); 
     const {name , age}= props ;
     return (
         <div>
           
          <p> Chanteur :</p>
         </div>
     )
 }*/
 export default Users;