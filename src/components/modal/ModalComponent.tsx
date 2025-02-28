import { useState } from "react";
import "./ModalComponent.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface Props {
  togglePopup: any;
  title: string;
  description: string;
}

/**
 * 
 * @returns a reusable component to show some message/notification/alert.
 */
const ModalComponent = ({ togglePopup, title, description }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} ref={togglePopup} sx={{ display: "none" }}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <Typography className="modal-title">{title}</Typography>
          <Typography className="modal-description">{description}</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
