import React from 'react';
import AppBar from '../../component/AppBarUser';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddCommentIcon from '@material-ui/icons/AddComment';
import UserCard from '../../component/UserCard';
import CardVazio from './CardVazio';
import Styles from '../../styles';

export default function Home() {
    const c = Styles();
    var msgVazia = true;
    return (
        <div className={c.root}><div className={c.content}>
            <AppBar />
            <div className={c.appBarSpacer} />
            <Container maxWidth="xl"><Grid container direction="row-reverse" spacing={4}> 
                <Grid item xl={3} lg={12} md={12} sm={12} xs={12}>
                    <UserCard />        
                </Grid>
                <Grid item xl={8} lg={12} md={12} sm={12} xs={12}>
                      {
                        msgVazia ? ( <CardVazio /> ) : ( <h1> Não </h1> )
                      }      
                </Grid>
            </Grid>
            <Fab color="secondary" className={c.fab}>
                <AddCommentIcon />
            </Fab>
            </Container>
        </div></div>
    )
}
