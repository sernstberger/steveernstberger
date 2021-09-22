import { Typography } from "@mui/material";
import formatNumber from "../../utils/formatNumber";

export interface StatProps {
  value: number;
  label: string;
  currency?: boolean;
}

const Stat = (props: StatProps) => {
  const { value, label, currency } = props;
  const formattedNumber = formatNumber(value, currency).formatted;

  return (
    <div>
      <Typography variant="h1">
        {formattedNumber}
        <sup
          style={{
            fontSize: 12,
            fontWeight: 400,
            display: "inline-flex",
            verticalAlign: "top",
            marginTop: 8,
          }}
        >
          {label}
        </sup>
      </Typography>
    </div>
  );
};

export default Stat;
