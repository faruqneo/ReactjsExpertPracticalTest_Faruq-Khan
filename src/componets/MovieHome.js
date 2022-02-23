import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Carousel from "react-material-ui-carousel";
import BannerPreviewer from "./BannerPreviewer";
import MovieList from "./MovieList";
import SearchList from "./SearchList";
import { fetchList } from "../actions";
import { bindActionCreators } from "redux";

const MovieHome = ({ movies, genres, fetchList, filter, isFilter }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (!isFilter) fetchList();
  }, [isFilter, fetchList]);

  useEffect(() => {
    setMoviesList(movies);
  }, [movies, genres]);

  useEffect(() => {
    setFilters(filter);
  }, [filter]);

  return (
    <>
      <Carousel>
        {moviesList?.slice(4, 8).map((ele, i) => (
          <BannerPreviewer key={i} item={ele} />
        ))}
      </Carousel>
      {!isFilter ? (
        <MovieList itemData={moviesList} />
      ) : (
        <SearchList itemData={filters} />
      )}
    </>
  );
};

const mapStateToProps = ({ moviesReducer }) => ({
  movies: moviesReducer?.movies,
  filter: moviesReducer?.filter,
  isFilter: moviesReducer?.isFilter
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieHome);
