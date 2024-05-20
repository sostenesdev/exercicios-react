import React from "react";

export default props =>{
    return ( <div>
        <div>Filho</div>
        <div>
            <button onClick={
                function(e){
                    props.quandoClicar("João",53)
                }
            }>
                Fornecer informações</button>
        </div>
    </div> )
}