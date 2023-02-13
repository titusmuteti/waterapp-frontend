import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Userbar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="green" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <p>Call us: 0712 345 567  </p>
        <p> email:makawasco@gmail.com </p>
      </Container>
    </Navbar>
  )
}

export default Userbar