import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import MovieModal from "./MovieModal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { withRouter } from "react-router-dom";

const MovieDetails = ({ info, changePage }) => {
  // console.log(info);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenClose = () => setIsOpen(!isOpen);

  return (
    <>
      <Button variant="contained" onClick={changePage}>
        Back
      </Button>
      <CssBaseline />
      <Container maxWidth="sm" onClick={handleOpenClose}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "50vh",
            backgroundImage: `url(${info?.posterUrl})`,
          }}
        />
      </Container>
      <b>Title:</b> {info?.title}
      <br />
      {/* <b>year:</b> {info?.year}
      <br /> */}
      <b>genres:</b>{" "}
      {info?.genres.map((item) => (
        <Chip label={item} key={item} variant="outlined" />
      ))}
      <br />
      <b>runtime:</b> {info?.runtime}
      <br />
      <b>director:</b> {info?.director}
      <br />
      <b>category:</b> {info?.category}
      <br />
      <b>plot:</b> {info?.plot}
      <br />
      <b>rating:</b> {info?.rating}
      {isOpen && <MovieModal handleOpenClose={handleOpenClose} open={isOpen} details={info} />}
    </>
  );
};

const mapStateToProps = ({ moviesReducer }, { match }) => {
  return {
    info: moviesReducer?.movies.find(
      (item) => item.id === parseInt(match?.params?.id)
    ),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changePage: () => push(`/`),
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetails));
