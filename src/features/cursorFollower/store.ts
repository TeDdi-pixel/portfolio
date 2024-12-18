import { ReactNode } from "react";
import { create } from "zustand";

type Store = {
  cursorType: string;
  cursorText: string | ReactNode;
  isCursorEnabled: boolean;
  setCursorType: (type: string) => void;
  setDefaultCursor: () => void;
  setCursorText: (text: string | ReactNode) => void;
  toggleIsCursorEnabled: () => void;
  setIsCursorEnabled: (isTouchDevice: boolean) => void;
  isTouchDevice: boolean | null;
  setIsTouchDevice: (isTouchDevice: boolean) => void;
};

export const useCursor = create<Store>((set) => ({
  cursorType: "default",
  cursorText: "",
  isCursorEnabled: true,
  isTouchDevice: null,
  setCursorText: (text) => {
    set({ cursorText: text });
  },
  setCursorType: (type) => {
    switch (type) {
      case "title":
        set({ cursorType: "title" });
        break;
      case "text":
        set({ cursorType: "text" });
        break;
      case "navLinks":
        set({ cursorType: "navLinks" });
        break;
      case "mainTitle":
        set({ cursorType: "mainTitle" });
        break;
      case "popUpLinks":
        set({ cursorType: "popUpLinks" });
        break;
      case "projectLink":
        set({ cursorType: "projectLink" });
        break;
      case "performance":
        set({ cursorType: "performance" });
        break;
      case "contact":
        set({ cursorType: "contact" });
        break;
      default:
        set({ cursorType: "default" });
        break;
    }
  },
  setDefaultCursor: () => {
    set({ cursorType: "default" });
  },
  toggleIsCursorEnabled: () => {
    set((state) => ({ isCursorEnabled: !state.isCursorEnabled }));
  },
  setIsCursorEnabled: (isTouchDevice: boolean) => {
    set({ isCursorEnabled: isTouchDevice });
  },
  setIsTouchDevice: (isTouchDevice: boolean) => {
    set({ isTouchDevice: isTouchDevice });
  },
}));
