import React,{Component} from "react";

export default class Contador extends Component{

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1
    }

    inc = ()=>{
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = ()=>{
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (e) =>{
        this.setState({passo: +e.target.value})
    }


    render(){
        return(
            <div>
                <h2>Contador</h2>
                <input value={this.passo} onChange={this.setPasso} />
                <p>Valor: {this.state.numero}</p>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}