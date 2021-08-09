import React, { useState, useEffect } from "react";
import requestsActions from "../../redux/actions/requests.action";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import EmergencyCard from "../../components/EmergencyCard"
import RequestsCard from "../../components/RequestCard/RequestCard"


const HomePage = () => {

    const [pageNum, setPageNum] = useState(1);
    const totalPage = 3
    const limit = 10;

    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    console.log(setErrorMessage)
    const history = useHistory();

    const handleClickProduct = (productId) => {
        history.push(`/products/${productId}`);
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        console.log("this submit", searchInput)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchInput);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestsActions.getRequests(pageNum, limit, query));
    }, [dispatch, pageNum, limit, query]);

    const state = useSelector(state => state)
    const requests = state.requestsReducer.requests
    const loading = state.requestsReducer.loading

    return (
        <div>
           <EmergencyCard/>
           <RequestsCard/>
        </div>

    );
};

export default HomePage;
