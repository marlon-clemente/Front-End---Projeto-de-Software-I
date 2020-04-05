import React from 'react';
import BoxAddSala from './component/BoxAddSala';
import BoxSala from './component/BoxSala';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

import salas from '../../temp/sala';

export default function Salas(){
    return(
        <div>
            <Container className="ui-content">
                
                <BoxAddSala />
                <List>
                    {salas.map((item)=>(
                            <BoxSala sala={item}/>
                        ))
                    }
                </List>
            </Container>
        </div>
    );
}