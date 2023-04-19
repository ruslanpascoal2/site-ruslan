import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  ContentContainer,
  SectionTitle,
} from "../../../shared/components/page-layout";

type Experience = {
  title: string;
  date: string;
  company: string;
  desc: string;
  id: number;
};

const experiences: Experience[] = [
  {
    title: "Desenvolvedor Front-end",
    company: "Autobem",
    date: "Março/2020 a Junho/2021",
    desc: `
    Como desenvolvedor front-end, fui responsável pela construção de uma aplicação de gestão do zero. 
    Além disso, treinei e mentorei desenvolvedores juniores e estagiários, compartilhando meu conhecimento sobre boas práticas e padrões de projeto para garantir a qualidade do trabalho.`,
    id: 0,
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Raro Labs",
    date: "Junho/2021 a Dezembro/2022",
    desc: `
    Fiz parte da equipe de desenvolvimento do Internet Banking para cooperativas da Ailos, 
    atuando como desenvolvedor front-end. Minhas principais responsabilidade foram o 
    desenvolvimento de funcionalidades e resolução de bugs, usando tecnologias como Angular e Typescript.
    `,
    id: 1,
  },
  {
    title: "Desenvolvedor Front-end",
    company: "ACT Digital",
    date: "Março/2022 a Abril/2023",
    desc: `Nesse trabalho, fui parte da equipe de desenvolvimento de um 
    projeto de Internet Banking para o Banco ABC, atuando como desenvolvedor front-end. 
    Minhas principais responsabilidade foram o desenvolvimento de novas funcionalidades para a plataforma, bem como testes unitários e resolução de bugs,
    utilizando tecnologias como Angular, Typescript, Jest, Ngxs e RxJs.`,
    id: 2,
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Quantico Solutions",
    date: "Janeiro/2023 a Abril/2023",
    desc: `
    Neste projeto, criei uma aplicação de gestão do zero para um órgão do governo de Portugal chamado Diretoria Geral de Artes.
    Minhas principais responsabilidade foram a criação da arquitetura do front-end, desenvolvimento de novas funcionalidades, reuniões com os clientes
    e code review.
    `,
    id: 3,
  },
];

const ExperienceSection = styled.section`
  background-color: var(--color-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${tw`
    px-5 lg:pe-16 items-center lg:justify-center 
    `}
  padding-top: 2rem;
`;

const Menu = styled.ul`
  min-width: 300px;
  list-style-type: none;
`;

type MenuItemProps = {
  active?: boolean;
};
const MenuItem = styled.li<MenuItemProps>`
  height: 60px;
  background-color: var(--color-bg-lighter);
  padding: 1rem;
  border-left: 4px solid transparent;
  border-color: ${(props) => props.active && "var(--color-orange)"};
  color: ${(props) => props.active && "var(--color-orange)"};
  cursor: pointer;
  :hover {
    color: var(--color-orange);
  }
`;

const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: flex-start;
  ${
    tw`
    flex-wrap lg:flex-nowrap pb-12`
  }
`;

const ExperienceContainer = styled.div`
  ${tw`w-full ps-0 lg:ps-12 mt-12 lg:mt-0`}
`;

const Flex = styled.div`
  ${tw`w-full`}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Company = styled.h2`
  font-size: 22px;
  color: var(--color-purple);
  ${tw`my-4`}
`;

export const Experience = () => {
  const [selected, setSelected] = useState<Experience>(experiences[0]);

  return (
    <ExperienceSection id="experiencia">
      <ContentContainer>
        <SectionTitle purple>Experiência</SectionTitle>
        <Content>
          <Menu>
            {experiences.map((xp, i) => (
              <MenuItem
                key={i}
                onClick={() => setSelected(xp)}
                active={selected.id === i}
              >
                {xp.company}
              </MenuItem>
            ))}
          </Menu>
          <ExperienceContainer>
            <Flex>
              <span style={{ fontSize: "24px" }}>{selected.title}</span>
              <span
                style={{ textAlign: 'end', fontSize: "14px", color: "var(--color-white-muted)" }}
              >
                {selected.date}
              </span>
            </Flex>
            <Company>{selected.company}</Company>
            <p style={{ fontSize: "16px", color: "var(--color-white-muted)" }}>
              {selected.desc}
            </p>
          </ExperienceContainer>
        </Content>
      </ContentContainer>
    </ExperienceSection>
  );
};
