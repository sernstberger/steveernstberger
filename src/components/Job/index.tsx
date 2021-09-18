import { Box, Chip, Stack, Typography } from "@mui/material";

const SalaryCalculator = (props: any) => {
  const {
    job: {
      company,
      description,
      title,
      startDate,
      endDate = "present",
      technologies,
    },
  } = props;
  return (
    <Box borderBottom="1px solid red" py={2}>
      <Typography>
        <strong>{title}</strong>
      </Typography>
      <Typography variant="body2" color="theme.palette">
        <em>{`${company} | ${startDate} - ${endDate}`}</em>
      </Typography>

      {description && <Typography mt={1}>{description}</Typography>}
      {technologies && (
        <Stack direction="row" spacing={1} mt={1}>
          {technologies.map((tech: any) => {
            return <Chip label={tech} variant="outlined" />;
          })}
        </Stack>
      )}
    </Box>
  );
};

export default SalaryCalculator;
