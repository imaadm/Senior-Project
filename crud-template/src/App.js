import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  AccountCircle,
  BarChart,
  Settings,
  Menu,
  Add,
  Remove,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Paper,
  Tabs,
  TabPanel,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";
import { CssBaseline } from "@mui/material";
import React from "react";
import { useState } from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateTask from "./components/CreateTask";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

// import ShowTaskList from './components/ShowTaskList';
// import ShowBookDetails from './components/ShowTaskDetails';
// import UpdateTaskInfo from './components/UpdateTaskInfo';

function Bar(props) {
  return (
    <CssBaseline>
      <AppBar>
        <Toolbar>
          <Typography ml={20} variant="h6" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
}

function SideNav(props) {
  return (
    <Drawer variant="permanent">
      <Box p={2} textAlign="center">
        <Typography p={1} variant="h6">
          Navigation
        </Typography>
        <Divider variant="middle" />
        <Stack mt={2} spacing={2}>
          <Button size="small" variant="outlined" startIcon={<BarChart />}>
            Dashboard
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            startIcon={<Settings />}
          >
            Settings
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
function Tasks(props) {
  return (
    <Card sx={{ minWidth: 275, mx: 5, mt: 5 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 18, pb: 2 }}
          textAlign="center"
          variant="subtitle2"
        >
          Upcoming Tasks
        </Typography>
        <Task />
        <Task />
        <Task />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <SpeedDial
          direction="left"
          ariaLabel="SpeedDial"
          icon={<SpeedDialIcon icon={<Menu />} />}
        >
          <SpeedDialAction
            key={"del"}
            icon={<SpeedDialIcon icon={<Remove />} />}
            tooltipTitle={"delete"}
          />
          <SpeedDialAction
            key={"edit"}
            icon={<SpeedDialIcon icon={<EditIcon />} />}
            tooltipTitle={"edit"}
          />
          <SpeedDialAction
            key={"add"}
            icon={<SpeedDialIcon icon={<Add />} />}
            tooltipTitle={"add"}
          />
        </SpeedDial>
      </CardActions>
    </Card>
  );
}

function CalCard(props) {
  return (
    <Card
      sx={{ width: 25, height: 25 }}
      style={{ backgroundColor: "lightblue" }}
      onClick={() => {
        alert("✔️ This works on every component!");
      }}
    ></Card>
  );
}

function CalGrid(props) {
  return (
    <Grid
      container
      sx={{ width: 300, height: 270, py: 2, pl: 5 }}
      spacing={0}
      columns={7}
    >
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>{" "}
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
      <Grid item xs={1}>
        <CalCard />
      </Grid>
    </Grid>
  );
}

function Schedule(props) {
  return (
    <Container sx={{ mt: 4, mr: 15 }}>
      <Paper sx={{ width: 325, height: 305 }} elevation={3}>
        <Typography
          sx={{ pt: 2 }}
          variant="subtitle2"
          fontSize={20}
          textAlign={"center"}
        >
          Calendar
        </Typography>
        <CalGrid />
      </Paper>
    </Container>
  );
}

function Task(props) {
  return (
    <Stack direction={"row"} alignItems="center">
      <Checkbox size="small"></Checkbox>
      <Typography sx={{ fontSize: 15 }} variant="body2">
        Example Task
      </Typography>
    </Stack>
  );
}

function Panel(props) {
  return (
    <Paper sx={{ pl: 1, mt: 6 }}>
      <Stack>
        <Typography>Tasks</Typography>
        <Grid container columns={5}>
          <Grid item xs={1}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Category</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Assigned Date</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Due Date</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Priority</Typography>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}

function DateTime(props) {
  return (
    <Stack textAlign={"center"} sx={{}}>
      <Typography>Date</Typography>
      <Typography>Time</Typography>
      <Typography>Due Today:</Typography>
    </Stack>
  );
}

function Body(props) {
  return (
    <Stack>
      <Grid container>
        <Grid item>
          <Tasks />
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <DateTime />
        </Grid>
        <Grid item>
          <Schedule />
        </Grid>
      </Grid>
      <Panel />
    </Stack>
  );
}

function Dash(props) {
  return (
    <Box>
      <SideNav />
      <Container sx={{ ml: 16, mt: 8 }} maxWidth={false}>
        <Bar />
        <Body />
        <Stack direction={"row"} sx={{ ml: 2, mt: 5 }}>
          <CreateTask />
        </Stack>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <ProtectedRoute>
            <Dash />
          // </ProtectedRoute>
        }
      ></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
