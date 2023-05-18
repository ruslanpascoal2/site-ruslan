import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { ContentContainer } from "../../shared/components/page-layout";
import tw from "twin.macro";
import {
  CheckCircleFilled,
  CheckCircleOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import peep from "../../assets/images/peep-47.svg";

const AboutSection = styled.section`
  background-color: var(--color-bg-lighter);
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  ${tw`
    pe-0 lg:pe-16 items-center lg:items-start lg:justify-center
    `}
`;

const AboutBoard = styled.div`
  border-radius: 8px;
  padding: 4rem;
  display: flex;
  ${tw`w-full
    columns-2
    px-5 lg:px-0
    flex-wrap lg:flex-nowrap
    `}
`;

const ImageContainer = styled.div`
  border-radius: 4px;
  background-image: url(${peep});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${tw`
    w-full aspect-square
    `}
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${tw`
    w-full aspect-square
    ps-0 lg:ps-12
    `}
`;

const Title = styled.h5`
  color: var(--color-orange);
  font-weight: bold;
  font-family: "Caveat";
  font-size: 36px;
  ${tw`mt-6 lg:mt-0`}
`;

const MyName = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.2;
`;

const Text = styled.p`
  margin-top: 1rem;
  color: var(--color-white-muted);
  font-size: 18px;
`;

const SocialMedia = styled.a`
  min-height: 65px;
  min-width: 65px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-purple-muted);
  background-color: var(--color-bg);
  color: var(--color-purple);
  font-size: 24px;
  :hover {
    border-color: var(--color-purple);
  }
`;
const SocialMediaContainer = styled.div`
  ${tw`flex items-center space-x-2 lg:space-x-6 mt-6 pb-10`}
`;

const ExperienceLink = styled.a`
  cursor: pointer;
  margin-top: 1rem;
  font-family: "Muli", sans-serif;
  font-size: 14px;
  text-decoration: underline;
  color: var(--color-orange);
  width: fit-content;
`;

const BioRow = styled.li`
  display: flex;
  align-items: center;
  ${tw`
    space-x-4
  `}
  line-height: 1.3;
  margin-bottom: 1rem;
`

const CustomCheckCircleFilled = styled(CheckCircleFilled)`
  color: var(--color-purple);
`;

export const About = () => {
  return (
    <AboutSection id="quem-sou-eu">
      <ContentContainer>
        <AboutBoard>
          <ImageContainer></ImageContainer>
          <BioContainer>
            <Title>Quem sou eu</Title>
            <MyName>Ruslan de Araújo e Pascoal</MyName>
            <Text>Fullstack Developer</Text>
            <ul >
            <Text style={{ marginTop: "2rem" }}>
              <BioRow>
                <CustomCheckCircleFilled/>
                <span> Sou um desenvolvedor fullstack com expertise no front-end e três
                anos de experiência na área.</span>
              </BioRow>
              <BioRow>
              <CustomCheckCircleFilled/>
               <span>
               Gosto bastante de criar coisas novas e trabalhar em projetos
                inovadores.
               </span>
              </BioRow>
              <BioRow>
              <CustomCheckCircleFilled/>
                <span>
                Prezo pela organização, boas práticas e profissionalismo no
                trabalho.
                </span>
              </BioRow>
              <BioRow>
              <CustomCheckCircleFilled/>
               <span> Atualmente estou em busca de desenvolver minhas habilidades em
                outras áreas do desenvolvimento web.</span>
              </BioRow>
            </Text>
            </ul>
            <ExperienceLink href="#experiencia">Ver experiência</ExperienceLink>
            <SocialMediaContainer>
              <SocialMedia
                href="https://www.linkedin.com/in/ruslan-pascoal-561214a0/"
                target="_blank"
              >
                <LinkedinOutlined />
              </SocialMedia>
              <SocialMedia
                target="_blank"
                href="https://instagram.com/ruslanpascoal?igshid=ZjE2NGZiNDQ="
              >
                <InstagramOutlined />
              </SocialMedia>
              <SocialMedia
                target="_blank"
                href="https://github.com/ruslanpascoal2"
              >
                <GithubOutlined />
              </SocialMedia>
              <SocialMedia
                target="_blank"
                href="https://medium.com/@ruslan.ap2"
              >
                <MediumOutlined />
              </SocialMedia>
            </SocialMediaContainer>
          </BioContainer>
        </AboutBoard>
      </ContentContainer>
    </AboutSection>
  );
};
