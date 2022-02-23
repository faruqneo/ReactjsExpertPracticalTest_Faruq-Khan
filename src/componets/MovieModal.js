import React from "react";
import Box from "@mui/material/Box";
// import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 906,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MovieModal = ({ handleOpenClose, open, details }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpenClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img alt={details?.title} src={details?.posterUrl} width={900} height={300} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {details?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {details?.plot}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MovieModal;
