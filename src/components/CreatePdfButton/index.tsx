import { usePDF } from "@react-pdf/renderer";
import Resume from "../Resume";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

const CreatePdfButton = () => {
  const [instance, updateInstance] = usePDF({ document: <Resume /> });

  // if (instance.error) return <div>Something went wrong: {error}</div>;
  if (instance.error) return <div>Something went wrong</div>;
  return (
    <Button
      variant="outlined"
      size="small"
      component="a"
      // @ts-ignore
      href={instance.url}
      download="Steve Ernstberger Resume.pdf"
      disabled={instance.loading}
      startIcon={instance.loading ? <CircularProgress size={12} /> : undefined}
    >
      Download Resume
    </Button>
  );
};

export default CreatePdfButton;
