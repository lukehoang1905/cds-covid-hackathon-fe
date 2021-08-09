import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = () => {
  const classes = useStyles();
  const [helpTarget, setHelpTarget] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [problem, setProblem] = React.useState("");

  const handleChangeTarget = (event) => {
    setHelpTarget(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeProblem = (event) => {
    setProblem(event.target.value);
  };

  return (
    <div>
      <p>
        I want to see
        <FormControl variant='filled' className={classes.formControl}>
          <InputLabel id='demo-simple-select-filled-label'>
            Help Target
          </InputLabel>
          <Select
            labelId='demo-simple-select-filled-label'
            id='demo-simple-select-filled'
            value={helpTarget}
            onChange={handleChangeTarget}
          >
            <MenuItem value='users'>Families</MenuItem>
            <MenuItem value='ward'>Ward</MenuItem>
            <MenuItem value='district'>District</MenuItem>
            <MenuItem value='requests'>Help requests</MenuItem>
          </Select>
        </FormControl>
        from
        <FormControl variant='filled' className={classes.formControl}>
          <InputLabel id='demo-simple-select-filled-label'>Location</InputLabel>
          <Select
            labelId='demo-simple-select-filled-label'
            id='demo-simple-select-filled'
            value={location}
            onChange={handleChangeLocation}
          >
            <MenuItem value='1'>District 1</MenuItem>
            <MenuItem value='2'>District 2</MenuItem>
            <MenuItem value='3'>District 3</MenuItem>
            <MenuItem value='4'>District 4</MenuItem>
            <MenuItem value='5'>District 5</MenuItem>
            <MenuItem value='7'>District 7</MenuItem>
            <MenuItem value='9'>District 9</MenuItem>
            <MenuItem value='10'>District 10</MenuItem>
            <MenuItem value='binh thanh'>Binh Thanh District</MenuItem>
          </Select>
        </FormControl>
        that has problems with
        <FormControl variant='filled' className={classes.formControl}>
          <InputLabel id='demo-simple-select-filled-label'>Problems</InputLabel>
          <Select
            labelId='demo-simple-select-filled-label'
            id='demo-simple-select-filled'
            value={problem}
            onChange={handleChangeProblem}
          >
            <MenuItem value=''>Everything</MenuItem>
            <MenuItem value='consumables'>Consumables</MenuItem>
            <MenuItem value='cash'>Cash</MenuItem>
            <MenuItem value='clothing'>Clothing</MenuItem>
            <MenuItem value='shelter'>Shelter</MenuItem>
          </Select>
        </FormControl>
      </p>
    </div>
  );
};

export default Filter;
