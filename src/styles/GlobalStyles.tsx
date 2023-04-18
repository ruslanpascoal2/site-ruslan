// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";
import {GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`

 body{
  --color-bg: rgb(13 11 23);
  --color-bg-lighter: #15131f;
  --color-red: #e51d37;
  --color-pink: #ff3a5e;
  --color-blue: #00a3ff;
  --color-green: #a6fb98;
  --color-purple: #d7bcfd;
  --color-orange: #ffb16c;
  --color-muted: #19162a;
  --white-muted: #d8d8d8;
  
}
html {
  scroll-behavior: smooth;
}
#root{
  background-color: var(--color-bg);
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
