import FormCalc from "./FormCalc";
import img1 from "./Chrevenak/Chrevenak_hc_z_score_formula1.jpg";
import img2 from "./Chrevenak/Chrevenak_hc_z_score_table.png";

export default function Chervenak() {
  return (
    <div>
      <h1>Chervenak et al, 1984</h1>
      <FormCalc />
      <br></br>
      <img src={img1} className="" alt="Chrevenak_hc_z_score_formula1" />
      <div>
        <br />
      </div>
      <img src={img2} className="" alt="Chrevenak_hc_z_score_table" />
    </div>
  );
}
