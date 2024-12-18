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
  setIsCursoreEnabled: (isTouchDevice: boolean) => void;
};

export const useCursor = create<Store>((set) => ({
  cursorType: "default",
  cursorText: "",
  isCursorEnabled: true,
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
      case "projectGitHub":
        set({ cursorType: "projectGitHub" });
        break;
      case "projectInBrowser":
        set({ cursorType: "projectInBrowser" });
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
  setIsCursoreEnabled: (isTouchDevice: boolean) => {
    set({ isCursorEnabled: isTouchDevice });
  },
}));
