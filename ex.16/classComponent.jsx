import React, { Component } from 'react'

export default class ClassComponent extends Component {
    
    constructor(props) {
        //Método super() é necessário
        super(props)
        // Todo componente tem um state
        this.state = { value: props.initialValue }
    }

    sum(delta) {
        // setState o estado nunca é alterado mas é evoluido
        this.setState({ value: this.state.value + delta })
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}