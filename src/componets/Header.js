import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from 'react-redux'
import { push } from "connected-react-router";
import { fetchFilterList } from "../actions";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    dispatch(fetchFilterList(target.value));
  };

  const changePage = () => dispatch(push(`/`));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img
              alt=""
              src={
                "data:image/png;base64,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"
              }
              width="60px"
              // onClick={changePage}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            // onClick={changePage}
          >
            IMDB
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
