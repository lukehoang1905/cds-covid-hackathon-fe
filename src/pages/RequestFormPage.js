import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import { useSelector, useDispatch } from "react-redux";

import requestsActions from "../redux/actions/requests.action";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RequestFormPage = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    covid: false,
    old: false,
    unemployed: false,
    children: false,
    accident: false,
  });
  const [product, setProduct] = React.useState("");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setProduct(event.target.value);
  };

  const { covid, old, unemployed, children, accident } = state;
  const dispatch = useDispatch()
  const [request, setRequest] = useState()
  const handleOnClick = (e) => {
    e.preventDefault()
    dispatch(requestsActions.createRequests(request))
  }

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Request Form
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='Tên'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Họ'
                name='lastName'
                autoComplete='lname'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='phone'
                label='Số điện thoại'
                name='phone'
                autoComplete='phone'
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='address'
                label='Số nhà'
                id='address'
                autoComplete='current-address'
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='street'
                label='Đường'
                id='street'
                autoComplete='current-street'
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='ward'
                label='Phường'
                id='ward'
                autoComplete='current-ward'
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='district'
                label='Quận'
                id='district'
                autoComplete='current-district'
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='city'
                label='Thành phố'
                id='city'
                autoComplete='current-city'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component='fieldset' className={classes.formControl}>
                <FormLabel component='legend'>Tình trạng</FormLabel>

                <Grid
                  item
                  xs={12}
                  container
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <FormControlLabel
                    control={<Checkbox checked={covid} name='covid' />}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                    label='Mắc covid'
                  />
                  <FormControlLabel
                    control={<Checkbox checked={children} name='children' />}
                    onChange={handleChange}
                    label='Có con nhỏ'
                  />
                  <FormControlLabel
                    control={<Checkbox checked={accident} name='accident' />}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                    label='Bị tai nạn'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={unemployed} name='unemployed' />
                    }
                    onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                    label='Thất nghiệp'
                  />
                  <FormControlLabel
                    control={<Checkbox checked={old} name='old' />}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                    label='Có người lớn tuổi'
                  />
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component='fieldset' className={classes.formControl}>
                <FormLabel component='legend'>Tôi cần giúp đỡ</FormLabel>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormControl variant='outlined' fullWidth>
                <InputLabel htmlFor='outlined-age-native-simple'>
                  Nhu yếu phẩm
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label='products'
                  inputProps={{
                    name: "product",
                    id: "outlined-product-native-simple",
                  }}
                >
                  <option aria-label='None' value='' />
                  <option value={10}>Gạo</option>
                  <option value={20}>sữa</option>
                  <option value={30}>Trứng</option>
                  <option value={30}>Nước</option>
                  <option value={30}>Rau</option>
                  <option value={30}>Mì</option>
                  <option value={30}>Xà phòng</option>
                  <option value={30}>Khẩu trang</option>
                  <option value={30}>Chỗ ở</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='quantity'
                label='Số lượng'
                id='quantity'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                multiline={true}
                rows={5}
                id='note'
                label='Ghi chú'
                name='note'
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleOnClick}
          >
            Xác nhận
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Hoặc bạn muốn đóng góp. Vui lòng nhấn vào đây
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default RequestFormPage;
