import React, { useEffect } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// from metarial ui:
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//metarial ui - card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// metarial ui -container:
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import requestsActions from "../redux/actions/requests.action";
import "../App.css";

//from Metarial ui:
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 240,
  },
}));

const RequestDetailPage = () => {
  const params = useParams();
  const requestId = params.id;
  const state = useSelector((state) => state);
  const request = state.requestsReducer.selectedRequest;
  console.log(request);
  const loading = state.requestsReducer.loading;
  console.log(loading);

  const getDistricDetail = (request) => {
    dispatch(requestsActions.addToFavorite(request));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestsActions.getRequestDetail(requestId));
  }, [requestId, dispatch]);

  //from Metarial ui:
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        //from Metarial ui:
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <div className={classes.root}>
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={8}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          USER'S NAME
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          WARD NAME
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => getDistricDetail(request)}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Container>
        </React.Fragment>
      )}
    </>
  );
};

export default RequestDetailPage;
