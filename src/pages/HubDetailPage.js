import { Helmet } from "react-helmet";
import { Badge, Box, Button, Container, Grid } from "@material-ui/core";

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
  const [filterItem, setFilterItem] = useState("Rice");
  const isLoading = useSelector((state) => state.hubReducer.isLoading);
  const hub = useSelector((state) => state.hubReducer.hub);
  const buttonTags = useSelector((state) => state.hubReducer.buttonTags);
  const dispatch = useDispatch();

  const handleFilterItem = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    setFilterItem(e.target.value);
  };
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
                <Grid item lg={5} sm={5} xl={5} xs={12}>
                  <h1>{filterItem}</h1>
                </Grid>
                <Grid item lg={7} sm={7} xl={7} xs={12}>
                  {buttonTags.map((itemName) => (
                    <Button value={itemName} onClick={handleFilterItem}>
                      {itemName}
                    </Button>
                  ))}
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps hub={hub} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps hub={hub} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalHelps hub={hub} />
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
                  <HelpChart hub={hub} />
                </Grid>
                <Grid item lg={20} md={12} xl={20} xs={12}>
                  <LatestDeliveries hub={hub} />
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
