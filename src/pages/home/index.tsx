import React from "react";
import styled from "styled-components";
import { Start } from "../../sections/start";
import { About } from "../../sections/about";
import { Experience } from "../../sections/experience";
import Projects from "../../sections/projects";
import { Footer } from "../../sections/footer";

const HomeContainer = styled.section`
  /* padding-top: calc(100px + 2rem); */
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Start />
      <About />
      <Experience />
      <Projects/>
      <Footer/>
    </HomeContainer>
  );
};
