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
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Fab,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";
import { CssBaseline } from "@mui/material";
import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import DateTime from "./components/DateTime";
import axios from "axios";

// import ShowTaskList from './components/ShowTaskList';
// import ShowBookDetails from './components/ShowTaskDetails';
// import UpdateTaskInfo from './components/UpdateTaskInfo';

function Bar(props) {
  return (
    <AppBar>
      <Toolbar>
        <Typography ml={23} variant="h5" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function SideNav(props) {
  return (
    <Drawer variant="permanent">
      <Box p={2} textAlign="center">
        <Typography p={1} variant="h5">
          Navigation
        </Typography>
        <Divider variant="middle" />
        <Stack mt={2} spacing={2}>
          <Button size="medium" variant="outlined" startIcon={<BarChart />}>
            Dashboard
          </Button>

          <Button
            sx={{ flexGrow: 1 }}
            size="medium"
            variant="outlined"
            color="error"
            startIcon={<CloseIcon />}
          >
            Sign Out
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
function Tasks(props) {
  function clearTasks() {}
  return (
    <Card sx={{ minWidth: 350, mx: 5, mt: 5 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 25, pb: 2 }}
          textAlign="center"
          variant="subtitle2"
        >
          Upcoming Tasks
        </Typography>
        <Task tasks={props.tasks} />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Fab onClick={clearTasks} color="primary" aria-label="clear">
          <CheckIcon />
        </Fab>
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
      sx={{ width: 350, height: 300, py: 2, pl: 5 }}
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
      <Paper sx={{ width: 375, height: 325 }} elevation={3}>
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
  console.log(props.tasks);
  let taskList = props.tasks.tasks;

  return (
    <Stack direction={"column"}>
      {taskList.map(({ name, id, due_date }) => (
        <Stack direction={"row"} alignItems="center">
          <Checkbox size="small" />
          <Typography variant="h6" key={id}>
            {name}{" "}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

function Panel(props) {
  let taskList = props.tasks.tasks;

  return (
    <CssBaseline>
      <Paper sx={{ mt: 6 }}>
        <Stack>
          <Grid container textAlign={"center"} columns={5}>
            <Grid item xs={1} sx={{ mb: 1 }}>
              <Typography textAlign={"center"} variant={"h4"}>
                Name
              </Typography>{" "}
              <Divider />
            </Grid>
            <Grid item xs={1} sx={{ mb: 1 }}>
              <Typography textAlign={"center"} variant={"h4"}>
                Category
              </Typography>{" "}
              <Divider />
            </Grid>
            <Grid item xs={1} sx={{ mb: 1 }}>
              <Typography textAlign={"center"} variant={"h4"}>
                Due Date
              </Typography>{" "}
              <Divider />
            </Grid>
            <Grid item xs={1} sx={{ mb: 1 }}>
              <Typography textAlign={"center"} variant={"h4"}>
                Priority
              </Typography>
              <Divider />
            </Grid>{" "}
            <Grid item xs={1} sx={{ mb: 1 }}>
              <Typography textAlign={"center"} variant={"h4"}>
                Actions
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={1}>
              {taskList.map(({ name }) => (
                <Typography variant={"h5"} sx={{ my: 1 }}>
                  {name}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={1}>
              {taskList.map(({ category }) => (
                <Typography variant={"h5"} sx={{ my: 1 }}>
                  {category}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={1}>
              {taskList.map(({ due_date }) => (
                <Typography variant={"h5"} sx={{ my: 1 }}>
                  {due_date}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={1}>
              {taskList.map(({ priority }) => (
                <Typography variant={"h5"} sx={{ my: 1 }}>
                  {priority}
                </Typography>
              ))}
            </Grid>{" "}
            <Grid item xs={1}>
              {taskList.map(({ _id }) => (
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ my: 2,}}
                >
                  <Typography>{_id}</Typography>
                  <EditButton id={_id} />
                  <DeleteButton id={_id} />
                </Stack>
              ))}{" "}
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </CssBaseline>
  );
}

function AddButton(props) {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = useState({
    name: "",
    category: "",
    due_date: "",
    priority: 0,
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/tasks", task)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        size="large"
        sx={{ mx: 2 }}
      >
        Add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            name="name"
            fullWidth
            variant="standard"
            value={task.name}
            onChange={handleChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name="category"
            label="Category"
            fullWidth
            variant="standard"
            value={task.category}
            onChange={handleChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name="due_date"
            fullWidth
            type={"date"}
            variant="standard"
            value={task.due_date}
            onChange={handleChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name="priority"
            fullWidth
            label="Priority"
            type={"number"}
            variant="standard"
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function EditButton(props) {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = useState({
    name: "",
    category: "",
    due_date: "",
    priority: 0,
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/tasks/" + props.id, task)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        size="medium"
        color="secondary"
        sx={{ mx: 2 }}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            name="name"
            fullWidth
            variant="standard"
            value={task.name}
            onChange={handleChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name="category"
            label="Category"
            fullWidth
            variant="standard"
            value={task.category}
            onChange={handleChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name="due_date"
            fullWidth
            type={"date"}
            variant="standard"
            value={task.due_date}
            onChange={handleChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name="priority"
            fullWidth
            label="Priority"
            type={"number"}
            variant="standard"
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function DeleteButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        size="medium"
        sx={{ mx: 2 }}
        color="error"
      >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function Buttons(props) {
  return (
    <Stack direction={"row"} justifyContent={"center"} sx={{ mt: 2, ml: 17 }}>
      <AddButton />
      {/* <EditButton />
      <DeleteButton /> */}
    </Stack>
  );
}

function Body(props) {
  const [tasks, setTasks] = useState({});

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => {
        setTasks({ tasks: res.data });
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error from Dash Load");
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log(tasks);

  return (
    <Stack>
      <Grid container sx={{ ml: 17 }}>
        <Grid item>
          <Tasks tasks={tasks} />
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <DateTime />
        </Grid>
        <Grid item>
          <Schedule />
        </Grid>
      </Grid>
      <Panel tasks={tasks} />
      <Buttons />
    </Stack>
  );
}

function Dash(props) {
  const [tasks, setTasks] = useState({});

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => {
        setTasks({ tasks: res.data });
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error from Dash Load");
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log(tasks);

  return (
    <Box>
      <SideNav />
      <Container sx={{ mt: 8 }} maxWidth={false}>
        <Bar />
        <Body tasks={tasks} />
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
