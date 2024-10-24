import { create } from "zustand";
import { links } from "./config";

type Store = {
  burgerMenu: boolean;
  toggleBurgerMenu: () => void;
  selectedLink: string;
  setSelectedLink: (linkId: string) => void;
};

export const useHeaderStore = create<Store>((set) => ({
  burgerMenu: false,
  selectedLink: links[0].text,
  toggleBurgerMenu: () => {
    set((state) => ({ burgerMenu: !state.burgerMenu }));
  },
  setSelectedLink: (linkId: string) => {
    set(() => ({ selectedLink: linkId }));
  },
}));
