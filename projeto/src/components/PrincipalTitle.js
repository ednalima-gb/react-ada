//Usando componentes do ciclo de vida do React --> constructor e render

import React, { Component } from "react";

class PrincipalTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Churrascômetro'
        };
    }
    
    render() {
        return (
            <div className="container">
                <h1>{this.state.nome}</h1>
            </div>
        );
    }
}

export default PrincipalTitle;

