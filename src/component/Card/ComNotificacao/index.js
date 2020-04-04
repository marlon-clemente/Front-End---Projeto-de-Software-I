import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


export default function ComNotificacao(props){

    return(
        <div>
            <List>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" />
                    </ListItemAvatar>
                    <ListItemText>
                        {props.texto}
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );
}