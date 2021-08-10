import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    border: "1px solid RGB(220, 222, 221)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    color: "black",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RequestsCard({ ...info }) {
  const classes = useStyles();
  const history = useHistory();

  function handleClickRequest() {
    history.push(`/request/${info._id}`);
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={info.from.name} />
      <CardMedia className={classes.media} image={info.from.image} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {info.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={classes.expand}
          onClick={handleClickRequest}
          aria-label='show more'
        >
          <CardGiftcardIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
