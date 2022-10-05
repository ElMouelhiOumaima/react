import React from 'react';

const Voiture = ({children,color,year}) => {

    const colorInfo = color ? (   <p> couleur : {color}</p>) : (<p> couleur: néant </p>) ;
    if (children) {
        return(
            <div style={{ backgroundColor:'pink', width :'500px', padding: '10px', margin:'5px auto'
            }}>
                <p> marque : {children}</p>
                <p> age : {year} </p>
                 { colorInfo}
            </div>
           );
    }
    else {
        return null ;
    }


    
}
export default Voiture;