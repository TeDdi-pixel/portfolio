import { links } from "../config";
import { Link } from "react-scroll";
import { useHeaderStore } from "../store";
import { m } from "framer-motion";
import { headerNavConfig } from "../config/headerNav";

export const HeaderNavigation = () => {
  const { setSelectedLink } = useHeaderStore((state) => state);

  return (
    <nav className="hidden bp1050:flex items-center">
      <m.div {...headerNavConfig}>
        <ul className="flex items-center gap-5">
          {links.map((link) => (
            <li
              key={link.text}
              className={`cursor-pointer text-accent text-[16px] hover:text-texture transition-colors ${
                link.text === "Summary" ? "hidden" : "block"
              }`}
            >
              <Link
                to={link.text}
                smooth={true}
                duration={500}
                offset={-118.5}
                onClick={() => setSelectedLink(link.text)}
                className="cursor-pointer"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </m.div>
    </nav>
  );
};
