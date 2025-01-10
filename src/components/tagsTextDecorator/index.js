import React from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";

const Block = styled.div`
  position: relative;
  padding: 1.2rem 0 1.2rem 1.2rem;

  &:before,
  &:after {
    content: "<${(props) => props.tag}>";
    position: absolute;
    left: 0;
    opacity: 0.3;
    font-family: var(--fontDecorator);
    font-size: var(--fs2);
    line-height: 1;
  }
  &:before {
    top: 0;
  }
  &:after {
    content: "</${(props) => props.tag}>";
    bottom: 0;
  }

  @media screen and (max-width: ${screenSizes.FULLHD}) {
    padding: 20px 0 20px 20px;

    &:before,
    &:after {
      font-size: var(--fs3);
    }
  }

  @media screen and (max-width: ${screenSizes.MOBILE}) {
    padding: 20px 0 20px 0;
  }
`;

export default function TagsTextDecorator(props) {
  const tag = props.tag ?? "div";

  return (
    <Block {...props} tag={tag}>
      {props.children}
    </Block>
  );
}
