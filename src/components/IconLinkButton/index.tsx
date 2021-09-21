import IconButton from "@mui/material/IconButton";

interface IconLinkButtonProps {
  href: string;
  icon: React.ReactNode;
}

const IconLinkButton = (props: IconLinkButtonProps) => {
  const { href, icon } = props;
  return (
    <IconButton component="a" {...{ href }}>
      {icon}
    </IconButton>
  );
};

export default IconLinkButton;
