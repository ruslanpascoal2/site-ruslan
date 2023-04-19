import React from "react";
import styled from "styled-components";
import {
  ContentContainer,
  SectionTitle,
} from "../../shared/components/page-layout";
import tw from "twin.macro";

const ProjectsSection = styled.section`
  background-color: var(--color-bg-lighter);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${tw`
    px-5 lg:pe-16 items-center lg:justify-center 
    `}
  padding-top: 2rem;
`;

const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: flex-start;
  ${tw`
    flex-wrap lg:flex-nowrap pb-12 lg:space-x-6`}
`;

type ProcectCardProps = {
  color?: string;
};
const ProjectCard = styled.div`
  padding: 2rem;
  border: 1px solid;
  border-color: ${(props) => props.color || "#fff"};
  display: flex;
  flex-direction: column;
  width: 100%;

  ${tw`
      mb-6 lg:mb-0
    `}

  p {
    color: var(--color-white-muted);
    font-size: 18px;
  }

  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 24px;
  }

  a {
    font-size: 20px;
    margin-top: 2rem;
    color: ${(props) => props.color || "#fff"};
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projetos">
      <ContentContainer>
        <SectionTitle purple>Projetos</SectionTitle>
        <Content>
          <ProjectCard color="var(--color-green)">
            <h1>Projeto X</h1>
            <p>porra nenhuma</p>
            <a href="">Visualizar</a>
          </ProjectCard>
          <ProjectCard color="var(--color-red)">
            <h1>Projeto X</h1>
            <p>porra nenhuma</p>
            <a href="">Visualizar</a>
          </ProjectCard>
          <ProjectCard color="var(--color-blue)">
            <h1>Projeto X</h1>
            <p>porra nenhuma</p>
            <a href="">Visualizar</a>
          </ProjectCard>
        </Content>
      </ContentContainer>
    </ProjectsSection>
  );
};

export default Projects;
