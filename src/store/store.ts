import { proxy, useSnapshot } from "valtio";

type State = {
  isMenuOpen: boolean;
  isScrolled: boolean;
};

const initialState: State = {
  isMenuOpen: false,
  isScrolled: false,
};

export const store = proxy<State>(initialState);

export const toggleMenu = () => {
  store.isMenuOpen = !store.isMenuOpen;
};

export const toggleScrolled = (scrolled: boolean) => {
    store.isScrolled = scrolled;
}
