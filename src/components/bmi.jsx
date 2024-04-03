import { useState } from 'react';
import './bmi.css';

function BMICalculator() {
const [weight, setWeight]=useState(null);
const[height, setHeight]=useState(null);
const [bmi, setBMI]=useState(null);



  return (
    <div className="bmi-calculator-container">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
        />
      </div>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
        />
      </div>
      <button>Calculate BMI</button>
    </div>
  );
}

export default BMICalculator;
