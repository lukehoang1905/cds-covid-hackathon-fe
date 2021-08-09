import React, { useState, useEffect } from "react";
import productsActions from "../../redux/actions/products.action";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'


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
        dispatch(productsActions.getProducts(pageNum, limit, query));
    }, [dispatch, pageNum, limit, query]);

    const state = useSelector(state => state)
    const products = state.productsReducer.products
    const loading = state.productsReducer.loading

    return (
        <div>
            <NavigationBar />
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>

                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                        <SearchBar
                            searchInput={searchInput}
                            handleSearchChange={handleSearchInputChange}
                            handleSubmit={handleSubmit}
                        />
                        <hr />
                        <PaginationBar
                            pageNum={pageNum}
                            setPageNum={setPageNum}
                            totalPageNum={totalPage}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {loading ? (
                            <div className="text-center">
                                <ClipLoader color="#f86c6b" size={150} loading={true} />
                            </div>
                        ) : (
                            <ul className="list-unstyled d-flex flex-wrap justify-content-between">
                                {products?.map((product) => (
                                    <li key={product._id} onClick={() => handleClickProduct(product._id)}>
                                        <Card
                                            style={{
                                                width: "16rem",
                                                marginBottom: "2rem",
                                            }}>
                                            <Card.Img
                                                variant="top"
                                                src={`${product.imageUrls.[0]}`}
                                                style={{
                                                    height: 300,
                                                }}
                                            />
                                            <hr className="solid"></hr>
                                            <Card.Body>
                                                <Card.Title
                                                    style={{
                                                        height: 100,
                                                        overflow: "hidden",
                                                        overflowY: "auto",
                                                    }}
                                                >{product.name}</Card.Title>
                                                <Card.Text>{product.price}</Card.Text>
                                                {/* <Nav.Link as={Link} to={`products/${product._id}`}>
                                                View Detail
                                            </Nav.Link> */}

                                            </Card.Body>
                                        </Card>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default HomePage;
