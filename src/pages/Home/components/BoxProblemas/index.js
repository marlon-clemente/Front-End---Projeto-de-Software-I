import React from 'react';
import Style from './styles';
import Tables from './Table';
export default function BoxProblemas(){
    const classes = Style();
    return (
        <div>
            <div className={classes.root}>
                <Tables />
            </div>
        </div>
    );
}