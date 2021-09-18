import { ListItem, ListItemText, Typography } from "@mui/material";

const SalaryCalculator = (props: any) => {
  const {
    job: { company, description, title, startDate, endDate = "present" },
  } = props;
  return (
    <ListItem divider>
      <ListItemText primary={title} secondary={company} />

      <Typography>
        {startDate} - {endDate}
      </Typography>
      {description && <Typography>{description}</Typography>}
    </ListItem>
  );
};

export default SalaryCalculator;
