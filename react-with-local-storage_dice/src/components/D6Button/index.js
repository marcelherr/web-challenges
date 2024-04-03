import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll, rollLength }) {
  const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
    onRoll(getD6Roll());
    rollLength = rolls.length;
  };

  const currentRollValue = rolls[0]?.value;

  console.log(rolls.length);
  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={currentRollValue || value} />
    </button>
  );
}
