import React from 'react'
//// nafs hkyet pure ema juste hathi function 
function FunctionComp (props){
    console.log('%c render du FunctionComponent ', 'color:purple;')
    return(
        <div>
            <p>
                  <span className="purple" > FunctionComponent: </span>
              {props.name}
              </p>
        </div>
    )
}

export default React.memo(FunctionComp);