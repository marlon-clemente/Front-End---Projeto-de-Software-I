import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DataContext from '../../context/Data';
import moment from 'moment';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row({ row, type }) {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const [ticketHistory, setTicketHistory] = useState([]);
  const { fetchTicketHistory } = useContext(DataContext);

  const handleOpen = () => {
    setOpen(!open)
    if (!open)
      fetchTicketHistory({ ticketId: row.id, classroomSlug: row.slug }, ({ data }, error) => {
        if (error)
          console.log(error);
        
        setTicketHistory(data);
        console.log(ticketHistory)
      });
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleOpen}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {
          type === 'users'
            ? (
              <>
                <TableCell component="th" scope="row">{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
              </>
            ) : type === 'classrooms' 
              ? (
                <>
                  <TableCell>{row.identifier}</TableCell>
                  <TableCell>{row.slug}</TableCell>
                  <TableCell align="right">{moment(row.created_at).format('DD/MM/YYYY')}</TableCell>
                </>
              )
              : (
                <>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>{row.identifier}</TableCell>
                  <TableCell align="right">{moment(row.created_at).format('DD/MM/YYYY')}</TableCell>
                </>
              )
        }
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
              <Box>
                {
                  type === 'users' || type === 'classrooms'
                    ? (
                      <>
                        <Typography variant="h6" gutterBottom component="span">
                          Tickets
                        </Typography>
                        <Typography 
                          variant="h6" 
                          gutterBottom component="span" 
                          style={{ float: 'right' }} 
                          title="Total de Tickets"
                        >
                          {row.tickets?.length}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography variant="h6" gutterBottom component="span">
                          Histórico de Atividades
                        </Typography>
                        <Typography 
                          variant="h6" 
                          gutterBottom component="span" 
                          style={{ float: 'right' }} 
                          title="Total de Tickets"
                        >
                          {row.historics?.length}
                        </Typography>
                      </>
                    )
                }
              </Box>
              </Typography>
              {
                row.tickets?.length
                  ? (
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>Título</TableCell>
                          <TableCell>Descrição</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.tickets.map((ticket, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">{ticket.title}</TableCell>
                            <TableCell>{ticket.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : ticketHistory.length
                      ? (
                        <Table size="small" aria-label="purchases">
                          <TableHead>
                            <TableRow>
                              <TableCell>Situação</TableCell>
                              <TableCell>Descrição</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {ticketHistory.map((history, index) => (
                              <TableRow key={index}>
                                <TableCell component="th" scope="row">{history.situation}</TableCell>
                                <TableCell>{history.description}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        type === 'users'
                          ? (<Box>Esse usuário ainda não reportou nenhum ticket.</Box>)
                          : type === 'classrooms' 
                            ? (<Box>Sala de aula sem tickets vinculados.</Box>)
                            : (<Box>Ticket sem atividades.</Box>)
                      )
              }
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ content, type }) {
  console.log(content)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {
              type === 'users'
                ? (
                  <>
                    <TableCell>Nome</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell align="right">Tipo</TableCell>
                  </>
                ) : type === 'classrooms' 
                  ? (
                    <>
                      <TableCell>Sala</TableCell>
                      <TableCell>Identificador</TableCell>
                      <TableCell align="right">Criado em</TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>Título</TableCell>
                      <TableCell>Descrição</TableCell>
                      <TableCell>Usuário</TableCell>
                      <TableCell>Sala</TableCell>
                      <TableCell align="right">Criado em</TableCell>
                    </>
                  )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {content && content.map((row) => (
            <Row key={row.email} row={row} type={type} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}