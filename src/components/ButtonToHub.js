import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const ButtonToHub = (hubId) => {
  return (
    <Button disable={!hubId} as={Link} to={`/hub/${hubId}`}>
      Go to Closest Store
    </Button>
  );
};

export default ButtonToHub;
