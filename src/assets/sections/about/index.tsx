import React from "react";
import styled from "styled-components";
import { ContentContainer } from "../../../shared/components/page-layout";
import tw from "twin.macro";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
} from "@ant-design/icons";

const AboutSection = styled.section`
  background-color: var(--color-bg-lighter);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  ${tw`
    pe-0 lg:pe-16  items-center lg:items-start
    `}
  padding-top: 100px;
`;

const AboutBoard = styled.div`
  margin-top: 2rem;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  ${tw`w-full
    columns-2
    flex-wrap lg:flex-nowrap
    `}
`;

const ImageContainer = styled.div`
  background-color: #0f0f0f;
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
  font-size: 32px;
  ${tw`mt-6 lg:mt-0`}
`;

const MyName = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 32px;
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
            <Text style={{ marginTop: "2rem" }}>
              Sou um desenvolvedor fullstack com expertise no front-end e três
              anos de experiência na área. Tenho uma paixão especial por criar
              interfaces de usuário bonitas e modernas, usando minhas
              habilidades em Angular, React.js e Node.js. Adoro o desafio de
              transformar uma ideia em um produto finalizado e utilizável, e
              estou sempre buscando novas maneiras de aprimorar minhas
              habilidades e conhecimentos para oferecer o melhor resultado.
            </Text>
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
