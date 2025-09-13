import { create } from "zustand";

type Store = {
  isEmojisEnabled: boolean;
  toggleIsEmojisEnabled: () => void;
};

export const useEmojis = create<Store>((set) => ({
  isEmojisEnabled: false,
  toggleIsEmojisEnabled: () => {
    set((state) => ({ isEmojisEnabled: !state.isEmojisEnabled }));
  },
}));
