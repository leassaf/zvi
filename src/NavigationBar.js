import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Chervenak from "./Chervenak";
import DanielSpiegel from "./DanielSpiegel";

export default function NavigationBar() {
  return (
    <div>
      <Router>
        <div>
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
