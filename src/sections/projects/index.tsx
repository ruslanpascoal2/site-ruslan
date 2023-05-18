import React from "react";
import styled from "styled-components";
import {
  ContentContainer,
  SectionTitle,
} from "../../shared/components/page-layout";
import tw from "twin.macro";

const ProjectsSection = styled.section`
  background-color: var(--color-bg-lighter);
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  ${tw`
    px-5 lg:pe-16 items-center lg:justify-center 
    `}
  padding-top: 2rem;
`;

type ContentProps = {
  blur?: boolean;
};
const Content = styled.div<ContentProps>`
  margin-top: 3rem;
  display: flex;
  align-items: flex-start;
  filter: ${(props) => props.blur && "blur(.25rem) opacity(0.5)"};
  ${tw`
    flex-wrap lg:flex-nowrap pb-12 lg:space-x-6`}
`;

type ProjectCardProps = {
  color?: string;
};
const ProjectCard = styled.div<ProjectCardProps>`
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

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.h1`
  margin-top: 3rem;
  font-size: 22px;
  color: var(--color-white-muted);
`;

const Projects = () => {
  return (
    <ProjectsSection id="projetos">
      <ContentContainer>
        <SectionTitle purple>Projetos</SectionTitle>
        <Wrapper>
          <Message>Em construção...</Message>
        </Wrapper>
        <Content blur>
          <ProjectCard color="var(--color-green)">
            <h1>Projeto X</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="">Visualizar</a>
          </ProjectCard>
          <ProjectCard color="var(--color-red)">
            <h1>Projeto X</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="">Visualizar</a>
          </ProjectCard>
          <ProjectCard color="var(--color-blue)">
            <h1>Projeto X</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="">Visualizar</a>
          </ProjectCard>
        </Content>
      </ContentContainer>
    </ProjectsSection>
  );
};

export default Projects;
