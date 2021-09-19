import { Box, Chip, Divider, Stack, Typography } from "@mui/material";

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
    <>
      <Box py={2}>
        <Typography>
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          {`${company} | ${startDate} - ${endDate}`}
        </Typography>

        {description &&
          description.map((single: any) => {
            return <Typography mt={1}>{single}</Typography>;
          })}
        {technologies && (
          <Stack direction="row" spacing={1} mt={1}>
            {technologies.map((tech: any) => {
              return <Chip label={tech} variant="outlined" />;
            })}
          </Stack>
        )}
      </Box>
      <Divider />
    </>
  );
};

export default SalaryCalculator;
