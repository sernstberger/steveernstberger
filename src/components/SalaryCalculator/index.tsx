import { useState } from "react";
import SalaryChart from "./SalaryChart";

const data = [
  {
    country: "AD",
    "hot dog": 158,
    "hot dogColor": "hsl(173, 70%, 50%)",
    burger: 172,
    burgerColor: "hsl(219, 70%, 50%)",
    sandwich: 67,
    sandwichColor: "hsl(346, 70%, 50%)",
    kebab: 119,
    kebabColor: "hsl(114, 70%, 50%)",
    fries: 174,
    friesColor: "hsl(160, 70%, 50%)",
    donut: 79,
    donutColor: "hsl(154, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 199,
    "hot dogColor": "hsl(73, 70%, 50%)",
    burger: 115,
    burgerColor: "hsl(137, 70%, 50%)",
    sandwich: 18,
    sandwichColor: "hsl(164, 70%, 50%)",
    kebab: 124,
    kebabColor: "hsl(282, 70%, 50%)",
    fries: 164,
    friesColor: "hsl(188, 70%, 50%)",
    donut: 123,
    donutColor: "hsl(250, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 29,
    "hot dogColor": "hsl(335, 70%, 50%)",
    burger: 110,
    burgerColor: "hsl(59, 70%, 50%)",
    sandwich: 123,
    sandwichColor: "hsl(198, 70%, 50%)",
    kebab: 27,
    kebabColor: "hsl(85, 70%, 50%)",
    fries: 22,
    friesColor: "hsl(335, 70%, 50%)",
    donut: 33,
    donutColor: "hsl(176, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 79,
    "hot dogColor": "hsl(34, 70%, 50%)",
    burger: 90,
    burgerColor: "hsl(323, 70%, 50%)",
    sandwich: 119,
    sandwichColor: "hsl(21, 70%, 50%)",
    kebab: 95,
    kebabColor: "hsl(319, 70%, 50%)",
    fries: 114,
    friesColor: "hsl(22, 70%, 50%)",
    donut: 66,
    donutColor: "hsl(103, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 162,
    "hot dogColor": "hsl(342, 70%, 50%)",
    burger: 109,
    burgerColor: "hsl(128, 70%, 50%)",
    sandwich: 184,
    sandwichColor: "hsl(266, 70%, 50%)",
    kebab: 35,
    kebabColor: "hsl(99, 70%, 50%)",
    fries: 12,
    friesColor: "hsl(186, 70%, 50%)",
    donut: 187,
    donutColor: "hsl(94, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 121,
    "hot dogColor": "hsl(176, 70%, 50%)",
    burger: 94,
    burgerColor: "hsl(311, 70%, 50%)",
    sandwich: 31,
    sandwichColor: "hsl(225, 70%, 50%)",
    kebab: 23,
    kebabColor: "hsl(277, 70%, 50%)",
    fries: 148,
    friesColor: "hsl(198, 70%, 50%)",
    donut: 158,
    donutColor: "hsl(2, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 0,
    "hot dogColor": "hsl(193, 70%, 50%)",
    burger: 131,
    burgerColor: "hsl(213, 70%, 50%)",
    sandwich: 42,
    sandwichColor: "hsl(7, 70%, 50%)",
    kebab: 140,
    kebabColor: "hsl(352, 70%, 50%)",
    fries: 141,
    friesColor: "hsl(303, 70%, 50%)",
    donut: 103,
    donutColor: "hsl(5, 70%, 50%)",
  },
];

const SalaryCalculator = () => {
  const [startingSalary, setStartingSalary] = useState(0);

  const res = Array.from(Array(10)).map((_, i) => {
    return i * startingSalary;
  });

  console.log(res);
  return (
    <div>
      <input
        type="number"
        value={startingSalary}
        onChange={(e: any) => setStartingSalary(e.target.value)}
      />
      {startingSalary}
      {res.map((bar, index) => (
        <div>{bar}</div>
      ))}
      <SalaryChart data={data} />
    </div>
  );
};

export default SalaryCalculator;
