import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import CustomLogic from "./CustomLogic";

export default function CustomHook(props) {

    const products = [
        { name: "product 1", qty: 1 },
        { name: "product 2", qty: 2 },
        { name: "product 3", qty: 3 },
    ]




    return (
        <>
            <h1 className="page-title">Custom Hook</h1>
            {products.map((item, index) => {
                const [qty, increaseQty, decreaseQty] = CustomLogic(item.qty)
                return (
                    <Card body key={index} className="mb-2">
                        <Card.Title>{item.name}</Card.Title>
                        <div className="counter">
                            <Button variant="danger" onClick={() => decreaseQty()} disabled={qty == 0}>
                                <img src="images/minus.svg" alt="minus" className="counter-icn" />
                            </Button>
                            <span className="count-text">{qty}</span>
                            <Button variant="success">
                                <img src="images/plus.svg" onClick={() => increaseQty()} alt="plus" className="counter-icn" />
                            </Button>
                        </div>
                    </Card>
                )
            })}


        </>
    )
}