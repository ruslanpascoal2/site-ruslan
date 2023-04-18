import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.main`
  background-color: var(--color-bg);
  min-height: calc(100vh - 100px);
  color: #fff;
`;

export const ContentContainer = styled.div`
  ${tw`container`}
`

export const SectionTitle = styled.h1`
    font-family: "Muli", sans-serif;
    color: var(--color-purple);
    ${
      tw`
      text-4xl
      `
    }
`

export default PageContainer;