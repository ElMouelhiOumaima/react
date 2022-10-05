import React, { Component } from 'react'

export class MyRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:''
        }
        this.mayTitle = React.createRef();
        this.myInput = React.createRef();
        console.log(this.mayTitle)
    }
   /*  update = event => {
        this.setState({
            value: event.target.value
        })
    } */
    addFocus = () =>{
        this.myInput.current.focus();

    }
    /* componentDidUpdate(prevProps, prevState) {
        this.mayTitle.current.style.color = 'red'
    }
    componentDidMount(){
        this.myInput.current.focus();
    }
    
    handleClick=()=>{
        console.log(this.myInput.current.value);
    } */
    
    render() {
        return (
            <div >
               {/* <h1 ref={this.mayTitle}> Valeur :{this.state.value}</h1>
                 <input type="text" value={this.state.value} onChange={this.update} /> */}
                <input ref={this.myInput} type="text"/>
                {/* <button  onClick={this.handleClick}> Valider </button> */}
            </div>
        )
    }
}

export default MyRef
