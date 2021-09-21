import { Divider, Typography, Container, Link as MuiLink } from "@mui/material";

interface WorkHighlightProps {
  company: string;
  description: string;
}
const WorkHighlight = (props: WorkHighlightProps) => {
  const { company, description } = props;
  return (
    <div>
      <Typography variant="h4">{company}</Typography>
      <Typography gutterBottom>{description}</Typography>
      <Divider />
    </div>
  );
};

export default WorkHighlight;
