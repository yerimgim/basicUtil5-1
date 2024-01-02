import React, { useState } from "react";
import BMITable from "./BMITable";

const BMI = () => {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(160);
  const [calculatedBMI, setcalculatedBMI] = useState("");
  // const [info, setInfo] = useState("");

  const handleWeight = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputWeight = parseFloat(event.target.value);
    setWeight(inputWeight);
  };

  const handleHeight = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputHeight = parseFloat(event.target.value);
    setHeight(inputHeight);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const calculatedHeight = height / 100;
    setcalculatedBMI(
      (weight / (calculatedHeight * calculatedHeight)).toFixed(1)
    );

    // const bmiValue = Number(newCalculatedBMI);

    // if (bmiValue < 18.5) {
    //   setInfo("저체중");
    // } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    //   setInfo("정상");
    // } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    //   setInfo("과체중");
    // } else {
    //   setInfo("비만");
    // }
  };

  return (
    <section>
      <h1>BMI CALCULATOR</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="weight">Weight: {weight}</label>
            <input
              type="range"
              id="weight"
              step="1"
              min={0}
              max={200}
              onChange={handleWeight}
            />
          </div>
          <div>
            <label htmlFor="height">Height: {height}</label>
            <input
              type="range"
              id="height"
              step="1"
              min={0}
              max={250}
              onChange={handleHeight}
              value={height}
            />
          </div>
        </div>

        <button type="submit">계산</button>
      </form>
      <br />
      {calculatedBMI && (
        <>
          <div>BMI 지수: {calculatedBMI}</div>
          {/* <div>비만도 결과: {info}</div> */}
          <br />
          <BMITable />
        </>
      )}
    </section>
  );
};

export default BMI;
