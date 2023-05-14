import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as AppNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppNavbar bg="dark" variant="dark">
                <Container>
                    <AppNavbar.Brand href="#home">Movies App</AppNavbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favlist">FavList</Nav.Link>
                    </Nav>
                </Container>
            </AppNavbar>
        </>
    )
}

export default Navbar;
