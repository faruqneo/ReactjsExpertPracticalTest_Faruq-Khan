import React, { Suspense } from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Router from "./router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        }
      >
        <Router />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
