import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { OrangeButton } from "../../../shared/components/primary-button";
import { ContentContainer } from "../../../shared/components/page-layout";

const StartSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${tw`
    p-0 lg:pe-16 items-center lg:items-start
    `}
`;

const Head = styled.h1`
  ${tw`text-3xl lg:text-4xl text-center lg:text-start w-full lg:w-3/4`}
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Sub = styled.h5`
  ${tw`text-lg lg:text-xl text-center lg:text-start w-full lg:w-3/4`}
  color: var(--white-muted);
  margin-bottom: 4rem;
`;

const Content = styled.div`
  ${tw`flex flex-col justify-center items-center lg:items-start`}
`;

export const Start = () => {
  return (
    <StartSection id="inicio">
      <ContentContainer>
        <Content>
          <Head>
            Transformar ideias em soluções digitais modernas e de alta
            qualidade.
          </Head>
          <Sub>
            Conte comigo para construir a presença online da sua empresa com
            criatividade e rapidez.
          </Sub>
          <OrangeButton style={{ width: "200px" }}>Linkedin</OrangeButton>
        </Content>
      </ContentContainer>
    </StartSection>
  );
};
