import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";

import LatestDeliveries from "../components/LatestDeliveries";
import HelpChart from "../components/HelpChart";
import Progress from "../components/Progress";
import TotalHelps from "../components/TotalHelps";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import hubActions from "../redux/actions/hub.actions";

const HubDetailPage = () => {
  const { id } = useParams();

  const isLoading = useSelector((state) => state.hubReducer.hub);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hubActions.getHubDetail(id));
  }, [id, dispatch]);

  return (
    <>
      {!isLoading ? (
        <>
          {" "}
          <Helmet>
            <title>Hub Page</title>
          </Helmet>
          <Box
            sx={{
              backgroundColor: "background.default",
              minHeight: "100%",
              py: 3,
            }}
          >
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <Progress
                    style={{
                      flex: "1 1 auto",
                      height: "100%",
                      overflow: "auto",
                    }}
                  />
                </Grid>
                <Grid item lg={6} md={12} xl={20} xs={12}>
                  <HelpChart />
                </Grid>
                <Grid item lg={20} md={12} xl={20} xs={12}>
                  <LatestDeliveries />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default HubDetailPage;
