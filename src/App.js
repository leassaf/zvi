// import img1 from "./Chrevenak/Chrevenak_hc_z_score_formula1.jpg";
// import img2 from "./Chrevenak/Chrevenak_hc_z_score_table.png";
import { useState } from "react";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Chervenak from "./Chervenak";
import DanielSpiegel from "./DanielSpiegel";

function App() {
  return (
    // <Router>
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          {/* <NavigationBar /> */}
          {/* <Routes>
            <Route exact path="/" element={<Chervenak />}></Route>
          </Routes> */}

          <div>
            <Router>
              <div>
                {/* <nav>
                  <ul>
                    <li>
                      <Link to="/Chervenak">Chervenak</Link>
                    </li>
                    <li>
                      <Link to="/DanielSpiegel">DanielSpiegel</Link>
                    </li>
                  </ul>
                </nav> */}
                <Nav variant="pills" defaultActiveKey="/">
                  <Nav.Item>
                    <Nav.Link as={Link} to={"/Chervenak"}>
                      Chervenak
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
                  <Route
                    path="/DanielSpiegel"
                    element={<DanielSpiegel />}
                  ></Route>
                </Routes>
              </div>
            </Router>
          </div>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
    // </Router>
  );
}

export default App;
