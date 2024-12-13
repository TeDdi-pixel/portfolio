import { m } from "framer-motion";
import { popUpNavigationConfig } from "../config";
import { lazy, Suspense } from "react";
import NavigationSpinner from "../../../shared/spinner/NavigationSpinner.tsx";

const NavLinksList = lazy(() => import("./NavLinksList"));

export const PopUpNavigation = () => {
  return (
    <m.div
      {...popUpNavigationConfig}
      className="fixed top-2.5 left-1/2 z-[999] w-[598px]"
    >
      <div className="bg-accent px-8 py-3 rounded-[20px] -translate-x-1/2">
        <Suspense fallback={<NavigationSpinner />}>
          <NavLinksList />
        </Suspense>
      </div>
    </m.div>
  );
};
