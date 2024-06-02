import { useCallback, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import GasManagement from "./GasManagement";


export default function UseCallbackHook() {
    const [petrol, SetPetrol] = useState(0);
    const [diesel, SetDiesel] = useState(0);

    const dieselPriceCalc = useCallback(()=>{
        return diesel*90
    }, [diesel])
    
    return(
        <div>
            <h1 className="page-title">UseCallback</h1>
            <p>Petrol - {petrol}</p>
            <button onClick={()=>SetPetrol(petrol+1)}>Add Petrol</button>

            <p>Diesel - {diesel}</p>
            <button onClick={()=>SetDiesel(diesel+1)}>Add Diesel</button>

            <GasManagement dieselPriceCalc={dieselPriceCalc}/>
        </div>
    )
}