import { useContext } from "react";
import AppContext from "./AppContext";
import { Col, Card } from "react-bootstrap";

export default function ContextCard() {
    const contextData = useContext(AppContext);
    return (
        contextData.map((item) => {
            return (
                <Col key={item.id} sm={3} style={{ marginBottom: "1.5rem" }}>
                    <Card style={{ height: "100%" }}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    )
}