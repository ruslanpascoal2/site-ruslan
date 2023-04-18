import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  ContentContainer,
  SectionTitle,
} from "../../../shared/components/page-layout";

const ExperienceSection = styled.section`
  background-color: var(--color-bg);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  ${tw`
    ps-5 lg:pe-16 lg:items-start
    `}
  padding-top: 2rem;
`;

export const Experience = () => {
  return (
    <ExperienceSection id="experiencia">
      <ContentContainer>
        <SectionTitle purple>Experiência</SectionTitle>
      </ContentContainer>
    </ExperienceSection>
  );
};
