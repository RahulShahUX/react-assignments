import { useState } from "react"

export default function CustomLogic(initialQty) {
    const [qty, setQty] = useState(initialQty)
    const increaseQty = () => {
        setQty(qty + 1)
    }
    const decreaseQty = () => {

        setQty(qty - 1)

    }
    return [qty, increaseQty, decreaseQty]
}