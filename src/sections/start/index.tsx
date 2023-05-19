import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  OrangeButton,
  PurpleButton,
} from "../../shared/components/primary-button";
import { gsap } from "gsap";
import blobs from "../../assets/images/blob-scene-haikei.png";
import blobsMobile from "../../assets/images/blob-scene-haikei-mob.png";
import { useMediaQuery } from 'react-responsive'

const bgDesktop = `url(${blobs})`;
const bgMobile = `url(${blobsMobile})`;

type StartSectionProps = {
  isMobile?: boolean
}
const StartSection = styled.section<StartSectionProps>`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => props.isMobile ? bgMobile : bgDesktop};
  ${tw`
     items-center lg:items-start
    `}
`;

const Head = styled.h1<{isMobile: boolean}>`
  font-size: ${({isMobile}) => isMobile ? '100px' : '120px' };
  line-height: 1.05;
  ${tw`text-center lg:text-start w-full`}
  font-weight: 500;
  margin-bottom: 2rem;
  color: var(--color-purple);
`;

const Sub = styled.h5`
  ${tw`text-lg lg:text-xl text-center lg:text-start w-full lg:w-3/4`}
  color: var(--color-white-muted);
  margin-bottom: 4rem;
`;

const Content = styled.div`
  ${tw`flex flex-col justify-center items-center lg:items-start`}
`;

const StartSectionContainer = styled.div`
  ${tw`container`}
`;

export const Start = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const el = useRef<any>(null);
  const tl = useRef<any>(null);
  const btn = useRef<any>(null);

  useLayoutEffect(() => {
    let animation = gsap.to(".btn-home", {
      paused: true,
      ease: "power1.out",
      scale: 0.8,
    });

    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(".head", {
          duration: 0.75,
          y: -300,
          autoAlpha: 0,
          ease: "circ.out",
        })
        .from(".sub", {
          duration: 0.75,
          y: -300,
          autoAlpha: 0,
          ease: "circ.out",
        })
        .from("a", {
          duration: 0.75,
          x: -150,
          ease: "back.out(1.7)",
          autoAlpha: 0,
        });
    }, el);
    return () => {
      animation.kill();
      ctx.revert();
    };
  }, []);

  return (
    <StartSection id="inicio" isMobile={isTabletOrMobile}>
      <StartSectionContainer>
        <Content ref={el}>
          <Head className="head" isMobile={isTabletOrMobile}>I love to create</Head>
          <Sub className="sub">
            Conte comigo para construir soluções digitais com
            criatividade e rapidez.
          </Sub>
          <a href="#quem-sou-eu">
            <OrangeButton
              className="btn-home"
              ref={btn}
              style={{ width: "200px" }}
            >
              Quem sou eu
            </OrangeButton>
          </a>
        </Content>
      </StartSectionContainer>
    </StartSection>
  );
};
