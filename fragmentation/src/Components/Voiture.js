import React from 'react';

const Voiture = ({children,color,year}) => {

    const colorInfo = color ? (   ` couleur : ${color}`) : ('couleur: néant') ;
    if (children) {
        return(
            <td>
                <tr> marque : {children}</tr>
                <tr> age : {year} </tr>
                <tr>{ colorInfo}</tr>
          </td>
           );
    }
    else {
        return null ;
    }


    
}
export default Voiture;