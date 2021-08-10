import moment from "moment";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import requestsActions from "../redux/actions/requests.action";
import { useEffect } from "react";

const LatestDeliveries = ({ storeName, storeId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestsActions.getRequests(1, 100));
  }, [dispatch]);
  let requests = useSelector((state) => state.requestsReducer.requests);
  console.log("...", requests);
  if (!storeName || !storeId) {
    return <>...loading</>;
  }

  return (
    <>
      {requests ? (
        <Card>
          <CardHeader title="" />
          <Divider />
          <PerfectScrollbar>
            <Box sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Address</TableCell>

                    {Object.keys(requests[0].requestReceive).map((el, idx) => (
                      <TableCell key={el + idx}>{el}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow hover key={request._id}>
                      <TableCell>{request.from.name}</TableCell>
                      <TableCell>{request.from.phone}</TableCell>
                      <TableCell>{request.from.address.streetName}</TableCell>
                      {request.requestSchedule.map((el) => (
                        <TableCell>{el.value || 0}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button
              color="primary"
              endIcon={<ArrowRightIcon />}
              size="small"
              variant="text"
            >
              View all
            </Button>
          </Box>
        </Card>
      ) : (
        <>..loading</>
      )}
    </>
  );
};
export default LatestDeliveries;
