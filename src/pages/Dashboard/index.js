import React, { useEffect, useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu2';
import Styles from '../../styles';
import BoxProb from './components/BoxProblemas';
import BoxMsg from './components/BoxMensagens';
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import DataContext from '../../context/Data';
import ErrorDialog from '../../component/DialogModal/Error';
import moment from 'moment';
import Loading from '../../assets/Loading.svg';

export default function Dashboard () {
    const c = Styles();
    const { makeRequest, school: { id_hash: schoolIdHash } } = useContext(DataContext);
    const [error, setError] = useState({});
    const [reportedTicketsData, setReportedTicketsData] = useState({});
    const [reportedTicketsByUserData, setReportedTicketsByUserData] = useState({});
    const [reportedTicketsByClassroomData, setReportedTicketsByClassroomData] = useState({});
    const [reportedTicketsBySituationData, setReportedTicketsBySituationData] = useState({});
    const [registeredUsers, setRegisteredUsers] = useState(null);
    const [registeredClassrooms, setRegisteredClassrooms] = useState(null);
    const [registeredTickets, setRegisteredTickets] = useState(null);

    useEffect(() => {
        makeRequest({ endpoint: `/schools/${schoolIdHash}/reportedTickets?mode=dates` }, ({ data }, error) => {
            if (error)
                setError(error);

            setReportedTicketsData({
                chart: {
                    type: "line"
                },
                title: {
                    text: 'Número de Tickets por Dia'
                },
                xAxis: {
                    categories: [...data.map(d => moment(d.date).format('DD/MM/YYYY'))]
                },
                yAxis: {
                    title: {
                        text: 'Total de Tickets'
                    }
                },
                series: [{
                    name: 'Tickets reportados por dia',
                    data: [...data.map(d => ({
                        y: Number(d.total)
                    }))]
                }]
            });

            setRegisteredUsers(data.length);
        });

        makeRequest({ endpoint: `/schools/${schoolIdHash}/reportedTicketsByUser` }, ({ data }, error) => {
            if (error)
                setError(error);

            setReportedTicketsByUserData({
                chart: {
                    type: "pie"
                },
                title: {
                    text: 'Número de Tickets por Usuário'
                },
                series: [{
                    data: [...data.map(d => ({
                        name: d.username,
                        y: Number(d.total)
                    }))]
                }]
            });

            setRegisteredClassrooms(data.length);
        });

        makeRequest({ endpoint: `/schools/${schoolIdHash}/reportedTicketsByClassroom` }, ({ data }, error) => {
            if (error)
                setError(error);

            setReportedTicketsByClassroomData({
                chart: {
                    type: "pie"
                },
                title: {
                    text: 'Número de Tickets por Sala'
                },
                series: [{
                    data: [...data.map(d => ({
                        name: d.identifier,
                        y: Number(d.total)
                    }))]
                }]
            });
        });

        makeRequest({ endpoint: `/schools/${schoolIdHash}/reportedTicketsBySituation` }, ({ data }, error) => {
            if (error)
                setError(error);

            setReportedTicketsBySituationData({
                chart: {
                    type: "column"
                },
                title: {
                    text: 'Número de Tickets por Situação'
                },
                series: [...data.map(d => ({
                    name: d.situation,
                    data: [{
                        name: d.situation,
                        y: Number(d.total)
                    }]
                }))]
            });

            setRegisteredTickets(data.map(d => d.total).reduce((accumulator, total) => {
                return accumulator + Number(total)
            }, 0));
        });
    }, [])

    return (
        <div className={c.root}>
            <Menu title="Dashboard"/>
            <div className={c.content}>
                <Grid container spacing={4}>
                    <Grid item xl={9} lg={12} md={12} sm={12} xs={12}>
                        <BoxProb />
                    </Grid>
                    <Grid item xl={3} lg={12} md={12} sm={12} xs={12}>
                        <BoxMsg />
                    </Grid>
                </Grid>
            </div>

            <ErrorDialog error={error} onCloseAction={() => setError({})} />
            
            <div className={c.graphs}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <Link href="/problemas" underline="none">
                            <Paper className={[c.paper, c.infoPaper].join(' ')}>
                                <Typography variant="h6" component="h6" color="primary">
                                    Usuários cadastrados
                                </Typography>
                                <Typography variant="h5" style={{ textAlign: registeredUsers ? '' : 'center' }}>
                                    {registeredUsers ? registeredUsers : <img src={Loading} style={{ width: 30 }} />}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Link href="/problemas" underline="none">
                            <Paper className={[c.paper, c.infoPaper].join(' ')}>
                                <Typography variant="h6" component="h6" color="primary">
                                    Salas cadastradas
                                </Typography>
                                <Typography variant="h5" style={{ textAlign: registeredClassrooms ? '' : 'center' }}>
                                    {registeredClassrooms ? registeredClassrooms : <img src={Loading} style={{ width: 30 }} />}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Link href="/problemas" underline="none">
                            <Paper className={[c.paper, c.infoPaper].join(' ')}>
                                <Typography variant="h6" component="h6" color="primary">
                                    Tickes reportados
                                </Typography>
                                <Typography variant="h5" style={{ textAlign: registeredTickets ? '' : 'center' }}>
                                    {registeredTickets ? registeredTickets : <img src={Loading} style={{ width: 30 }} />}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper style={{ display: 'flex' }}>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                {Object.keys(reportedTicketsData).length ? (
                                    <Chart 
                                        highcharts={Highcharts}
                                        options={reportedTicketsData}
                                    />
                                ) : (
                                    <img src={Loading} style={{ width: '15vw' }} />
                                )}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper style={{ display: 'flex' }}>
                            <div style={{ width: '30vw', textAlign: 'center' }}>
                                {Object.keys(reportedTicketsByUserData).length ? (
                                    <Chart 
                                        highcharts={Highcharts}
                                        options={reportedTicketsByUserData}
                                    />
                                ) : (
                                    <img src={Loading} style={{ width: '15vw' }} />
                                )}
                            </div>
                            <div style={{ width: '30vw', textAlign: 'center' }}>
                                {Object.keys(reportedTicketsByClassroomData).length ? (
                                    <Chart 
                                        highcharts={Highcharts}
                                        options={reportedTicketsByClassroomData}
                                    />
                                ) : (
                                    <img src={Loading} style={{ width: '15vw' }} />
                                )}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper style={{ display: 'flex' }}>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                {Object.keys(reportedTicketsBySituationData).length ? (
                                    <Chart 
                                        highcharts={Highcharts}
                                        options={reportedTicketsBySituationData}
                                    />
                                ) : (
                                    <img src={Loading} style={{ width: '15vw' }} />
                                )}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}