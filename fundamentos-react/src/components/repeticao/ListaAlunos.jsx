import React from "react";
import alunos from "../../dados/alunos";

export default props =>{
    const row = <tr> <td>{alunos[0].id}</td><td>{alunos[0].nome}</td><td>{alunos[0].nota}</td></tr>
    const rows = alunos.map(aluno =>{

        return (<tr key={aluno.id}><td>{aluno.id}</td><td>{aluno.nome}</td><td>{aluno.nota}</td></tr>)
    });
    
    return(
        <div>
            <table>
                <thead>
                <tr><th style={{backgroundColor: props.color || '#f00'}}>Id</th>
                    <th style={{backgroundColor: props.color || '#f00'}}>Nome</th>
                    <th style={{backgroundColor: props.color || '#f00'}}>Nota</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}