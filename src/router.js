import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const MovieHome = lazy(() => import("./componets/MovieHome"));
const MovieDetails = lazy(() => import("./componets/MovieDetails"));

const router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={MovieHome} />
      <Route path={"/movieInfo/:id"} component={MovieDetails} />
    </Switch>
  );
};

export default router;
