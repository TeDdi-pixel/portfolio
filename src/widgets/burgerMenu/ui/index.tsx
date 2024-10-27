import { Link } from "react-scroll";
import { links } from "../../header/config";
import { useHeaderStore } from "../../header/store";
import { AnimatePresence, motion } from "framer-motion";
import useFirstAnimation from "../../../hooks/useFirstAnimation";
import useWidth from "../../../hooks/useWidth";

export const BurgerMenu = () => {
  const firstAnimation = useFirstAnimation();
  const { active } = useWidth(1150);
  const { burgerMenu, toggleBurgerMenu, setSelectedLink, selectedLink } =
    useHeaderStore((state) => state);
  const handleClick = (linkId: string) => {
    setSelectedLink(linkId);
    toggleBurgerMenu();
  };
  return (
    <>
      <motion.div
        style={{ transform: burgerMenu ? "scale(1)" : "scale(0.75)" }}
        viewport={{ margin: "-23px 0px -100px 0px",once:true }}
        initial={{
          opacity: 0,
          filter: `blur(10px)`,
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: firstAnimation ? 0.5 : 0.3,
            delay: firstAnimation ? 0.5 : 0.1,
          },
        }}
        id="nav-icon2"
        className={`${burgerMenu ? "open" : ""} ${
          active ? "" : "hidden"
        } right-[15px] md:right-[30px] scale-75 sm:scale-100`}
        onClick={toggleBurgerMenu}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        {burgerMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`fixed inset-0 z-10 bg-black backdrop-blur-sm`}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 h-[100vh] w-full z-20 flex justify-center items-center"
            >
              <ul className="w-full h-full flex justify-center items-center flex-col gap-5">
                {links.map((link, index) => (
                  <Link key={link.text} to={link.text} offset={-118.5}>
                    <motion.li
                      initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                      exit={{
                        scale: 0.8,
                        opacity: 0,
                        filter: "blur(10px)",
                        transition: { duration: 0.4, delay: index * 0.1 - 0.1 },
                      }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className={`${
                        selectedLink === link.text
                          ? "text-texture"
                          : "text-accent"
                      }  text-[30px] font-bold`}
                      onClick={() => handleClick(link.text)}
                    >
                      {link.text}
                    </motion.li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
