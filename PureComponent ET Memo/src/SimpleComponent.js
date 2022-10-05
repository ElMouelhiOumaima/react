import React, { Component } from 'react'

export class SimpleComponent extends Component {


    render() {
        console.log('%c render enfant', 'color:blue;')
        
        
        return (
            <div>
               <p>
                   <span className="blue"> Simple Component:</span>
                   {this.props.name}
               </p>
            </div>
        )
    }
}

export default SimpleComponent
