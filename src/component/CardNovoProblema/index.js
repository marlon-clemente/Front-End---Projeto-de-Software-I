import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import AddCircleIcon from '@material-ui/icons/AddCircle';

import './cardNovoProblema.css';

export default function CardNovoProblema(){
  return (
        <Card className="root">
            <CardContent>
                <h1>+</h1>            
                <h2>Relatar Novo Problema</h2>
            </CardContent>
        </Card>
  );
} 
