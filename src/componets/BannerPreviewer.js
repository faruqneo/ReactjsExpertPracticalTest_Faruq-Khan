import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MovieModal from "./MovieModal";
import { useDispatch } from 'react-redux'
import { push } from "connected-react-router";

const BannerPreviewer = ({ item }) => {
  const dispatch = useDispatch();
  const changePage = (id) => dispatch(push(`/movieInfo/${id}`));
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Container>
        <Box
          onClick={() => changePage(item?.id)}
          sx={{
            bgcolor: "#cfe8fc",
            height: "50vh",
            width: "100%",
            backgroundImage: `url(${item?.posterUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Container>
      {isOpen && (
        <MovieModal
          handleOpenClose={handleOpenClose}
          open={isOpen}
          details={item}
        />
      )}
    </React.Fragment>
  );
};

export default BannerPreviewer;
