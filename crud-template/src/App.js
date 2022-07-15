import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  AccountCircle,
  BarChart,
  HorizontalRule,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Menu,
  Paper,
  Stack,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Checkbox,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";
import { CssBaseline } from "@mui/material";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

function BackendTestBar(props) {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Box>
  );
}

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
    <Card sx={{ minWidth: 300, mx: 5, mt: 5 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 18, pb: 2 }}
          textAlign="center"
          variant="subtitle2"
        >
          Current Tasks
        </Typography>
        <Task />
        <Task />
        <Task />
      </CardContent>
      <CardActions>
        <Button size="small">Add Task</Button>
      </CardActions>
    </Card>
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

function Body(props) {
  return (
    <Grid container sx={{ minWidth: 100 }}>
      <Grid item>
        <Tasks />
      </Grid>
      {/* <Grid item>
        <Tasks />
      </Grid> */}
    </Grid>
  );
}

function App() {
  return (
    <Box>
      <SideNav />
      <Container sx={{ ml: 16, mt: 8 }}>
        <Bar />
        <Body />
      </Container>
    </Box>
  );
}

export default App;
