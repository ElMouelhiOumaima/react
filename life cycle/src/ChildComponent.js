import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name : 'toto',
            step : 1
             
        }
      console.log(`Je suis dans le constructor() enfant `)
    }
    componentDidMount(){
        console.log(console.log(`Etape enfant Je suis dans le did mount()`))
    }
    render() {
        console.log('Je suis dans le render () enfant' )
        return (
            <div>
                {console.log(` Je suis dans mise a jour du dom enfant`)}
                hello world!
            </div>
        )
    }
}

export default ChildComponent
