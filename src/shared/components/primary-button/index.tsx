import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  height: 60px;
  width: "fit-content";
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 8px;
  font-weight: 500;
  border: 2px solid var(--color-bg);
  ${tw`
  ring-2 ring-[#ffb16c]`}
`;
export const OrangeButton = styled(BaseButton)`
  background-color: var(--color-orange);
  color: var(--color-bg);
`;
export const PurpleButton = styled(BaseButton)`
  background-color: var(--color-purple);
  color: var(--color-bg);
`;
