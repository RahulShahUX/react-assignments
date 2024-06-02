import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

function myValueCalc() {
    const myArray = new Array(1_00_00_000).fill(1);
    const answer = myArray.map((el, index)=>{
        return el*5
    })   
    // console.log("answer", answer)
    return answer[0]
}

export default function UseMemoHook() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const myNumber = useMemo(()=>myValueCalc(),[x])
    return(
        <div>
            <h1 className="page-title">UseMemo</h1>
            <p>my Number - {myNumber}</p>
            <p>X value is - {x}</p>
            <button onClick={()=>{setX(x+1)}}>Increment X</button>

            <p>Y value is - {y}</p>
            <button onClick={()=>{setY(y+1)}}>Increment Y</button>
        </div>
    )
}