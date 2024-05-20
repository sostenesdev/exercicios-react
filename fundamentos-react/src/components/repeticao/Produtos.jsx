import React from "react";
import produtos from "../../dados/produtos";

export default props =>{
    const rows = produtos.map(produto =>{

        return (<tr key={produto.id}><td>{produto.id}</td><td>{produto.nome}</td><td>R$ {produto.preco.toFixed(2).replace('.',',')}</td></tr>)
    });
    
    return(
        <div>
            <table>
                <thead>
                <tr><th style={{backgroundColor: props.color || '#f00'}}>Id</th>
                    <th style={{backgroundColor: props.color || '#f00'}}>Nome</th>
                    <th style={{backgroundColor: props.color || '#f00'}}>preco</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}