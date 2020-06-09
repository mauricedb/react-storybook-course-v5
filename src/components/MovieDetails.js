import React from "react";
import { Formik, Form } from "formik";

import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import FormikTextField from "./FormikTextField";
import SaveCancelButtons from "./SaveCancelButtons";

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
          <Typography gutterBottom variant="h5" component="h2">
            Movie details
          </Typography>

          <FormikTextField label="Title" name="title" />
          <FormikTextField label="Overview" name="overview" multiline />
          <FormikTextField
            label="Vote average"
            name="vote_average"
            type="number"
          />
          <SaveCancelButtons isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}

export default MovieDetails;
