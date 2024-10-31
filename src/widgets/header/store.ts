import { create } from "zustand";

type Store = {
  burgerMenu: boolean;
  selectedLink: string;
  burgerLinkTaped: boolean;
  popUpNav: boolean;
  toggleBurgerMenu: () => void;
  setSelectedLink: (linkId: string) => void;
  setBurgerLinkTaped: (status: boolean) => void;
  setPopUpNav: (status: boolean) => void;
};

export const useHeaderStore = create<Store>((set) => ({
  burgerMenu: false,
  burgerLinkTaped: false,
  popUpNav: false,
  selectedLink: "",
  toggleBurgerMenu: () => {
    set((state) => ({ burgerMenu: !state.burgerMenu }));
  },
  setSelectedLink: (linkId: string) => {
    set(() => ({ selectedLink: linkId }));
  },
  setBurgerLinkTaped: (status: boolean) => {
    set(() => ({ burgerLinkTaped: status }));
  },
  setPopUpNav: (status: boolean) => {
    set(() => ({ popUpNav: status }));
  },
}));
