import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Userbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className='mr-5 pr-5 m-0'>MAKAWASCO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='pr-5'>Home</Nav.Link>
            <Nav.Link href="/about" className='pr-5'>About Us</Nav.Link>
            <NavDropdown title="Customer Service" id="collasible-nav-dropdown" className='pr-5'>
              <NavDropdown.Item href="/selfserviceportal">Self Service Portal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Payment Methods
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Report a complaint</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Careers
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Work With Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tenders
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Signup
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Userbar