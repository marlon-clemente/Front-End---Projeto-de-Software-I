import React from 'react';
import Menu from '../../component/Menu';
import BoxAddSala from './component/BoxAddSala';
import BoxSala from './component/BoxSala';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

export default function Salas(){
    return(
        <div>
            <Container className="container">
                <Menu title="Salas de aula" />
                <BoxAddSala />
                <List>
                    {["Sala 122", "Sala 102", "Sala 111", 
                        "Sala 118", "Sala 112A", "Sala 111B"].map((item)=>(
                            <BoxSala sala={item}/>
                        ))
                    }
                </List>
            </Container>
        </div>
    );
}