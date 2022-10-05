import React, { Component } from 'react'
/* import ChildComponent from './ChildComponent'
 */
export class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : 'toto',
            step : 1
             
        }
      console.log(`Etape ${this.state.step}: Je suis dans le constructor()`)
    }
    componentDidMount(){
        console.log(console.log(`Etape ${this.state.step}: Je suis dans le did mount()`))
         this.setState({
             name:  this.props.name,
             step:  this.state.step +1
         })
         console.log(console.log(`Etape ${this.state.step}: setState() a changé le state dans le did mount()`))
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`Etape ${this.state.step}: Je suis dans did update ()`)
        console.log(prevState);
        console.log(this.state)

    }
    componentWillUnmount() {
        console.log('je suis dans component will unmont')
    }
    
    render() {
        console.log(`Etape ${this.state.step}: Je suis dans le render ()`)
        return (
            <div className="borderBox">
             {console.log(`Etape ${this.state.step}: Je suis dans mise a jour du dom`)}   
             <p> changement : {this.state.step}</p>
             <p> {this.state.name}</p>
             {/* <ChildComponent/> */}
            </div>
        )
    }

}

export default LifeCycle
