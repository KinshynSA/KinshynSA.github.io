import React, {useState, useRef} from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";


const Block = styled.div`
position: relative;
width: ${props => props.width ?? '100%'};
margin-top: 40px;

@media screen and (max-width: ${screenSizes.MOBILE}){
    width: 100%;
}
`
const Input = styled.input`
display: block;
width: 100%;
padding: 10px 20px;
background-color: var(--gray700);
color: var(--gray400);
font-size: var(--fs2);
line-height: var(--lh2);
`
const Textarea = styled.textarea`
display: block;
width: 100%;
padding: 10px 20px;
background-color: var(--gray700);
color: var(--gray400);
font-size: var(--fs2);
line-height: var(--lh2);
`
const Placeholder = styled.div`
position: absolute;
top: ${props => props.toTop ? '-4px' : '10px'};
left: 20px;
font-size: var(--fs2);
line-height: var(--lh2);
cursor: pointer;
transition: var(--trans);
transform: ${props => props.toTop ? 'translateY(-100%)' : 'translateY(0)'};
`;
const Required = styled.span`
color: var(--red);
`
const LineWrapper = styled.div`
width: 100%;
`
const Line = styled.div`
width: ${props => (props.isFocused || props.isFill || props.error) ? '100%' : '0%'};
height: 3px;
background-color: ${props => props.error ? 'var(--red)' : 'var(--green)'};
transition: var(--trans);
`


export default function Field(props){
    const input = useRef();
    const [isFocused, setIsFocused] = useState(false);
    const type = props.type ?? 'text';
    const isFill = props.value !== undefined && props.value !== null && props.value !== '';

    return (
        <Block width={props.width}>
            {type === 'textarea' ? (
                <Textarea
                    ref={input}
                    value={props.value}
                    error={props.error}
                    required={props.required}
                    onChange={e => props.onChange({event: e, name: props.name})}
                    onBlur={e => {
                        props.onBlur?.({event: e, name: props.name})
                        setIsFocused(false)
                    }}
                    onFocus={() => setIsFocused(true)}
                />
            ) : (
                <Input
                    ref={input}
                    value={props.value}
                    error={props.error}
                    required={props.required}
                    maxLength={`${props.maxlength ?? ''}`}
                    onChange={e => props.onChange({event: e, name: props.name, type: props.type})}
                    onBlur={e => {
                        props.onBlur?.({event: e, name: props.name})
                        setIsFocused(false)
                    }}
                    onFocus={() => setIsFocused(true)}
                    autoComplete="new-password"
                />
            )}
            {props.placeholder && (
                <Placeholder
                    onClick={() => {
                        input.current.focus()
                        setIsFocused(true)
                    }}
                    toTop={isFill || isFocused}
                >
                    {props.placeholder}{props.required && <Required>*</Required>}
                </Placeholder>
                )}
            <LineWrapper>
                <Line
                    isFocused={isFocused}
                    error={props.error}
                    isFill={isFill}
                />
            </LineWrapper>
        </Block>
    )
}