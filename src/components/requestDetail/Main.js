import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function Main(props) {
  const { title } = props;
  const post =
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.";

  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        <h3>{title} </h3>
      </Typography>
      <Divider />
      <Typography variant='h6' gutterBottom>
        <p>{post} </p>
        <p>{post} </p>
        <p>{post} </p>
        <p>{post} </p>
        <p>{post} </p>
      </Typography>
    </Grid>
  );
}

Main.propTypes = {
  // posts: PropTypes.array,
  title: PropTypes.string,
};
