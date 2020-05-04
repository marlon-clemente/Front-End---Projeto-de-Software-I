import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      margin: 6
    },
    input:{
      fontFamily: 'Roboto',
      fontSize: 20
    }
  }),
);
export default function Input({name, ...rest}) {
  const classes = useStyles();
  /**
   * fieldname = nome final do input
   * registerFil = funçaõ que dispara quando o compoente for montado em tela
   */
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(()=>{
    registerField(
      {
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      }
    ); 
  },[fieldName, registerField]);

  return (
    <div>
      <TextField ref={inputRef}
             className={classes.root}
             InputProps={{
              classes: {
                input: classes.input,
              },
            }}
             defaultValue={defaultValue}
             {...rest} />
    </div>
  )
}
