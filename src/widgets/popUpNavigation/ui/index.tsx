import { m } from "framer-motion";
import { popUpNavigationConfig } from "../config";
import { lazy, Suspense } from "react";
import NavigationSpinner from "../../../shared/spinner/NavigationSpinner.tsx";
import { useCursor } from "../../../features/cursorFollower/store.ts";

const NavLinksList = lazy(() => import("./NavLinksList"));

export const PopUpNavigation = () => {
  const { setCursorType, setDefaultCursor } = useCursor((state) => state);
  return (
    <m.div
      {...popUpNavigationConfig}
      className="fixed top-2.5 left-1/2 z-[999] w-[598px]"
    >
      <div
        className="bg-accent px-8 py-3 rounded-[20px] -translate-x-1/2"
        id="popUpLinks"
        onMouseEnter={(e) => setCursorType((e.target as HTMLSpanElement).id)}
        onMouseLeave={setDefaultCursor}
      >
        <Suspense fallback={<NavigationSpinner />}>
          <NavLinksList />
        </Suspense>
      </div>
    </m.div>
  );
};
