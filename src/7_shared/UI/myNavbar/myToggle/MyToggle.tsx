import { Nav, NavDropdown, Dropdown, Navbar } from "react-bootstrap";
import classes from "./myToggle.module.scss";
import { JSX } from "react";
export default function HeaderContent(): JSX.Element {
  return (
    <header className={classes.header}>
      <Navbar expand="md" variant="white">
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>h1</Nav.Link>
            <Nav.Link>h2</Nav.Link>
            <Nav.Link>h3</Nav.Link>
            <NavDropdown title={`asd`}>
              <Dropdown.Item>h4</Dropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
