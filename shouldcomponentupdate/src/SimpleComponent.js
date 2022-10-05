import React, { Component } from 'react'

export class SimpleComponent extends Component {
    render() {
        console.log('%c render enfant', 'color:blue;')
        return (
            <div>
                bonjour
            </div>
        )
    }
}

export default SimpleComponent
