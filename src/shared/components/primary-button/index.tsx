import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  height: 60px;
  width: "fit-content";
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 8px;
  font-weight: 500;
`;
export const OrangeButton = styled(BaseButton)`
  background-color: var(--color-orange);
`;
export const PurpleButton = styled(BaseButton)`
  background-color: var(--purple-orange);
`;
