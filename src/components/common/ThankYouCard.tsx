import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import SignUpInterface from "../interfaces/SignUpInterface";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: "auto",
    marginTop: "100px",
  },
  title: {
    color: "#FF1493",
    fontFamily: "Grandstander,cursive",
    fontSize: "20px",
    marginLeft: "120px",
  },
  subtitle: {
    fontFamily: "Grandstander,cursive",
    fontSize: "15px",
  },
  text: {
    fontFamily: "Grandstander,cursive",
  },
});

const ThankYouCard: React.FC<SignUpInterface> = (props) => {
  //SignUpInterface specifies what type of prop is passed
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardActions>
            <h3 className={classes.title}>{props.message}</h3>
          </CardActions>
          <CardContent>
            <h4 className={classes.subtitle}>Uw gegevens</h4>
            <div className={classes.text}>
              <p> Naam: {props.first}</p>
              <p> Tussenvoegsel: {props.infix}</p>
              <p>Achternaam: {props.last}</p>
              <p> E-mail: {props.email}</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ThankYouCard;
