import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.main`
  background-color: var(--color-bg);
  min-height: calc(100vh - 100px);
  color: #fff;
`;

export const ContentContainer = styled.div`
  ${tw`container`}
  padding-top: 100px;
`

interface SectionTitleProps {
  orange?: boolean;
  purple?: boolean;
}
export const SectionTitle = styled.h1<SectionTitleProps>`
    font-family: "Muli", sans-serif;
    color: ${props => props.orange ? 'var(--color-orange)' : ' var(--color-purple)' };
    ${
      tw`
      text-4xl
      `
    }
`

export default PageContainer;