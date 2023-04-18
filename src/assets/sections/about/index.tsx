import React from "react";
import styled from "styled-components";
import {
  ContentContainer,
  SectionTitle,
} from "../../../shared/components/page-layout";
import tw from "twin.macro";

const AboutSection = styled.section`
  background-color: var(--color-bg-lighter);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${tw`
    p-0 lg:pe-16 items-center lg:items-start
    `}
  padding-top: calc(100px + 2rem);
`;

export const About = () => {
  return (
    <AboutSection id="quem-sou-eu">
      <ContentContainer>
        <SectionTitle>Quem sou eu</SectionTitle>
      </ContentContainer>
    </AboutSection>
  );
};
