import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { TitleAnim, Container, TagsTextDecorator, Form } from "../../components";
import {sendContactForm} from "../../service/service";
import { addAlertAction } from "../../store/alertReducer";
import { hidePreloaderAction, showPreloaderAction } from "../../store/preloaderReducer";
import useText from "../../hooks/useText.js";


const TextWrapper = styled(TagsTextDecorator)`
height: auto;
`
const TextContent = styled(TagsTextDecorator)`
    display: flex;
    flex-direction: column;
    justify-content: center;    
`;
const Title = styled(TagsTextDecorator)`
margin-bottom: 20px;

h1{
    margin-bottom: 0;
}
`
const Text = styled(TagsTextDecorator)``
const FormWrapper = styled(TagsTextDecorator)`
max-width: 600px;
margin-bottom: 20px;
padding-bottom: 40px;
`


export default function ContactPage(){
    const text = useText();

    const presetFormFields = [
        {
            value: '',
            name: 'name',
            placeholder: text('contact.form.name'),
            required: true,
            width: 'calc(50% - 10px)',
        },
        {
            value: '',
            name: 'email',
            placeholder: text('contact.form.email'),
            type: 'email',
            required: true,
            width: 'calc(50% - 10px)',
        },
        {
            value: '',
            name: 'message',
            placeholder: text('contact.form.message'),
            required: true,
            type: 'textarea',
        }
    ];
    const [formFields, setFormFields] = useState([...presetFormFields]);
    const dispatch = useDispatch();

    return (
        <Container>
            <TextWrapper tag={'html'}>
                <TextContent tag={'body'}>
                    <Title tag={'h1'}>
                        <TitleAnim text={text('contact.text.title')} />
                    </Title>
                    <Text tag="div">
                        <TagsTextDecorator tag="p">{text('contact.text.p1')}</TagsTextDecorator>
                        <FormWrapper tag={'form'}>
                            <Form
                                fields={formFields}
                                setFields={setFormFields}
                                sendText={text('contact.form.button')}
                                send={async () => {
                                    let obj = {};
                                    formFields.forEach(item => {
                                        if(item.value !== ''){
                                            obj[item.name] = item.value;
                                        }                                           
                                    })

                                    dispatch(showPreloaderAction())
                                    let res = await sendContactForm(obj);
                                    if(res.ok){
                                        setFormFields([...presetFormFields])
                                        dispatch(addAlertAction({
                                            text: text('contact.form.alert.success'),
                                            type: 'succes'
                                        }))
                                    } else {
                                        dispatch(addAlertAction({
                                            text: text('contact.form.alert.error'),
                                            type: 'error'
                                        }))
                                    }

                                    setTimeout(() => dispatch(hidePreloaderAction()), 1000);                                    
                                }}
                            />
                        </FormWrapper>
                    </Text>
                </TextContent>
            </TextWrapper>
        </Container>
    )
}