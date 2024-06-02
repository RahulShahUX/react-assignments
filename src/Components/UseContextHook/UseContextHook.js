import { useContext, useState } from "react";
import { Button, Row } from "react-bootstrap";
import AppContext from "./AppContext";
import ContextCard from "./ContextCard";

export default function UseContextHook() {
    const cardContext = useContext(AppContext);
    const [data, setData] = useState([]);
    const apiUrl = "https://jsonplaceholder.typicode.com/comments";
    if (data.length == 0) {
        fetch(apiUrl)
            .then((rawData) => {
                return rawData.json();
            })
            .then((jsonData) => {
                return setData(jsonData);
            })
    }
    return (
        <>
            <h1 className="page-title">UseContext</h1>
            <AppContext.Provider value={data} >
                <Row>
                    <ContextCard />
                </Row>
            </AppContext.Provider>


        </>
    )
}