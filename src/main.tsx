// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import "unfonts.css";
import { RouterProvider } from "react-router-dom";
import { Navbar } from "./shared/components/navbar";
import router from "./config/router";
import PageContainer from "./shared/components/page-layout";


const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalStyles />
      <Navbar />
    <PageContainer>
      <RouterProvider router={router} />
    </PageContainer>
  </React.StrictMode>
);
