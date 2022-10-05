import React, { Component } from 'react'

export class Mycomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'SpiderMan'
        }
        console.log('je suis dans le constructeur')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps lancée','color : red; background: yellow;font-size:15px;')
        console.log(props);
        console.log(state);
        return null ;
    }
    forcerchangement=()=>{
        this.forceUpdate(()=>{
            console.log('je force le changement ')
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('je suis dans shouldComponentUpdate')
        return true ;
    }
    
    render() 
    {   console.log("je suuis dans le render")
        return (
            <div>
               <p> nom : {this.state.name}</p>
               <p> age : {this.props.age} </p>
               <button onClick={this.forcerchangement}> Forcer </button>
            </div>
        );
    }
}

export default Mycomponent
