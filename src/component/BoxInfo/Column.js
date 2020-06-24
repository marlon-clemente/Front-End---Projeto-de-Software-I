import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextField } from '@material-ui/core';
import Table from '../Table';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& svg': {
//       margin: theme.spacing(1.5),
//     },
//     '& hr': {
//       margin: theme.spacing(0, 0.5),
//     },
//   }
// }))
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BoxDefault() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Usuários" />
          <Tab label="Salas" />
          <Tab label="Tickets" />
        </Tabs>
      </AppBar>
      <Box p={4}>
        <TextField type="search" placeholder="Pesquisar" />
      </Box>
      <TabPanel value={value} index={0}>
        <Table />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
