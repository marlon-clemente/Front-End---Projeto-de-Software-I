import React from 'react';
import BoxAddSala from './component/BoxAddSala';
import BoxSala from './component/BoxSala';
import List from '@material-ui/core/List';
import Menu from '../../component/Menu';
import Styles from '../../styles';
import salas from '../../temp/sala';

export default function Salas(){
    const c = Styles();

    return(
        <div className={c.root}>
            <Menu title="Salas" />
            <div className={c.content}>
                <div className={c.appBarSpacer} />
                    <BoxAddSala />
                </div>
        </div>
    );
}

/**

{salas.map((item)=>(
                                <BoxSala sala={item}/>
                            ))
                        }

 */