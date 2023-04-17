import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { MenuOutlined } from "@ant-design/icons";

const NavbarContainer = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-bg);
  ${tw`
        w-screen
        flex
        items-center
        `}
  border-bottom: 1px solid var(--color-muted);
`;

const NavbarContent = styled.div`
  ${tw`
    container
    flex
    items-center
    justify-between`}
`;

const Logo = styled.div`
  ${tw`
      flex
      flex-col
      justify-center
      items-center
      relative
    `}
  margin-bottom: 20px;
`;

const LogoName = styled.span`
  font-family: "Caveat", sans-serif;
  font-size: 38px;
  color: var(--color-orange);
`;

const LogoSub = styled.span`
  font-family: "Muli", sans-serif;
  font-size: 10px;
  color: var(--color-purple);
  position: absolute;
  bottom: -16%;
`;

const MenuButton = styled.a`
  font-size: 20px;
  color: #fff;
  ${tw`flex items-center cursor-pointer`}
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <LogoName>Ruslan</LogoName>
          <LogoSub>web developer</LogoSub>
        </Logo>
        <MenuButton>
          <MenuOutlined />
        </MenuButton>
      </NavbarContent>
    </NavbarContainer>
  );
};
