import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import FormikTextField from "./FormikTextField";
import SaveCancelButtons from "./SaveCancelButtons";

import "./MovieDetails.css";

function MovieDetails({ movie, loading, error, saveMovie }) {
  const history = useHistory();

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
      onSubmit={async (values, actions) => {
        console.log(values);
        // await new Promise((resolve) => setTimeout(resolve, 5000));

        try {
          await saveMovie(values);
          history.push("/movies");
        } catch (error) {
          alert(error.message);
          actions.setSubmitting(false);
        }
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
          <SaveCancelButtons
            isSubmitting={isSubmitting}
            onCancel={() => history.push("/movies")}
          />
        </Form>
      )}
    </Formik>
  );
}

export default MovieDetails;
