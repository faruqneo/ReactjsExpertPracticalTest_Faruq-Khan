import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Carousel from "react-material-ui-carousel";
import BannerPreviewer from "./BannerPreviewer";
import MovieList from "./MovieList";
import SearchList from "./SearchList";
import { fetchList } from "../actions";

const MovieHome = () => {
  const { movies, filter, isFilter } = useSelector(({ moviesReducer }) => moviesReducer)

  const dispatch = useDispatch();
  const [moviesList, setMoviesList] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (!isFilter) dispatch(fetchList());
    // eslint-disable-next-line
  }, [isFilter]);

  useEffect(() => {
    setMoviesList(movies);
  }, [movies]);

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

export default MovieHome;
