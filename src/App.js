import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

import NavigationBar from "./NavigationBar";

import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <NavigationBar />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
