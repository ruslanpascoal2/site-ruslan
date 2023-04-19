import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ContentContainer } from "../../shared/components/page-layout";

const FooterSection = styled.footer`
  background-color: var(--color-bg);
  min-height: 100px;
  display: flex;
  align-items: center;
  ${tw`
    px-5 lg:pe-16 items-center
    `}

  h1 {

    color: var(--color-white-muted);
    ${tw`text-xs text-center`}
  }
`;

const Row = styled.div`
    ${tw`flex items-center justify-center`}
`

export const Footer = () => {
  return (
    <FooterSection>
      <ContentContainer>
        <Row>
        <h1> Copyright © 2023 Ruslan.</h1>
        </Row>
      </ContentContainer>
    </FooterSection>
  );
};
