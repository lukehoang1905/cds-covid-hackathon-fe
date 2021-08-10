import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import requestsActions from "../redux/actions/requests.action";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RequestButton from "./RequestButton";
import RequestsCard from "./RequestCard";
import PaginationBar from "./Pagination";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "80px",
  },
  typo: {
    marginLeft: "3vw",
  },
}));

const RequestSection = () => {
  const [pageNum, setPageNum] = useState(1);
  const [isDone] = useState("");
  const totalPage = 15;
  const limit = 9;

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestsActions.getRequests(pageNum, limit, isDone));
  }, [dispatch, pageNum, limit, isDone]);

  const state = useSelector((state) => state);
  const requests = state.requestsReducer.requests;

  return (
    <>
      <Grid
        className={classes.grid}
        container
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Grid item>
          <Typography className={classes.typo} variant='h4'>
            {Math.floor(Math.random() * (2000 - 9) + 9)} in-need situations
          </Typography>
        </Grid>
        <Grid item>
          <RequestButton />
        </Grid>
      </Grid>
      <Grid
        sx={{ flexGrow: 1 }}
        container
        justifyContent="space-around"
        spacing={4}
      >
        {requests?.map((info) => {
          return (
            <Grid item>
              <RequestsCard {...info} />
            </Grid>
          );
        })}
      </Grid>
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPage}
      />
    </>
  );
};

export default RequestSection;
