import { usePDF } from "@react-pdf/renderer";
import Resume from "../Resume";
import Button from "@mui/material/Button";

const CreatePdfButton = () => {
  const [instance, updateInstance] = usePDF({ document: <Resume /> });

  if (instance.loading) return <div>Loading ...</div>;

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
    >
      Download
    </Button>
  );
};

export default CreatePdfButton;
