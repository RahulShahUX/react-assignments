import { useState } from "react";
import { Button } from "react-bootstrap";

export default function UseStateHook() {
    const [count, setCount] = useState(0)
    const countIncrement = () => {
        setCount(count + 1)
    }
    const countDecrement = () => {
        setCount(count - 1)
    }
    return(
        <>
        <h1 className="page-title">UseState</h1>
        <div className="counter">
            <Button variant="danger" onClick={countDecrement} disabled={count==0}>
                <img src="images/minus.svg" alt="minus" className="counter-icn"/>
            </Button>
            <span className="count-text">{count}</span>
            <Button variant="success" onClick={countIncrement}>
                <img src="images/plus.svg" alt="plus" className="counter-icn"/>
            </Button>
        </div>
        </>
    )
}