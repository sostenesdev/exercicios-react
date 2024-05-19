import React from "react"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Produtos from "./components/repeticao/Produtos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"



let App  = (props) =>{
    return (<div className="card-list">
        <Card titulo="#10 - Comunicação Indireta" color='#F3E5AB'>
            <IndiretaPai />
        </Card>
        <Card titulo="#09 - Comunicação direta" color='#DA70D6'>
            <DiretaPai />
        </Card>
        <Card titulo="#07 - Renderização Condicional" color='#CD7F32'>
            <UsuarioInfo usuario = {{nome : "João da Silva"}}/>
            <UsuarioInfo usuario = {{email : "teste@teste.com"}}/>
            <UsuarioInfo usuario = {{nome : "José Santana"}}/>
        </Card>
        <Card titulo="#07 - Renderização Condicional" color='#F08080'>
            <ParOuImpar numero = '11' />
        </Card>
        <Card titulo="Produtos" color='#F08080'>
            <Produtos color='#F08080' />
        </Card>
        <Card titulo="#06 Repeticao" color='#9FE2BF'>
            <ListaAlunos color='#6495ED' />
        </Card>
        <Card titulo="Familia" color='#DFFF00'>
            <Familia sobrenome="Gonçalves">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Ana" />
                <FamiliaMembro nome="Maria" />    
            </Familia> 
        </Card>
        <Card titulo="Aleatório" color='#DFFF00'>
            <Aleatorio min='10' max='30' /> 
        </Card>
        <Card titulo="Primeiro" color='#FFBF00'>
            <Primeiro></Primeiro>
        </Card>

        <Card titulo="Primeiro" color='#FF7F50'>
            <ComParametro titulo="Teste"
                subtitulo="Subtitulo"
            ></ComParametro>
        </Card>
   </div>
            )
}

export default App