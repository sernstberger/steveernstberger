import { LinearProgress, Typography } from "@mui/material";
import formatNumber from "../../utils/formatNumber";
import Stat from "../Stat";

export interface StatWithProgressProps {
  current: {
    value: number;
    label: string;
  };
  goal: {
    value: number;
    label: string;
  };
  currency?: boolean;
}

const StatWithProgress = (props: StatWithProgressProps) => {
  const { current, goal, currency } = props;
  const progressValue = (current.value / goal.value) * 100;
  const label = `${current.label} / ${
    formatNumber(goal.value, currency).formatted
  } ${goal.label}`;

  return (
    <div>
      <LinearProgress variant="determinate" value={progressValue} />
      <Stat value={current.value} label={label} />
    </div>
  );
};

export default StatWithProgress;
