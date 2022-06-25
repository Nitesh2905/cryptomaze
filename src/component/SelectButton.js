import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";

const useStyles = makeStyles({
  selectbutton: {
    border: "1px solid #AD68D0",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#AD68D0",
      color: "black",
    },
    width: "22%",
    //   margin: 5,
  },
});

const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();

  return (
    <span
      onClick={onClick}
      style={{
        backgroundColor: selected ? "#AD68D0" : "",
        color: selected ? "white" : "",
        fontWeight: selected ? 700 : 500,
      }}
      className={classes.selectbutton}
    >
      {children}
    </span>
  );
};

export default SelectButton;
