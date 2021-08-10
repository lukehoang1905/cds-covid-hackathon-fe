import React, { useEffect } from "react";
// import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import requestsActions from "../redux/actions/requests.action";
import RequestDetail from "../components/requestDetail/RequestDetail";

const RequestDetailPage = () => {
  const params = useParams();
  const requestId = params.id;
  console.log("idididididididid", requestId);
  const state = useSelector((state) => state);
  const loading = state.requestsReducer.loading;
  const request = state.requestsReducer.selectedRequest;
  console.log(request);
  console.log(loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestsActions.getRequestDetail(requestId));
  }, [requestId, dispatch]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <RequestDetail request={request} requestId={requestId} />
      )}
    </>
  );
};

export default RequestDetailPage;
