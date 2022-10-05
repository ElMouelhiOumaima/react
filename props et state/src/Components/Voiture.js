import React from 'react';

const Voiture = ({children,color}) => {

    const colorInfo = color ? (   <p> couleur : {color}</p>) : (<p> couleur: néan </p>) ;
    if (children) {
        return(
            <div style={{ backgroundColor:'pink', width :'500px', padding: '10px', margin:'5px auto'
            }}>
                <p> marque : {children}</p>
                 { colorInfo}
            </div>
           );
    }
    else {
        return (
            <div style={{ backgroundColor:'pink', width :'500px', padding: '10px', margin:'5px auto'
            }}>
             <p> pas de data ! </p>
            </div>
        );
    }


    
}
export default Voiture;