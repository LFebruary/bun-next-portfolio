import Fab from '@mui/material/Fab';
import { FC } from 'react';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const ContactFab: FC<{ href: string }> = ({ href }) => {
    return (
        <Fab color="primary" aria-label="contact" href={href}>
            <ContactPageIcon />
        </Fab>
    );
};

export default ContactFab;
