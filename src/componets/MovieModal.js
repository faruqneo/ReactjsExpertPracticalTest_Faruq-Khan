import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Videojs from "./VideoPlayer";
import { v4 as uuidv4 } from "uuid";

const uniqueId = uuidv4();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 999,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MovieModal = ({
  handleOpenClose,
  open,
  details,
  isVideo,
  isCast,
  src,
}) => {
  const videoJsOptions = {
    id: `new${uniqueId}`,
    controls: true,
    width: 820,
    height: 700,
    techOrder: ["youtube"],
    sources: [
      {
        src: isVideo ? src : "",
        type: "video/youtube",
      },
    ],
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpenClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!isVideo ? (
            <img
              alt={isCast ? src : details?.title}
              src={isCast ? src : details?.posterUrl}
              width={900}
              height={300}
            />
          ) : (
            <div key={uniqueId}>
              <Videojs {...videoJsOptions} />
            </div>
          )}
          {!isCast && !isVideo && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {details?.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {details?.plot}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default MovieModal;
