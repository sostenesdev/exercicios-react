import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props =>{
    const [clicou, setClicou] = useState(false)
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)

    function fornecerInformacoes(nome, idade){
        setClicou(true);
        setNome(nome);
        setIdade(idade);
        console.log({nome: nome, idade: idade})
    }
    return ( <div>
        {clicou?
        <div> Nome: {nome} Idade: {idade} </div>:
        <></>    
    }
        <IndiretaFilho quandoClicar ={fornecerInformacoes} ></IndiretaFilho>
    </div> )
}