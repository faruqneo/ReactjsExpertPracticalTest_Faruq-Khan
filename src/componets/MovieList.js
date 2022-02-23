import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MovieModal from "./MovieModal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { dummyList } from "../moviesList";

const MovieList = ({ itemData, changePage }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const handleOpenClose = (item) => {
    setIsOpen(!isOpen);
    setData(item);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {itemData && itemData.length ? (
            itemData.map((item) => (
              <Card sx={{ maxWidth: 345 }} key={item.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${item.posterUrl}?w=248&fit=crop&auto=format`}
                    alt="green iguana"
                    onClick={() => handleOpenClose(item)}
                  />
                  <CardContent onClick={() => changePage(item.id)}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.plot}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Grid>
      </Box>
      {isOpen && (
        <MovieModal
          handleOpenClose={() => handleOpenClose(data)}
          open={isOpen}
          details={data}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changePage: (id) => push(`/movieInfo/${id}`),
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(MovieList);
