import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.main`
  ${tw`
      container
      py-6
    `}
  background-color: var(--color-bg);
  min-height: calc(100vh - 100px);
  color: #fff;
`;

export default PageContainer;