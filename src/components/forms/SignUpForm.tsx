import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

import ThankYouCard from "../common/ThankYouCard";
import SignUpInterface from "../interfaces/SignUpInterface";
import { SignUpType } from "../types/SignUpType";
import axios from "axios";

const useStyles = makeStyles({
  form: {
    marginTop: "80px",
    textAlign: "left",
  },
  input: {
    display: "block",
    boxSizing: "border-box",
    width: "500px",
    borderRadius: "4px",
    padding: "10px 15px",
    marginBottom: "10px",
    fontSize: "14px",
    marginLeft: "400px",
    backgroundColor: "white",
  },
  button: {
    background: "#ec5990",
    color: "#ffffff",
    textTransform: "uppercase",
    border: "none",
    marginTop: "40px",
    padding: "20px",
    fontSize: "16px",
    fontWeight: 100,
    letterSpacing: "10px",
    marginLeft: "400px",
  },
  label: {
    color: "#ffffff",
    marginLeft: "400px",
  },
  tittle: {
    marginLeft: "400px",
    color: "#ffffff",
  },
  highlighInput: {
    border: "2px solid red",
  },
  placeHolderText: {
    // color: "#808080",
    color: "blue",
  },
});

function SignUpForm() {
  const classes = useStyles();
  const { control, errors, handleSubmit } = useForm<
    SignUpType, // object with types
    SignUpInterface // object for props
  >();
  const [first, setVoor] = useState("");
  const [infix, setTussen] = useState("");
  const [last, setAchter] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let [showResults, setShowResults] = useState(false);

  const onSubmit = handleSubmit(({ first, infix, last, email }) => {
    // handleSubmit is a function provided by use form and this function receives the SignUpType
    setVoor(first);
    setTussen(infix);
    setAchter(last);
    setEmail(email);
    setShowResults(true);
    // I set state here to i can pass state as props to child component
    axios
      .post("https://code-application-api.devheld.nl/registration", {
        first,
        infix,
        last,
        email,
        // here is set the data to the server
      })
      .then((res) => {
        setMessage(res.data.message);
        // here i set the response to state again to pass as a prop to child compenent
      });
  });

  return (
    // React.Fragment is a wrapper so i can have more than one element next to eachother
    <React.Fragment>
      {!showResults ? ( // ternary to say if there are no result show form and if there are results show component ThankYouCard
        <form onSubmit={onSubmit} className={classes.form}>
          <h1 className={classes.tittle}>Vul hier uw gegevens in</h1>
          <label className={classes.label}>Voornaam:</label>

          <Controller
            as={MaterialUIInput}
            name="first"
            control={control} // control object is from invoking useForm
            //	This is a render prop. A function that returns a React element and provides the ability to attach events and value into the component.
            //Provides onChange, onBlur, name and value to the child component.
            defaultValue="..."
            rules={{ required: true }} // requires field to be filled out
            className={`${classes.input} ${
              errors.first ? classes.highlighInput : "" // object that highlights field that is
            }`}
          />
          <label className={classes.label}>Tussenvoegsel:</label>
          <Controller
            as={MaterialUIInput}
            name="infix"
            control={control}
            defaultValue="..."
            rules={{ required: true }}
            className={`${classes.input} ${
              errors.infix ? classes.highlighInput : ""
            }`}
          />
          <label className={classes.label}>Achternaam:</label>
          <Controller
            as={MaterialUIInput}
            name="last"
            control={control}
            defaultValue="..."
            rules={{ required: true }}
            className={`${classes.input} ${
              errors.last ? classes.highlighInput : ""
            }`}
          />
          <label className={classes.label}>E-mail:</label>
          <Controller
            as={MaterialUIInput}
            name="email"
            control={control}
            defaultValue="..."
            rules={{ required: true }}
            className={`${classes.input} ${
              errors.email ? classes.highlighInput : ""
            }`}
          />

          <input type="submit" className={classes.button} />
        </form>
      ) : (
        <ThankYouCard // child component with data that is filled out
          first={first}
          infix={infix}
          last={last}
          email={email}
          message={message}
        />
      )}
    </React.Fragment>
  );
}

export default SignUpForm;
