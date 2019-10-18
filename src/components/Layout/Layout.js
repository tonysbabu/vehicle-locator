import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import Avatar from '../Utils/Avatar';
import user from '../../images/user.svg';

function layout(props) {

 const handleLogout = () => {
     localStorage.removeItem('loggedIn');
     props.history.push('/')
 }   

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Vehicle Locator</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard" active={props.location.pathname === '/dashboard'}>Dashboard</Nav.Link>
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <NavDropdown title={ <Avatar size="small" image={user}/>} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
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
