import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";

export default function ImgMediaCard() {
  const state = useSelector((state) => state);
  const request = state.requestsReducer.selectedRequest;
  console.log(request);
  return (
    <Box p={5}>
      <Grid item xs={12}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Family Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Detail1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Detail2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Detail3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Detail4
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}
