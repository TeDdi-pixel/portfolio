import { m } from "framer-motion";
import { ulWrapper } from "../config/ulWrapper";
import { links } from "../../header/config";
import { Link } from "react-scroll";
import { useHeaderStore } from "../../header/store";
import { liConfig } from "../config/li";
const LinksList = () => {
  const { toggleBurgerMenu, setSelectedLink, selectedLink } = useHeaderStore(
    (state) => state
  );
  const handleClick = (linkId: string) => {
    setSelectedLink(linkId);
    toggleBurgerMenu();
  };
  return (
    <m.div
      {...ulWrapper}
      className="fixed top-0 left-0 h-[100vh] w-full z-20 flex justify-center items-center"
    >
      <ul className="flex justify-center items-center flex-col gap-5 w-full h-full ">
        {links.map((link, index) => (
          <Link key={link.text} to={link.text} offset={-118.5}>
            <m.li
              {...liConfig(index)}
              className="flex items-center justify-between gap-4 text-accent text-[30px] font-bold"
              onClick={() => handleClick(link.text)}
            >
              {selectedLink === link.text ? (
                <>
                  <span className="text-texture">{link.text}</span>
                  <span className="block w-7 h-5 bg-texture rounded-full animate-spin-slow relative"></span>
                </>
              ) : (
                <span className="text-accent">{link.text}</span>
              )}
            </m.li>
          </Link>
        ))}
      </ul>
    </m.div>
  );
};

export default LinksList;
