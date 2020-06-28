import React, { useState, useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextField } from '@material-ui/core';
import Table from '../Table';
import moment from 'moment';
import DataContext from '../../context/Data';

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
    backgroundColor: theme.palette.background.default,
  },
}));

export default function Report() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState('');
  const [startDate, setStartDate] = useState(moment().subtract(1, 'month').format('YYYY-MM-DD'));
  const [finishDate, setFinishDate] = useState(moment().add(1, 'day').format('YYYY-MM-DD'));

  const { 
    schoolUsers,
    classrooms,
    tickets,
    fetchSchoolUsers,
    fetchClassrooms,
    fetchTickets
  } = useContext(DataContext);

  const getSchoolUsers = () => {
    fetchSchoolUsers((res, error) => {
      if (error)
        console.log(error)
    });
  };

  useEffect(() => {
    getSchoolUsers();
  }, []);

  const getTickets = async() => {
    await fetchTickets({
      title: filter,
      startDate,
      finishDate
    }, (res, error) => {
      if (error)
        console.log(error);
      else
        console.log(res);
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === 0)
      getSchoolUsers();
    else if (value === 1)
      fetchClassrooms();
    else
      getTickets();
  }, [value, filter, startDate, finishDate])

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Usuários" />
          <Tab label="Salas" />
          <Tab label="Tickets" />
        </Tabs>
      </AppBar>
      <Box p={4}>
        <TextField 
          label="Pesquisar"
          type="search"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
        {value === 0 ? <></> : (
          <>
            <TextField
              label="Início"
              type="date"
              defaultValue={startDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={event => setStartDate(event.target.value)}
            />
            <TextField
              label="Fim"
              type="date"
              defaultValue={finishDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={event => setFinishDate(event.target.value)}
            />
          </>
        )}
      </Box>
      <TabPanel value={value} index={0}>
        <Table content={schoolUsers && schoolUsers} type="users" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table content={classrooms && classrooms} type="classrooms" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Table content={tickets && tickets} type="tickets" />
      </TabPanel>
    </div>
  );
}
