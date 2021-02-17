import React from 'react';


export default class Titulo extends React.Component{

    componentWillUnmount(){
        console.log("Se ejecuto componentWillUnmount y se destruira el titulo");
    }

    render(){
        return(
            <h1 {...this.props}>{this.props.txt}</h1>
        )
    }
}