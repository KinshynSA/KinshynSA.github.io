import React from "react";
import styled from "styled-components";
import {
  TitleAnim,
  Container,
  TagsTextDecorator,
  TagsCloud,
} from "../../components";
import screenSizes from "../../constants/screenSizes";
import useText from "../../hooks/useText.js";
import {Helmet} from "react-helmet";

const ContainerStyled = styled(Container)``;
const TextWrapper = styled(TagsTextDecorator)`
  height: auto;
`;
const Text = styled(TagsTextDecorator)``;
const Title = styled(TagsTextDecorator)`
  margin-bottom: 20px;

  h1 {
    margin-bottom: 0;
  }
`;
const TitleMobile = styled(Title)`
  display: none;
  margin-top: 40px;

  h2 {
    margin-bottom: 0;
    text-align: left;
  }

  @media screen and (max-width: ${screenSizes.NOTEBOOK}) {
    display: block;
  }
`;
const TagsCloudMobile = styled(TagsCloud)`
  display: none;
  padding: 0;
  margin-top: 24px;

  @media screen and (max-width: ${screenSizes.NOTEBOOK}) {
    display: block;
  }
`;
const TagsCloudStyled = styled(TagsCloud)`
  display: block;

  @media screen and (max-width: ${screenSizes.NOTEBOOK}) {
    display: none;
  }
`;

export default function SkillsPage() {
  const text = useText();

  return (
    <ContainerStyled>
      <Helmet>
        <title>{text("skills.text.title")}</title>
      </Helmet>

      <TextWrapper tag={"html"}>
        <Text tag={"body"}>
          <Title tag={"h1"}>
            <TitleAnim text={text("skills.text.title")} />
          </Title>
          <TagsTextDecorator tag={"p"}>
            <p>{text("skills.text.p1")}</p>
          </TagsTextDecorator>
          <TitleMobile tag={"h2"}>
            <TitleAnim tag={"h2"} text={text("skills.text.titlestack")} />
          </TitleMobile>
          <TagsCloudMobile />
        </Text>
      </TextWrapper>
      <TagsCloudStyled />
    </ContainerStyled>
  );
}
