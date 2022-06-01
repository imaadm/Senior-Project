import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AccountCircle, BarChart, Settings } from '@mui/icons-material';
import { AppBar, Divider, Drawer, IconButton, Menu, Stack, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';

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
      <AppBar position='static'>
        <Toolbar>
          <Typography ml={24} variant="h6" sx={{ flexGrow: 1 }}>
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

function Nav(props) {
  return (
    <Drawer variant="permanent">
      <Box p={2} width={200} textAlign="center">
        <Typography p={1} variant='h6'>Navigation</Typography>
        <Divider variant='middle' />
        <Stack mt={2} spacing={2}>
          <Button variant="outlined" startIcon={<BarChart />}>Dashboard</Button>
          <Button variant="outlined" color='secondary' startIcon={<Settings />} >Settings</Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
function Body(props) {
  return (
    <Box height={'100vh'} display={'flex'} justifyContent='center' alignItems={'center'}>
      <BackendTestBar />
    </Box>
  );
}

function App() {
  return (
    <Box>
      <Bar />
      <Nav />
      <Body/>
    </Box>
  );
}

export default App;
