import React from "react";
import If, {Else} from "./if";

export default props =>{
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo(a), <strong>{props.usuario.nome}</strong>
                <Else>
                    <div>
                        Faça login!!!
                    </div>
                </Else>
            </If>
        </div>
    )
}