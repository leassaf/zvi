import logo from "./logo.svg";
import img1 from "./Chrevenak/Chrevenak_hc_z_score_formula1.jpg";
import img2 from "./Chrevenak/Chrevenak_hc_z_score_table.png";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Pros. Leibovitz Zvi</h1>
        <p>
          Ob/Gyn Ultrasound Unit, Bnai Zion Medical Center, Haifa, Israel HC
          z-score
        </p>
        <h1>Chervenak et al, 1984</h1>
        <Form />

        <br></br>

        <img src={img1} className="" alt="Chrevenak_hc_z_score_formula1" />
        <br></br>
        <img src={img2} className="" alt="Chrevenak_hc_z_score_table" />
      </header>
    </div>
  );
}

function Form() {
  const [values, setValues] = useState({
    weeks: 20,
    days: 0,
    sp: 0,
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

  const handleCalc = () => {
    if (values.sp < 100 || values.sp > 500) {
      alert("skull perimeter should be in range of 100 to 500 mm");
      return;
    }

    const ga = values.weeks + values.days / 7;
    // var maen_hc = (-0.1754)*Math.pow(ga,2) + 18.782*ga - 131.48;
    const maen_hc =
      -69.625 +
      10.885 * ga +
      0.14769 * Math.pow(ga, 2) -
      0.00405 * Math.pow(ga, 3);

    const sd = 14.7; //constant

    let hc_z_score = (values.sp - maen_hc) / sd;

    //hc_z_score = (sp-( (-0.1754)*(week+day/7)^2 + ((18.782)*(week+day/7)) - 131.48))/((0.0027*(week+day/7)^2) - (0.2025*(week+day/7)) + 17.23);
    hc_z_score = Math.round(hc_z_score * 100) / 100;

    alert("HC z-score = (" + hc_z_score + ")");
  };

  return (
    <form>
      <p>Gestational Age</p>
      <label>
        weeks:
        <select value={values.weeks} onChange={handleWeeksInputChange}>
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
        </select>
      </label>

      <br />

      <label>
        days:
        <select value={values.days} onChange={handleDaysInputChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>

      <br />
      <p>Head Circumference (HC)</p>

      <label>
        skull perimeter (mm):
        <input type="number" value={values.sp} onChange={handleSpInputChange} />
      </label>

      <br />

      <button type="button" onClick={handleCalc}>
        CALC
      </button>
    </form>
  );
}

export default App;
