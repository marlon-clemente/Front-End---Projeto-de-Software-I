import React, {useState} from 'react';
import AppBar from '../../component/AppBarUser';
import BoxMsg from './boxMsg';
import NewMsg from './newMsg';
import Styles from './styles';

export default function Home(props) {  
    const classes = Styles();
    const [view, setview] = useState("a")
    console.log(setview);
    return (
        <div className={classes.root}><AppBar/><div
            className={classes.content}>
            { view==="boxMsg" ? <BoxMsg /> : <NewMsg /> }
        </div></div>
    )
}



