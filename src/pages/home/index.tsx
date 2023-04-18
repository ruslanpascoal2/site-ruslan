import React from "react";
import styled from "styled-components";
import { Start } from "../../assets/sections/start";
import { About } from "../../assets/sections/about";
import { Experience } from "../../assets/sections/experience";

const HomeContainer = styled.section`
  /* padding-top: calc(100px + 2rem); */
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Start />
      <About />
      <Experience />
    </HomeContainer>
  );
};
