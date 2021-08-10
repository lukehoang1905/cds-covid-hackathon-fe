import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { post1, title } = props;
  const post =
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.";

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        <h3>{title} </h3>
      </Typography>
      <Divider />
      {/* <Markdown className={classes.markdown} key={post1.substring(0, 40)}>
        {post1}
      </Markdown> */}
      <Typography variant="h6" gutterBottom>
        <p>{post} </p>
        <p>{post} </p>
        <p>{post} </p>
        <p>{post} </p>
        <p>{post} </p>
      </Typography>
      <Button variant="contained">
        <Link to="/hub/:id">Go To Store</Link>
      </Button>
    </Grid>
  );
}

Main.propTypes = {
  // posts: PropTypes.array,
  title: PropTypes.string,
};
