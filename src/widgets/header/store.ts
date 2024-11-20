import { create } from "zustand";

type Store = {
  burgerMenu: boolean;
  selectedLink: string;
  popUpNav: boolean;
  toggleBurgerMenu: () => void;
  setSelectedLink: (linkId: string) => void;
  setPopUpNav: (status: boolean) => void;
};

export const useHeaderStore = create<Store>((set) => ({
  burgerMenu: false,
  popUpNav: false,
  selectedLink: "",
  toggleBurgerMenu: () => {
    set((state) => ({ burgerMenu: !state.burgerMenu }));
  },
  setSelectedLink: (linkId: string) => {
    set(() => ({ selectedLink: linkId }));
  },
  setPopUpNav: (status: boolean) => {
    set(() => ({ popUpNav: status }));
  },
}));
