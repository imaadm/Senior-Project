import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function SignIn() {


  const navigate = useNavigate();
  let users = [];
  let isValid = false;
  axios
    .get("http://localhost:5000/api/users")
    .then((res) => {
      users = res.data;
    })
    .catch((err) => {
      console.log("Error from ShowUserList");
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const currentUser = data.get("currentUser");
    const currentPass = data.get("currentPass");
    console.log({
      currentUser: data.get("currentUser"),
      currentPass: data.get("currentPass"),
    });
    const userKey = String(currentPass) + String(currentUser);
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === currentUser) {
        for (let j = 0; j < users.length; j++) {
          if (users[j].password === currentPass) {
            localStorage.setItem("isAuthenticated", true);
            isValid = true;
            // navigate("/");
          }
        }
      }
    }
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isValid === true){
      localStorage.setItem("userInfo", userKey);
      navigate("/", {replace: true});
      console.log(isAuthenticated);
    }
    else{
      alert("Invalid Login");
    }
    // else
    //   navigate("/login");
    // console.log(isAuthenticated);
    // localStorage.setItem("isAuthenticated", true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="currentUser"
                  required
                  fullWidth
                  id="currentUser"
                  label="Username"
                  autoFocus
                />
              </Grid>

              {/* <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="currentPass"
                  label="Password"
                  type="password"
                  id="currentPass"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button fullWidth variant="contained" href="/register">
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
