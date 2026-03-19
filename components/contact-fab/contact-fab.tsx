import ContactPageIcon from "@mui/icons-material/ContactPage";
import Fab from "@mui/material/Fab";
import { FC } from "react";

const ContactFab: FC<{ href: string }> = ({ href }) => {
  return (
    <Fab aria-label="contact" color="primary" href={href}>
      <ContactPageIcon />
    </Fab>
  );
};

export default ContactFab;
