import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-bg);
  ${tw`
        px-5
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

const MenuContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  color: #fff;
  ${
    tw`
      space-x-10
    `
  }
`

const MenuItem = styled.li`
  text-decoration: none;
  display: block;
`

const MenuLink = styled.a`
  cursor: pointer;
  :hover{
    color: var(--color-purple)
  }
`

export const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <LogoName>Ruslan</LogoName>
          <LogoSub>web developer</LogoSub>
        </Logo>
        {isDesktopOrLaptop ? (
          <>
            <MenuContainer>
              <MenuItem>
                <MenuLink href="#inicio">Início</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#quem-sou-eu">Quem sou eu</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink>Projetos</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink>Experimentações</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink>EN</MenuLink>
              </MenuItem>
            </MenuContainer>
          </>
        ) : (
          <MenuButton>
            <MenuOutlined />
          </MenuButton>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
};
