// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`

 body{
  --color-bg:#0D0B17;
  --color-bg-lighter: #171522;
  --color-muted: #19162a;
  --color-red: #e51d37;
  --color-pink: #ff3a5e;
  --color-blue: #00a3ff;
  --color-green: #a6fb98;
  --color-purple: #d7bcfd;
  --color-purple-muted: #d7bcfd17;
  --color-orange: #ffb16c;
  --color-white-muted: #d8d8d8;
  --navbar-height-offset: -130px;
  font-family: 'Archivo', sans-serif;
  
  *::selection {
    background-color: var(--color-orange);
    color: var(--color-bg);
  }
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
