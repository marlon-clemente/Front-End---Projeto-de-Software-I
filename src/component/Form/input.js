import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

const CustomInput = styled(TextField)({
  marginBottom: "6px",
  fontFamily: "Roboto",
});

export default function Input({name, label, ...rest}) {
  /**
   * fieldname = nome final do input
   * registerFil = funçaõ que dispara quando o compoente for montado em tela
   * path = qual a propriedade que possui o valor no imput
   */
  const inputRef = useRef(null);
  const materialInputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(()=>{
    registerField(
      {
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
        setValue(ref, value){
          ref.value = value;
          materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");

        }
      }
    ); 
  },[fieldName, registerField]);

  return (
    <div>
      <CustomInput
      name={fieldName}
      error={!!error}
      ref={materialInputRef}
      helperText={error || null}
      inputRef={inputRef}
      defaultValue={defaultValue}
      label={label}
      fullWidth
      {...rest}
    />
    </div>
  )
}
