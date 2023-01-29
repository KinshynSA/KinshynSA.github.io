import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Field from './field';
import {findFieldForName, findFieldsForName, validateField} from './utils.js';
import { Button } from '..';


const Block = styled.div``
const Box = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 30px;
`


export default function Form(props){
    const [formBlocked, setFormBlocked] = useState(true);   

    useEffect(() => {
        validateForm();
    },[props.fields])

    function validateForm(){
      let flag = false;
  
      props.fields.forEach((field) => {
        findError(field);
      })
  
      setFormBlocked(flag);
  
      function findError(field){
        if(field.hide) return;
  
        if(field.type === 'block'){
          let childs = field.childs ?? [];
          childs.forEach(item => findError(item))
        }
  
        if(field.required){
          if(field.error) flag = true;
          if(field.type === 'checkbox' || field.type === 'radio'){
            if(!field.checked) flag = true;
          } else {
            if(field.value === '' || field.value === undefined || field.value === null) flag = true;
          } 
        }
      }
    }

    function onChange(obj){
      let {event,name,type,option,value} = obj;
      let arr = [...props.fields];
  
      if(type === 'radio'){
        let radioArr = findFieldsForName(arr,name);
        radioArr.forEach(field => {
          field.checked = false;
          if(field.value === value){
            field.checked = true;
          }
        })
      } else {
        changeField(findFieldForName(arr,name))
      }
  
      if(type === 'tel'){
        if(!Number.isInteger(+event.nativeEvent.data)) return;
        if(event.nativeEvent.data === ' ') return;
      }
  
      props.setFields(arr);
  
      function changeField(field){
        if(type === 'checkbox'){
          field.checked = !field.checked;
        } else if(type === 'file'){
          field.value = value;
        } else if(type === 'select'){
          field.value = option.value;
        } else {
          field.value = event.target.value;
        }
  
        if(field.required) validateField(field);
      }
    }

    return (
        <Block>
            <Box>
                {props.fields.map((field, i) => {
                    return (
                        <Field
                            {...field}
                            onChange={onChange}
                            key={i}
                        />
                    )
                })}
            </Box>
            <ButtonContainer>
                <Button
                    disabled={formBlocked}
                    onClick={() => {
                        if(formBlocked) return;
                        props.send();
                    }
                }>
                    <span>{props.sendText ?? 'Send'}</span>
                </Button>
            </ButtonContainer>
        </Block>
    )
}