import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const pages = ['UseState', 'UseEffect', 'UseContext', "UseReducer", "UseRef", "UseMemo", "UseCallback", "CustomHook"];

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Nav className="me-auto">
                    {pages.map((page, index) => (
                        <NavLink
                            key={index}
                            className="nav-link"
                            to={page.toLowerCase()}
                        >
                            {page}
                        </NavLink>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
}