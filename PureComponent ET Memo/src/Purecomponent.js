import React, { Component,PureComponent } from 'react'

export class Purecomp extends PureComponent {
    render() {
        console.log('%c render du PureComponent enfant', 'color:green;')
        
        return (
            <div>
              <p>
                  <span className="green" > PureComponent: </span>
              {this.props.name}
              </p>
            </div>
        )
    }
}

export default Purecomp
