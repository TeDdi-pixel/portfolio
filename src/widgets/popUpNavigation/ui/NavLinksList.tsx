import { Link } from "react-scroll";
import { m } from "framer-motion";
import { links } from "../../header/config";
import { useHeaderStore } from "../../header/store";

const NavLinksList = () => {
  const { selectedLink, setSelectedLink } = useHeaderStore((state) => state);

  return (
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
  );
};

export default NavLinksList;
