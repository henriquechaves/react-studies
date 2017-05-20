import React, { Component } from 'react'

//Componente baseado em classe
export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}