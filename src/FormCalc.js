import { useState } from "react";
import { Button, Row, Col, Form, Alert } from "react-bootstrap";

const AlertMessage = (props) => {
  return (
    <Alert
      variant={props.variant}
      style={{ fontWeight: "bold", fontSize: "24px" }}
    >
      {props.text}
    </Alert>
  );
};

export default function FormCalc(props) {
  const [values, setValues] = useState({
    weeks: 20,
    days: 0,
    sp: "",
  });

  const handleSpInputChange = (event) => {
    setValues({ ...values, sp: event.target.value });
  };

  const handleWeeksInputChange = (event) => {
    setValues({ ...values, weeks: event.target.value });
  };

  const handleDaysInputChange = (event) => {
    setValues({ ...values, days: event.target.value });
  };

  const resetSpInputChange = (event) => {
    setValues({ ...values, sp: "" });
    setAlertDangerDisplay(false);
    setAlertSuccessDisplay(false);
  };

  // const [alertPrimaryDisplay, setAlertPrimaryDisplay] = useState(false);
  const [alertDangerDispaly, setAlertDangerDisplay] = useState(false);
  const [alertSuccessDisplay, setAlertSuccessDisplay] = useState(false);

  const [chervenakScore, setChervenakScore] = useState(0);

  // Chervenak
  const handleCalcChervenak = () => {
    console.log(props.type);
    if (values.sp < 100 || values.sp > 500) {
      setAlertDangerDisplay(true);
      setAlertSuccessDisplay(false);
      return;
    }

    // clear alerts messages
    setAlertDangerDisplay(false);

    // calculations:
    let ga = parseInt(values.weeks) + parseInt(values.days) / 7;

    let mean_hc =
      -69.625 +
      10.885 * ga +
      0.14769 * Math.pow(ga, 2) -
      0.00405 * Math.pow(ga, 3);

    //constant
    const sd = 14.7;

    let hc_z_score =
      Math.round(((parseFloat(values.sp) - mean_hc) / sd) * 100) / 100;

    setAlertSuccessDisplay(true);
    setChervenakScore(hc_z_score);
  };

  // Daniel-Spiegel
  const handleCalcDanielSpiegel = () => {
    console.log(props.type);
    if (values.sp < 100 || values.sp > 500) {
      setAlertDangerDisplay(true);
      setAlertSuccessDisplay(false);
      return;
    }

    // clear alerts messages
    setAlertDangerDisplay(false);

    // calculations:
    let ga = parseInt(values.weeks) + parseInt(values.days) / 7;
    let mean_hc = -0.1754 * Math.pow(ga, 2) + 18.782 * ga - 131.48;
    let sd = 0.0027 * Math.pow(ga, 2) - 0.2025 * ga + 17.23;
    let hc_z_score = (parseFloat(values.sp) - mean_hc) / sd;
    hc_z_score = Math.round(hc_z_score * 100) / 100;

    setAlertSuccessDisplay(true);
    setChervenakScore(hc_z_score);
  };

  return (
    <div>
      <Form>
        <br />
        <Row>
          <Col>
            <h5>Gestational Age</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Weeks</Form.Label>
            <Form.Select
              size="lg"
              value={values.weeks}
              onChange={handleWeeksInputChange}
            >
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="41">42</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Days</Form.Label>
            <Form.Select
              size="lg"
              value={values.days}
              onChange={handleDaysInputChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <h5>Head Circumference (HC)</h5>
          <Col xs={9}>
            {/* <Form.Label>skull perimeter (mm)</Form.Label> */}
            <Form.Control
              type="number"
              value={values.sp}
              onChange={handleSpInputChange}
              placeholder="skull perimeter (mm)"
              size="lg"
            />
          </Col>
          <Col>
            <Button variant="secondary" onClick={resetSpInputChange}>
              X
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              size="lg"
              onClick={
                props.type === "Chervenak"
                  ? handleCalcChervenak
                  : handleCalcDanielSpiegel
              }
            >
              Calc HC z-score
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* {alertPrimaryDisplay ? (
                <AlertMessage variant="primary" text=""></AlertMessage>
              ) : null} */}
            {alertDangerDispaly ? (
              <AlertMessage
                variant="danger"
                text="Skull Perimeter should be in range of 100 to 500 mm"
              ></AlertMessage>
            ) : null}
            {alertSuccessDisplay ? (
              <AlertMessage
                variant="success"
                text={"HC z-score = " + chervenakScore}
              ></AlertMessage>
            ) : null}
          </Col>
        </Row>
      </Form>
    </div>
  );
}
