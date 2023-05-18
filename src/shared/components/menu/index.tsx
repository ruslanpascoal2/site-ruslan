import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { toggleMenu } from "../../../store/store";
import { CloseOutlined } from "@ant-design/icons";
import bgMobile from "../../../assets/images/blob-scene-haikei-mob.png";

const fadeIn = keyframes`
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
`;

const MenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgMobile});
  position: fixed;
  z-index: 3;
  ${tw`flex items-center justify-center`}
  overflow: hidden;
  -webkit-animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    &.fade-out {
    animation: ${fadeOut} 0.6s  ease-out;
  }
`;

const MenuList = styled.ul`
  list-style-type: none;
`;
const MenuItem = styled.a`
  height: 100px;
  font-size: 30px;
  ${tw`flex items-center justify-center p-6`}
  cursor: pointer;
  font-family: "Muli";
  :hover {
    color: var(--color-purple);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  color: var(--color-purple);
  font-size: 1.5rem;
`;

export const Menu = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const onMenuClick = () => {
    handleFadeOut();
    setTimeout(() => {
      toggleMenu();
    }, 500);
  };

  const handleFadeOut = () => {
    setFadeOut(true);
  };

  return (
    <MenuContainer className={fadeOut ? 'fade-out' : ''}>
      <CloseBtn onClick={onMenuClick}>
        <CloseOutlined />
      </CloseBtn>
      <MenuList>
        <MenuItem onClick={onMenuClick} href="#inicio">
          Início
        </MenuItem>
        <MenuItem onClick={onMenuClick} href="#quem-sou-eu">
          Quem sou eu
        </MenuItem>
        <MenuItem onClick={onMenuClick} href="#experiencia">
          Experiência
        </MenuItem>
        {/* <MenuItem onClick={onMenuClick} href="#projetos">
          Projetos
        </MenuItem> */}
      </MenuList>
    </MenuContainer>
  );
};
