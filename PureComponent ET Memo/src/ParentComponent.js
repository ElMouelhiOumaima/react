import React, { Component } from 'react'
import SimpleComponent from './SimpleComponent'
import Purecomp from './Purecomponent'
import FunctionComp from './FunctionComp'
export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name :'SpiderMan'
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate() decide false par defaut')
       /*  console.log('je suis dans shouldComponentUpdate ')
        console.log(this.state.name);
        console.log(nextState);*/
        ///fazet return false kanet true ema moshkla lhkeyaa hata kan tbdel bbatman yab9a y3wed f hkyet kima y3ml render barsha maraet w hiya zayda khater fared data 
        /* if(this.state.name!== nextState.name){
             return true ;
        } */
        return true; 
       
    }
    changeToBatman =()=>{
        this.setState({
            name : 'SpiderMan'
        })
    }
    render() {
        console.log('%c RENDER PARENT ','color :red;')
        return (
            <div>
                <p>
                    <span className="red"> Parent Component: </span>
                    {this.state.name}
                </p>
                <SimpleComponent name={this.state.name}/>
                <Purecomp  name={this.state.name}/>
                <FunctionComp name={this.state.name}/>
                <button onClick = {this.changeToBatman}> Changer en BATTman</button>
            </div>
        )
    }
}

export default ParentComponent
