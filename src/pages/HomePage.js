import React, { useState, useEffect } from "react";
import requestsActions from "../redux/actions/requests.action";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';

import Filter from "../components/Filter";
import EmergencyCard from "../components/EmergencyCard";
import RequestsCard from "../components/RequestCard";
import RequestButton from "../components/RequestButton";
import PaginationBar from "../components/Pagination";

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

      <RequestButton />
      <Grid
        sx={{ flexGrow: 1 }}
        container
        justifyContent='space-around'
        spacing={4}
      >
        {requests?.map((r) => {
          return (
            <Grid item>
              <RequestsCard />
            </Grid>
          );
        })}
      </Grid>
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPage}
      />
    </div>
  );
};

export default HomePage;
