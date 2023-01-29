import React from "react";
import styled from "styled-components";


export default function Picture(props){
    return (
        <picture>
            {props.srcsets?.map(item => {
                const arr = item.split('.');
                const format = arr.at(-1);
                return (
                    <source srcSet={item} type={`image/${format}`} key={item} />
                )
            })}
            <img {...props} srcsets="" src={props.src} alt="" />
        </picture>
    )
}