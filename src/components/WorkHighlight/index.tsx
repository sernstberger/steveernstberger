import { Box, Typography, Container, Link as MuiLink } from "@mui/material";

const WorkHighlight = (props: any) => {
  const { company, description } = props;
  return (
    <div>
      <Typography variant="h4">{company}</Typography>
      <Typography gutterBottom>{description}</Typography>
    </div>
  );
};

export default WorkHighlight;
