import { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function UseRefHook() {
    const [output, setOutput] = useState(null)
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const formSubmit = (e) => {
        e.preventDefault();
        setOutput(firstNameRef.current.value + " " + lastNameRef.current.value)
    }
    

    console.log(firstNameRef.current.value + "" + lastNameRef.current.value)
    return (
        <>
            <Card body style={{ width: "40%" }}>
                <h1 className="page-title">UseRef</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" ref={firstNameRef} />
                        {firstNameRef.current.value == "" &&
                            <Form.Text className="text-danger">
                                First name is required
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" ref={lastNameRef} />
                        {lastNameRef.current.value == "" &&
                            <Form.Text className="text-danger">
                                Last name is required
                            </Form.Text>
                        }
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={formSubmit}>
                        Submit
                    </Button>

                    {output != null && <p>{output}</p>}
                </Form>
            </Card>
        </>
    )
}