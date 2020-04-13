import React from 'react'
import AppBar from '../../component/AppBarUser';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Styles from '../../styles';

export default function Home() {
    const c = Styles();
    return (
        <div className={c.root}>
            <AppBar />
            <div className={c.appBarSpacer} />
            <Container><Grid>

            </Grid></Container>         
        </div>
    )
}
