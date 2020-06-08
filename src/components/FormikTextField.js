import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

function FormikTextFieldComponent({
  field,
  form: { isSubmitting },
  disabled,
  ...props
}) {
  return (
    <TextField disabled={disabled || isSubmitting} {...props} {...field} />
  );
}

function FormikTextField({ field, ...props }) {
  return (
    <Field component={FormikTextFieldComponent} variant="filled" {...props} />
  );
}

export default FormikTextField;
