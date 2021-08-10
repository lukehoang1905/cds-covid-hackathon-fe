import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  requestButton: {
    margin: theme.spacing(1),
  },
}));

export default function RequestButton() {
  const classes = useStyles();
  const history = useHistory();
  function handleClickRequest() {
    history.push("/request");
  }

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        className={classes.requestButton}
        endIcon={<SendIcon />}
        onClick={handleClickRequest}
      >
        Need help? Create a posting
      </Button>
    </div>
  );
}
