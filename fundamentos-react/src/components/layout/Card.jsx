import './Card.css'
import React from "react";


const Card = props =>{
    const cardStyle = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00',
    }

    return <div className='card' style={cardStyle}>
        <div className='card-title'><strong>{props.titulo}</strong></div>
        <div className='card-body'>{props.children}</div>
    </div>
}


export default Card