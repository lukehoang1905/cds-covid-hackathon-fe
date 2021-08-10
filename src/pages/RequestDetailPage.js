import React, { useEffect } from "react";
// import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import requestsActions from "../redux/actions/requests.action";
import RequestDetailView from "../components/RequestDetail";
import "../App.css";

const RequestDetailPage = () => {
  const params = useParams();
  const requestId = params.id;
  const state = useSelector((state) => state);
  const loading = state.requestsReducer.loading;
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
        <RequestDetailView />
      )}
    </>
  );
};

export default RequestDetailPage;
