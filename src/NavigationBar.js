import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import { Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap";

import Chervenak from "./Chervenak";
import DanielSpiegel from "./DanielSpiegel";

export default function NavigationBar() {
  return (
    <div>
      <Router>
        <div>
          {/* <Navbar bg="light" expand={false}>
            <Container fluid>
              <Navbar.Brand href="#">Menu</Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to={"/Chervenak"}>
                      Chervenak et al, 1984
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/DanielSpiegel"}>
                      Daniel-Spiegel
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar> */}

          <Nav variant="tabs" defaultActiveKey="/Chervenak">
            <Nav.Item>
              <Nav.Link as={Link} to={"/Chervenak"}>
                Chervenak et al, 1984
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/DanielSpiegel"}>
                Daniel-Spiegel
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <br />

          <Routes>
            <Route exact path="/" element={<Chervenak />}></Route>
            <Route path="/Chervenak" element={<Chervenak />}></Route>
            <Route path="/DanielSpiegel" element={<DanielSpiegel />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
