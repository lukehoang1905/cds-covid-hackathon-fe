import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import requestsActions from "../../redux/actions/requests.action";

const RequestDetailPage = () => {
  const params = useParams();
  const requestId = params._id;
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

  return (
    <Container>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Row className="border border-info mt-5">
          <Col md={8}>
            {request && (
              <img
                className="w-100"
                src={request.imageLink}
                alt="family's pics"
              />
            )}
          </Col>
          <Col md={4}>
            {request && (
              <>
                <h2>{request.title}</h2>
                <div>
                  <strong>Something:</strong> {request.sth}
                </div>
                <div>
                  <strong>Something:</strong> {request.sth}
                </div>
                <div>
                  <strong>Something:</strong> {request.sth}
                </div>
                <div>
                  <strong>Something:</strong> {request.sth}
                </div>
                <div>
                  <strong>Something:</strong> {request.sth}
                </div>
                <Button onClick={() => getDistricDetail(request)}>
                  View Ward {request.address.ward}
                </Button>{" "}
              </>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default RequestDetailPage;
