import { useState } from "react";

const foo = [1, 2, 3];

const SalaryCalculator = () => {
  const [startingSalary, setStartingSalary] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={startingSalary}
        onChange={(e: any) => setStartingSalary(e.target.value)}
      />
      {foo.map((bar, index) => (
        <div>{bar * index}</div>
      ))}
    </div>
  );
};

export default SalaryCalculator;
