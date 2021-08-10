import { Helmet } from "react-helmet";
import { Box, Button, Container, Grid } from "@material-ui/core";

import LatestDeliveries from "../components/LatestDeliveries";
import HelpChart from "../components/HelpChart";
import Progress from "../components/Progress";
import TotalHelps from "../components/TotalHelps";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import hubActions from "../redux/actions/hub.actions";

const HubDetailPage = () => {
  const { id } = useParams();
  const [filterItem, setFilterItem] = useState("rice");
  const isLoading = useSelector((state) => state.hubReducer.isLoading);
  const buttonTags = useSelector((state) => state.hubReducer.buttonTags);
  const dispatch = useDispatch();

  const handleFilterItem = (e) => {
    setFilterItem(e);
  };
  useEffect(() => {
    dispatch(hubActions.getHubDetail(id));
  }, [id, dispatch]);

  const hub = useSelector((state) => state.hubReducer.hub);

  return (
    <>
      {isLoading ? (
        <>....loading</>
      ) : (
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
            <title>Hub Page</title>

            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={5} sm={5} xl={6} xs={12}>
                  <h1>{filterItem}</h1>
                </Grid>
                <Grid item lg={7} sm={7} xl={6} xs={12}>
                  {buttonTags.map((tag, idx) => (
                    <Button
                      key={idx}
                      onClick={() => {
                        handleFilterItem(tag);
                      }}
                    >
                      {tag}
                    </Button>
                  ))}
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps
                    totalType="Request Received"
                    filter={filterItem}
                    data={hub?.requestSchedule}
                  />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps
                    data={hub?.donationSchedule}
                    totalType="Donation Scheduled"
                    filter={filterItem}
                  />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps
                    data={hub?.requestSchedule}
                    totalType="Donation Received"
                    filter={filterItem}
                  />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <Progress
                    style={{
                      flex: "1 1 auto",
                      height: "100%",
                      overflow: "auto",
                    }}
                    filter={filterItem}
                    request={hub?.requestSchedule}
                    donation={hub?.donationActual}
                  />
                </Grid>
                <Grid container spacing={3}>
                  <Grid item lg={6} md={12} xl={20} xs={12}>
                    <HelpChart typeChart="bar" hub={hub} />
                  </Grid>
                  <Grid item lg={6} md={12} xl={20} xs={12}>
                    <HelpChart typeChart="pie" hub={hub} />
                  </Grid>
                </Grid>
                <Grid item lg={20} md={12} xl={20} xs={12}>
                  <LatestDeliveries storeName={hub?.name} storeId={id} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
      )}
    </>
  );
};
export default HubDetailPage;
