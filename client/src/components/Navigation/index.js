import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Google Books</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to='/search'>Search</Nav.Link>
      <Nav.Link as={Link} to='/'>Saved</Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigation;
