import { Link } from "react-scroll";
import { links } from "../../header/config";
import { m } from "framer-motion";
import { useHeaderStore } from "../../header/store";
import { popUpNavigationConfig } from "../config";

export const PopUpNavigation = () => {
  const { burgerLinkTaped, selectedLink, setSelectedLink } = useHeaderStore(
    (state) => state
  );

  return (
    <m.div
      {...popUpNavigationConfig(burgerLinkTaped)}
      className="fixed top-2.5 left-1/2 z-[999] w-[598px]"
    >
      <div className="bg-accent px-8 py-3 rounded-[20px] -translate-x-1/2">
        <ul className="flex items-center select-none gap-5">
          {links.map((link) => (
            <Link
              key={link.text}
              to={link.text}
              smooth={true}
              duration={500}
              offset={link.text === "Summary" ? -300 : -118.5}
              onClick={() => setSelectedLink(link.text)}
            >
              <li className="relative cursor-pointer pb-1 text-[16px]">
                {link.text}

                {selectedLink === link.text && (
                  <m.div
                    initial={{ opacity: 1, height: "3px" }}
                    animate={{ opacity: 1, height: "3px" }}
                    className="absolute left-0 right-0 bg-texture bottom-0 transition-opacity rounded-full"
                    layoutId="underline"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </m.div>
  );
};
