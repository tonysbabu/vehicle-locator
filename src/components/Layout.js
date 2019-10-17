import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { withRouter } from 'react-router-dom';

function layout(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => props.history.push('/')}>Sign Out</NavDropdown.Item>
      </NavDropdown>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      <Container fluid bsPrefix="content-container">
      {props.children}
      </Container>
      <footer className="footer"></footer>
    </>
  );
}
export default withRouter(layout);
