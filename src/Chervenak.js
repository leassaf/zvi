import { Row, Col, Figure, Button } from "react-bootstrap";
import FormCalc from "./FormCalc";
import img1 from "./Chrevenak/Chrevenak_hc_z_score_formula1.jpg";
import img2 from "./Chrevenak/Chrevenak_hc_z_score_table.png";

export default function Chervenak() {
  return (
    <div>
      <h1>Chervenak et al, 1984</h1>
      <FormCalc type="Chervenak" />
      <Row>
        <Col>
          <Button variant="link" href={img1}>
            <Figure>
              <Figure.Image width={150} alt="Chrevenak formula" src={img1} />
              <Figure.Caption>Chervenak formula</Figure.Caption>
            </Figure>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="link" href={img2}>
            <Figure>
              <Figure.Image width={150} alt="Chrevenak table" src={img2} />
              <Figure.Caption>Chervenak table</Figure.Caption>
            </Figure>
          </Button>
        </Col>
      </Row>
    </div>
  );
}
