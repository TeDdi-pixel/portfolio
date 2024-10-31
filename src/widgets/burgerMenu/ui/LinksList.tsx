import { m } from "framer-motion";
import { ulWrapper } from "../config/ulWrapper";
import { links } from "../../header/config";
import { Link } from "react-scroll";
import { useHeaderStore } from "../../header/store";
import { liConfig } from "../config/li";

const LinksList = () => {
  const {
    toggleBurgerMenu,
    setSelectedLink,
    selectedLink,
    setBurgerLinkTaped,
  } = useHeaderStore((state) => state);

  const handleClick = (linkId: string) => {
    setSelectedLink(linkId);
    toggleBurgerMenu();
    setBurgerLinkTaped(true);
  };

  return (
    <m.div
      {...ulWrapper}
      className="fixed top-0 left-0 h-[100vh] w-full flex justify-center items-center"
    >
      <ul className="flex justify-center items-center flex-col gap-5 w-full h-full ">
        {links.map((link, index) => (
          <Link key={link.text} to={link.text} offset={-118.5} className="relative">
            <m.li
              {...liConfig(index)}
              className="text-accent text-[30px] font-bold"
              onClick={() => handleClick(link.text)}
            >
              {selectedLink === link.text ? (
                <>
                  <span className="text-texture text-[40px]">{link.text}</span>
                  <span className="absolute block w-7 h-5 bg-texture rounded-full animate-spin-slow top-[24px] -right-[35px]"></span>
                </>
              ) : (
                <span className="text-accent bp425:text-purple">{link.text}</span>
              )}
            </m.li>
          </Link>
        ))}
      </ul>
    </m.div>
  );
};

export default LinksList;
