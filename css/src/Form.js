import React , {Component} from 'react';
import styled from 'styled-components';
const Title =  styled.h1`
color:red;
font-size:80px
`
const Button = styled.button `
background-color:black;
color:#ffffff
padding : 13px 12px;
font-size: 15 px 
`
/* import MyHead from './myHeaderOne'
import styles from './myCss.module.css'
import './myCss.css' */
  const titreRouge  = {
    fontSize :'50px',
    color :'red'}
  class Form extends Component {
      render(){
          /* const myClass =this.props.head ? 'blue' :'red' */
         return( 
         <div>
           {/* <h1 style ={titreRouge}> Commentaire</h1> 
              <h1 className="blue">Commentaire</h1> 
              
               <p className={`${myClass} bigfont`} >je suis oumaima blue ou rouge </p>  
                <h1 className={styles.green}> Commentaire2</h1> 
             
                <MyHead></MyHead> 
               
               <p className="red">Je suis oumaima </p>  */}
               <Title>Commentaire 1</Title>
              <button className="btn btn-danger"> Valider </button>
               <Button> Valider 2 </Button>
              </div>
         );
      }
  }
  export default Form;