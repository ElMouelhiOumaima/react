import React from 'react';
const Toto = props => {
    /* console.log(props) */
/*  console.log(props.leState.messageMaman)  */
const btnReponseToto = props.leState.messageMaman!== null ? (<button onClick ={props.reponseToto}> reponse</button>) :(<button disabled>reponse</button>);
    return(
        <div>
           <h2>{props.name}</h2> 
          {btnReponseToto}
          <p> {props.leState.messageToto}</p>
        </div>
    )
}
export default Toto ;