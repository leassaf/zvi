import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import Chervenak from "./Chervenak";
import DanielSpiegel from "./DanielSpiegel";

export default function NavigationBar() {
  return (
    // <div>
    //   <Router>
    //     <Nav variant="pills" defaultActiveKey="/Chervenak">
    //       <Nav.Item>
    //         <Nav.Link as={Link} to={"/Chervenak"}>
    //           Chervenak
    //         </Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link as={Link} to={"/DanielSpiegel"}>
    //           Daniel-Spiegel
    //         </Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //     <Routes>
    //       {/* <Route exact path="/" element={<Chervenak />}></Route> */}
    //       {/* <Route path="/Chervenak" element={<Chervenak />}></Route> */}
    //       {/* <Route path="/DanielSpiegel" element={<DanielSpiegel />}></Route> */}
    //     </Routes>
    //   </Router>
    // </div>
    <div>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
