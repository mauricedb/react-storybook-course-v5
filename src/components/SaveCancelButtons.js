import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./SaveCancelButtons.css";

function SaveCancelButtons({ isSubmitting, onCancel }) {
  return (
    <ButtonGroup
      color="primary"
      className="save-cancel-buttons"
      disabled={isSubmitting}
    >
      <Button type="submit">
        {isSubmitting ? <CircularProgress size="1em" /> : "Save"}
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </ButtonGroup>
  );
}

export default SaveCancelButtons;
