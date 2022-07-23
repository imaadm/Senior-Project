import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BarChart } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Divider,
  Drawer,
  Stack,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Fab,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";
import { CssBaseline } from "@mui/material";
import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DateTime from "./components/DateTime";
import axios from "axios";

// import ShowTaskList from './components/ShowTaskList';
// import ShowBookDetails from './components/ShowTaskDetails';
// import UpdateTaskInfo from './components/UpdateTaskInfo';

function Bar(props) {
  let navigate = useNavigate();
  function onExit() {
    localStorage.setItem("userInfo", "");
    localStorage.setItem("isAuthenticated", false);

    navigate("/login", { replace: true });
  }
  return (
    <AppBar>
      <Toolbar>
        <Typography  variant="h5" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <Button
          size="medium"
          variant="filled"
          color="error"
          startIcon={<CloseIcon />}
          onClick={{onExit}}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function SideNav(props) {
  let navigate = useNavigate();
  function onExit() {
    localStorage.setItem("userInfo", "");
    localStorage.setItem("isAuthenticated", false);

    navigate("/login", { replace: true });
  }
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
            onClick={onExit}
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
        <Stack direction={"row"}>
          <Task tasks={props.tasks} />{" "}
        </Stack>
      </CardContent>
      {/* <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Fab onClick={clearTasks} color="primary" aria-label="clear">
          <CheckIcon />
        </Fab>
      </CardActions> */}
    </Card>
  );
}
function Task(props) {
  // const [isChecked, setIsChecked] = useState(false);
  // const [idList, setIdList] = useState("");

  let taskList = props.tasks.tasks;
  taskList.sort(function (a, b) {
    const date1 = new Date(a.due_date);
    const date2 = new Date(b.due_date);

    return date1 - date2;
  });
  return (
    <Stack direction={"column"}>
      {taskList.map(({ name, _id }) => (
        <Stack direction={"row"} alignItems="center" id={_id}>
          {/* <Checkbox
            size="small"
            onClick={function taskClick() {
              setIsChecked(!isChecked);
              console.log({ _id });
              setIdList(idList.concat({ _id }));
            }}
          /> */}
          <Typography variant="h6" key={_id}>
            {name}
          </Typography>{" "}
          <Typography variant="h6">Due in</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
function CalCard(props) {
  let color = "lightblue";
  // console.log(props.id);
  if (props.id === 0) color = "lightgreen";
  for (let i = 0; i < props.hasTask.length; i++) {
    if (props.hasTask[i] === props.id) color = "tomato";
  }

  return <Card sx={{ width: 25, height: 25, backgroundColor: color }}></Card>;
}

function CalGrid(props) {
  let hasTask = [];
  let taskList = props.tasks.tasks;
  taskList.sort(function (a, b) {
    const date1 = new Date(a.due_date);
    const date2 = new Date(b.due_date);

    return date1 - date2;
  });
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  for (let i = 0; i < 28; i++) {
    if (taskList[i]) {
      let taskDay = new Date(taskList[i].due_date);
      const diffTime = Math.abs(currentDate - taskDay);
      const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
      if (diffDays > 0 && diffDays < 29) {
        hasTask.push(diffDays);
      } else hasTask.push(-1);
    }
  }

  return (
    <Grid
      container
      sx={{ width: 350, height: 300, py: 2, pl: 5 }}
      spacing={0}
      columns={7}
    >
      <Grid item xs={1}>
        <CalCard id={0} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={1} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={2} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={3} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={4} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={5} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={6} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={7} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={8} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={9} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={10} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={11} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={12} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={13} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={14} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={15} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={16} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={17} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={18} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={19} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={20} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={21} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={22} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={23} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={24} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={25} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={26} hasTask={hasTask} />
      </Grid>
      <Grid item xs={1}>
        <CalCard id={27} hasTask={hasTask} />
      </Grid>
    </Grid>
  );
}

function Schedule(props) {
  return (
    <Container sx={{ mt: 4, }}>
      <Paper sx={{ width: 375, height: 325 }} elevation={3}>
        <Typography
          sx={{ pt: 2 }}
          variant="subtitle2"
          fontSize={20}
          textAlign={"center"}
        >
          Calendar
        </Typography>
        <CalGrid tasks={props.tasks} />
      </Paper>
    </Container>
  );
}

function Panel(props) {
  let taskList = props.tasks.tasks;
  taskList.sort(function (a, b) {
    const date1 = new Date(a.due_date);
    const date2 = new Date(b.due_date);

    return date1 - date2;
  });
  // console.log(taskList);

  for (let i = 0; i < taskList.length; i++) {
    taskList[i].due_date = taskList[i].due_date.substring(0, 10);
  }

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
                  sx={{ my: 1 }}
                >
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
    key: localStorage.getItem("userInfo"),
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/tasks", task)
      .then(function (res) {
        window.location.reload();
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
    name: props.name,
    category: props.category,
    due_date: props.due_date,
    priority: props.priority,
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/tasks/" + props.id, task)
      .then(function (res) {
        window.location.reload();
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
        size="small"
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:5000/api/tasks/" + props.id)
      .then(function (res) {
        window.location.reload();
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
        size="small"
        color="error"
        sx={{ mx: 2 }}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Task</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this task?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function Buttons(props) {
  return (
    <Stack direction={"row"} justifyContent={"center"} sx={{ mt: 2,}}>
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
      .get(
        "http://localhost:5000/api/tasks/" + localStorage.getItem("userInfo")
      )
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
      <Grid container >
        <Grid item>
          <Tasks tasks={tasks} />
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <DateTime />
        </Grid>
        <Grid item>
          <Schedule tasks={tasks} />
        </Grid>
      </Grid>
      <Panel tasks={tasks} />
      <Buttons />
    </Stack>
  );
}

function Dash(props) {
  return (
    <Box>
      <Container sx={{ mt: 8 }} maxWidth={false}>
        <Bar />
        <Body />
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
