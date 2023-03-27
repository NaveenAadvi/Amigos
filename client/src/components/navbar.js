import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function navbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="home">Amigos</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="bookAppointments">Book Doctor Appointment</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="about-us">About Us</Nav.Link>
                        <Nav.Link href="blogs">Blog</Nav.Link>
                        <Nav.Link href="locations">Locations</Nav.Link>
                        <NavDropdown title="Login" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="patient-login">Patient</NavDropdown.Item>
                            <NavDropdown.Item href="doctor-login">Doctor</NavDropdown.Item>
                            <NavDropdown.Item href="admin-login">Admin</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbar;