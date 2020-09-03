import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
    textDecoration: "none",
  },
  title: {
    fontSize: "80px",
    color: "white",
    animation: `$myEffectExit 3000ms `,
    marginTop: "80px",
    fontFamily: "Grandstander', cursive",
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>Welkom</h1>
      <Link to="/registreer">
        <Button className={classes.root} variant="contained" color="secondary">
          Registreren
        </Button>
      </Link>
    </div>
  );
}

export default Home;
