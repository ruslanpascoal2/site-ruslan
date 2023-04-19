import { proxy, useSnapshot } from 'valtio'

export const store = proxy<{ isMenuOpen: boolean }>({isMenuOpen: false});

export const toggleMenu = () => {
    store.isMenuOpen = !store.isMenuOpen;
}