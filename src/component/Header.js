import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../csscomponent/Header.css";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <AppBar position="static" color="transparent">
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                className={classes.title}
                onClick={() => navigate("/")}
              >
                Track Crypto
              </Typography>
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Header;
