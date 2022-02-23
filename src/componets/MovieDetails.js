import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import MovieModal from "./MovieModal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { fetchList } from "../actions";
import { withRouter } from "react-router-dom";
import Videojs from "./VideoPlayer";

const MovieDetails = ({ info, changePage }) => {
  // console.log("info", info);
  const videoJsOptions = {
    controls: false,
    width: 820,
    height: 700,
    techOrder: ["youtube"],
    sources: [
      {
        src: info?.videoSrc,
        type: "video/youtube",
      },
    ],
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [isOpen, setIsOpen] = React.useState(false);
  const [isVideo, setIsVideo] = React.useState(false);
  const [isCast, setIsCast] = React.useState(false);

  const [videoSrc, setVideoSrc] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");

  const handleOpenClose = () => setIsOpen(!isOpen);

  const handleOtherOpenClose = () => {
    setIsVideo(false);
    setIsCast(false);

    setVideoSrc("");
    setImageSrc("");
  };

  const handleVideoOpenClose = (src) => {
    setVideoSrc(src);
    setIsVideo(!isVideo);
  };
  const handleCastOpenClose = (src) => {
    setImageSrc(src);
    setIsCast(!isCast);
  };

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
      <b>Genres:</b>{" "}
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
      <b>Story-line:</b> {info?.plot}
      <br />
      <b>rating:</b> {info?.rating}
      <br />
      <b>Taglines:</b>{" "}
      {info?.taglines.map((item) => (
        <Typography variant="subtitle2" gutterBottom component="div" key={item}>
          {item}
        </Typography>
      ))}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <b>Cast:</b>{" "}
              <ImageList sx={{ width: 820, heigth: 700 }}>
                {info?.actors.map((item) => (
                  <ImageListItem
                    key={item.imageUrl}
                    onClick={() => handleCastOpenClose(item.imageUrl)}
                  >
                    <img
                      width={300}
                      height={300}
                      src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.name}
                      // subtitle={item.author}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.name}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <b>Video:</b>
              <div
                key={info?.id}
                onClick={() => handleVideoOpenClose(info?.videoSrc)}
              >
                <Videojs key={info?.id} {...videoJsOptions} />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {isOpen && (
        <MovieModal
          handleOpenClose={handleOpenClose}
          open={isOpen}
          details={info}
        />
      )}
      {isVideo && (
        <MovieModal
          handleOpenClose={handleOtherOpenClose}
          open={isVideo}
          src={videoSrc}
          isVideo={true}
        />
      )}
      {isCast && (
        <MovieModal
          handleOpenClose={handleOtherOpenClose}
          open={isCast}
          src={imageSrc}
          isCast={true}
        />
      )}
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
  bindActionCreators({ fetchList, changePage: () => push(`/`) }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetails));
