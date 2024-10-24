import { Link } from "react-scroll";
import { links } from "../../header/config";
import { motion } from "framer-motion";
import { useHeaderStore } from "../../header/store";
import { popUpNavigationConfig } from "../config";

export const PopUpNavigation = () => {
  const { selectedLink, setSelectedLink } = useHeaderStore((state) => state);
  const handleLinkClick = (linkText: string) => {
    setSelectedLink(linkText);
  };
  return (
    <div className="fixed top-2.5 left-1/2 -translate-x-1/2 z-[999]">
      <motion.div
        {...popUpNavigationConfig}
        className="bg-accent px-8 py-3 rounded-[20px]"
      >
        <ul className="flex items-center select-none gap-5">
          {links.map((link) => (
            <Link
              key={link.text}
              to={link.text}
              smooth={true}
              duration={500}
              offset={-118.5}
              className="cursor-pointer"
              onClick={() => handleLinkClick(link.text)}
            >
              <motion.li className="relative cursor-pointer pb-1 text-[16px]">
                {link.text}

                {selectedLink === link.text && (
                  <motion.div
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
              </motion.li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
