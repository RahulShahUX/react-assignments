import React from "react"

const GasManagement = React.memo((props)=> {
    console.log("Rendered")
    return(
        <p>Diesel Price - {props.dieselPriceCalc()}</p>
    )
})

export default GasManagement;