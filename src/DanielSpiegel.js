import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import FormCalc from "./FormCalc";
import img1 from "./DanielSpiegel/hc_z_score_formula.png";
import img2 from "./DanielSpiegel/hc_z_score_table.png";

export default function DanielSpiegel() {
  return (
    <div>
      <h1>Daniel-Spiegel et al</h1>
      <FormCalc type="DanielSpiegel" />
      <Container>
        <Row>
          <Col>
            <Button variant="link" href={img1}>
              <Figure>
                <Figure.Image width={150} alt="Chrevenak formula" src={img1} />
                <Figure.Caption>Daniel Spiegel formula</Figure.Caption>
              </Figure>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="link" href={img2}>
              <Figure>
                <Figure.Image width={150} alt="Chrevenak table" src={img2} />
                <Figure.Caption>Daniel Spiegel table</Figure.Caption>
              </Figure>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
