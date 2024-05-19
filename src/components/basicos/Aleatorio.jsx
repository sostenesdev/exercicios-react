import React from "react"
let Aleatorio = props =>{
    console.log(props)
    const min = parseInt(props.min)
    const max = parseInt(props.max)
    const aleat = parseInt(Math.random() * (max - min)) + min;
        return <React.Fragment>
            <h2>Min: {min}</h2>
            <h2>Max: {max}</h2>
            <h2>Aleatorio: {aleat}</h2>
        </React.Fragment>
}

export default Aleatorio