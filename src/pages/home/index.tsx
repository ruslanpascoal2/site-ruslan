import React from "react";
import { Start } from "../../sections/start";
import { About } from "../../sections/about";
import { Experience } from "../../sections/experience";
import Projects from "../../sections/projects";
import { Footer } from "../../sections/footer";
import { Menu } from "../../shared/components/menu";
import { useSnapshot } from "valtio";
import { store } from "../../store/store";

export const Home = () => {

  const {isMenuOpen} = useSnapshot(store);

  return (
    <main>
      {
        isMenuOpen && <Menu/>
      }
      <Start />
      <About />
      <Experience />
      <Projects/>
      <Footer/>
    </main>
  );
};
