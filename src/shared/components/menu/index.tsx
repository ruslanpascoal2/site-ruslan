import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { toggleMenu } from "../../../store/store";
import { CloseCircleOutlined, CloseOutlined } from "@ant-design/icons";

const MenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-bg-lighter);
  position: fixed;
  z-index: 3;
  ${tw`flex items-center justify-center`}
  overflow: hidden;
`;

const MenuList = styled.ul`
  list-style-type: none;
`;
const MenuItem = styled.a`
  height: 100px;
  font-size: 30px;
  ${tw`flex items-center justify-center p-6`}
  cursor: pointer;
  font-family: 'Muli';
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
  const onMenuClick = () => {
    toggleMenu();
  };

  return (
    <MenuContainer>
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
        <MenuItem onClick={onMenuClick} href="#projetos">
          Projetos
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};
