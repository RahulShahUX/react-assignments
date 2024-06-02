import { useEffect, useReducer, useState } from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";

export default function UseReducerHook() {
    const initialState = {
        petrol: 0,
        diesel: 0,
        cng: 0
    }
    const reducerCalc = (state, action) => {
        switch(action){
            case "ADD_PETROL":
                return {...state, petrol: state.petrol + 1}
            case "REDUCE_PETROL":
                if(state.petrol != 0) {
                    return {...state, petrol: state.petrol - 1}
                }
                else {
                    return {...state}
                }
            case "ADD_DIESEL":
                return {...state, diesel: state.diesel + 1}
            default:
                return state
        }
    }
    const [currentState, sendAction] = useReducer(reducerCalc, initialState)
    return (
        <ListGroup>
            <ListGroup.Item>
                Petrol
                <Badge className="mx-2" bg="primary" pill>
                    {currentState.petrol}
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
                Diesel
                <Badge className="mx-2" bg="primary" pill>
                    {currentState.diesel}
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
                CNG
                <Badge className="mx-2" bg="primary" pill>
                    {currentState.cng}
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button variant="primary" onClick={()=>sendAction("ADD_PETROL")}>Add Petrol</Button>
                <Button variant="primary" className="mx-2" onClick={()=>sendAction("REDUCE_PETROL")}>Reduce Petrol</Button>
                <Button variant="primary" onClick={()=>sendAction("ADD_DIESEL")}>Add Diesel</Button>
            </ListGroup.Item>
        </ListGroup>
    )
}