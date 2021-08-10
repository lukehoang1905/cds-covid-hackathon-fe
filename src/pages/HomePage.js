import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import requestsActions from "../redux/actions/requests.action";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Row, Col } from "react-bootstrap";

import Filter from "../components/Filter";
import EmergencyCard from "../components/EmergencyCard";
import RequestsCard from "../components/RequestCard";

const HomePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const totalPage = 3;
  const limit = 10;

  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(setErrorMessage);
  const history = useHistory();

  const handleClickProduct = (productId) => {
    history.push(`/products/${productId}`);
  };

  function handleClick() {
    history.push("/request");
  }
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    console.log("this submit", searchInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestsActions.getRequests(pageNum, limit, query));
  }, [dispatch, pageNum, limit, query]);

  const state = useSelector((state) => state);
  const requests = state.requestsReducer.requests;
  const loading = state.requestsReducer.loading;

  return (
    <div>
      <EmergencyCard />
      <Filter />
      <Button variant='contained' onClick={handleClick}>
        Bạn cần giúp đỡ?
      </Button>
      {requests.map((r) => {
        return (
          <div style={{ width: '100%' }}>


            <Grid container spacing={2}>
              <Box display="flex" flexDirection="row" p={1} m={1}>
                <Grid item xs={12} >
                  <RequestsCard />
                </Grid>
              </Box>
            </Grid>


          </div>

        )

      })}

    </div >
  );
};

export default HomePage;
