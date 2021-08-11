import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useDispatch } from "react-redux";
import authActions from "../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Helpstarter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    password: "",
    number: "",
    streetName: "",
    ward: "",
    district: "",
    city: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRouteLogin = () => {
    history.push("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const submitForm = {
      name: user.name,
      address: {
        number: user.number,
        streetName: user.streetName,
        ward: user.ward,
        city: user.city,
        district: user.district,
      },
      phone: user.phone,
    };
    dispatch(authActions.register(submitForm));
    console.log("create user", submitForm);
  };

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='name'
                name='name'
                variant='outlined'
                required
                fullWidth
                id='name'
                label='Họ và Tên'
                autoFocus
                onChange={onChange}
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
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Mật khẩu'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='number'
                label='Số nhà'
                id='number'
                autoComplete='current-number'
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='streetName'
                label='Đường'
                id='streetName'
                autoComplete='current-streetName'
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleRegister}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link
                style={{ cursor: "pointer" }}
                variant='body2'
                onClick={handleRouteLogin}
              >
                Already have an account? Sign in
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
}
