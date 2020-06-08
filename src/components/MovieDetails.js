import React from "react";
import { Formik, Form } from "formik";

import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CircularProgress from "@material-ui/core/CircularProgress";

import FormikTextField from "./FormikTextField";

import "./MovieDetails.css";

function MovieDetails({ movie, loading, error }) {
  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  if (!movie) {
    return null;
  }

  return (
    <Formik
      initialValues={movie}
      onSubmit={async () => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }}
    >
      {({ isSubmitting }) => (
        <Form noValidate autoComplete="off" className="movie-details-form">
          <FormikTextField label="Title" name="title" />
          <FormikTextField label="Overview" name="overview" multiline />
          <FormikTextField
            label="Vote average"
            name="vote_average"
            type="number"
          />
          <ButtonGroup color="primary" disabled={isSubmitting}>
            <Button type="submit" className="submit-button">
              {isSubmitting ? <CircularProgress size="1em" /> : "Save"}
            </Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
}

export default MovieDetails;
