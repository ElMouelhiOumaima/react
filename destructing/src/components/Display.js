import React, { Component } from 'react'
import Users from './Singers'
class Display extends Component{
    render(){
        return(
        <div>
            <h1> Musiciens </h1>
            <Users name="Eric " age="60"/>
            <Users name="jimi " age="27"/>
            <Users name="david " age="73"/>
            <Users name="carlos " age="71"/>
            
        </div>
        )
    }

}
export default Display ;