import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function UseEffectHook() {
    const [data, setData] = useState([])

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    useEffect(()=>{
        console.log("use effect");
        fetch(apiUrl)
        .then((rawData) => {
            return rawData.json();
        })
        .then((jsonData) => {
            return setData(jsonData);
        })
    },[])
    
    const posts = data.map((item) => {
        return (
            <Col key={item.id} sm={3} style={{marginBottom: "1.5rem"}}>
                <Card style={{height: "100%"}}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (
        <>
            <h1 className="page-title">UseEffect</h1>
            <Row>
                {posts}
            </Row>
        </>
    )
}