import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container, Typography, Grid, Chip } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import hubActions from "../redux/actions/hub.actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    borderTop: "1px solid RGB(220, 222, 221)",
    borderBottom: "1px solid RGB(220, 222, 221)",
    maxWidth: "100%",
  },
  grid: {
    height: "300px",
  },
  chip: {
    marginLeft: "10px",
  },
}));

const Filter = () => {
  const classes = useStyles();
  const [helpTarget, setHelpTarget] = useState("");
  const [location, setLocation] = useState("");
  const [problem, setProblem] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeTarget = (event) => {
    setHelpTarget(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeProblem = (event) => {
    setProblem(event.target.value);
  };

  useEffect(() => {
    dispatch(hubActions.getHubs());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const hubs = state.hubReducer.hub;

  return (
    <Container className={classes.container}>
      <Grid
        className={classes.grid}
        container
        alignItems="center"
        direction="row"
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          xs={12}
        >
          <Typography variant="h4">Hubs: </Typography>
          {hubs?.map((info) => {
            return (
              <Grid item xs={0.5}>
                <Chip
                  className={classes.chip}
                  label={info.name}
                  component="a"
                  clickable
                  onClick={() => {
                    history.push(`/hub/${info._id}`);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          xs={12}
        >
          <Typography variant="h4">I want to see</Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Postings
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={helpTarget}
              onChange={handleChangeTarget}
            >
              <MenuItem value="users">Families</MenuItem>
              <MenuItem value="ward">Ward</MenuItem>
              <MenuItem value="district">District</MenuItem>
              <MenuItem value="requests">Help requests</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h4">from</Typography>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={location}
              onChange={handleChangeLocation}
            >
              <MenuItem value="1">District 1</MenuItem>
              <MenuItem value="2">District 2</MenuItem>
              <MenuItem value="3">District 3</MenuItem>
              <MenuItem value="4">District 4</MenuItem>
              <MenuItem value="5">District 5</MenuItem>
              <MenuItem value="7">District 7</MenuItem>
              <MenuItem value="9">District 9</MenuItem>
              <MenuItem value="10">District 10</MenuItem>
              <MenuItem value="binh thanh">Binh Thanh District</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h4">that has problems with</Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Problems
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={problem}
              onChange={handleChangeProblem}
            >
              <MenuItem value="">Everything</MenuItem>
              <MenuItem value="consumables">Consumables</MenuItem>
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="shelter">Shelter</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Filter;
