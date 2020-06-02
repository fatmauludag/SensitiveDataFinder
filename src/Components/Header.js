import React from 'react';
import { NavDropdown, Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Header = (props) => {
    let history = useHistory();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />  
                </Navbar.Brand>
                <Nav className="mr-auto" activeKey="/home" onSelect={selectedKey => history.push(selectedKey)}>
                    <Nav.Link eventKey="/Homem">Home</Nav.Link>
                    <Nav.Link eventKey="/personalData">personalData</Nav.Link>
                    <Nav.Link eventKey="/LookUp">LookUp</Nav.Link>
                    <NavDropdown title="Operations" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="/action/3.1">Choose Your Table</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="/action/3.4">Send Feedback</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar >

        </>
    );
}
export default Header;