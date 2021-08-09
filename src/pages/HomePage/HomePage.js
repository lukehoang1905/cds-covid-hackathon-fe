import React, { useState, useEffect } from "react";
import requestsActions from "../../redux/actions/requests.action";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import EmergencyCard from "../../components/EmergencyCard"
import RequestsCard from "../../components/RequestCard/RequestCard"
import Button from '@material-ui/core/Button';


const HomePage = () => {

    const [pageNum, setPageNum] = useState(1);
    const totalPage = 3
    const limit = 10;

    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    console.log(setErrorMessage)
    const history = useHistory();

    function handleClick() {
        history.push("/request");
    }

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
            <Button variant="contained" onClick={handleClick}>Bạn cần giúp đỡ?</Button>
            <EmergencyCard />
            <RequestsCard />
        </div>

    );
};

export default HomePage;
