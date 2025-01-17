import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import screenSizes from "../../constants/screenSizes";
import urls from "../../constants/urls";
import {
  TitleAnim,
  Container,
  TagsTextDecorator,
  Button,
} from "../../components";
import useText from "../../hooks/useText.js";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";

const ContainerStyled = styled(Container)`
  grid-template-columns: 1fr;
`;
const TextWrapper = styled(TagsTextDecorator)`
  height: auto;
`;
const TextContent = styled(TagsTextDecorator)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled(TagsTextDecorator)`
  margin-bottom: 20px;

  h1 {
    margin-bottom: 0;
    color: var(--white);
  }
`;
const ButtonContainer = styled(TagsTextDecorator)`
  display: flex;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 20px;

  a {
    display: block;
  }

  @media screen and (max-width: ${screenSizes.MOBILE}) {
    flex-direction: column;
    max-width: 300px;

    a {
      width: 100%;

      button {
        width: 100%;
      }
    }
  }
`;
const ButtonViolet = styled(Button)`
  color: var(--violet);

  &:hover {
    color: var(--white);
    border-color: var(--violet);
  }

  &:before {
    background-color: var(--violet);
  }

  @media screen and (max-width: ${screenSizes.MOBILE}) {
    width: 100%;
  }
`;

export default function HomePage() {
  const lang = useSelector((state) => state.language.lang);
  const text = useText();

  return (
    <ContainerStyled>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <TextWrapper tag={"html"}>
        <TextContent tag={"body"}>
          <Title tag={"h1"}>
            <TitleAnim text={text("home.text.title.part1")} />
            <TitleAnim text={text("home.text.title.part2")} />
            <TitleAnim text={text("home.text.title.part3")} />
          </Title>
          <ButtonContainer>
            <a
              href={`/KinshynStanislavFrontendDeveloper${lang.toUpperCase()}.pdf`}
              download
            >
              <ButtonViolet>{text("home.text.button.resume")}</ButtonViolet>
            </a>
            <Link to={urls.contact}>
              <Button>{text("home.text.button.contact")}</Button>
            </Link>
          </ButtonContainer>
        </TextContent>
      </TextWrapper>
      {/*<Skills />*/}
    </ContainerStyled>
  );
}
