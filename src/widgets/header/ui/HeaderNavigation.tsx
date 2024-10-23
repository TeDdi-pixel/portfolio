import AnimatedDiv from "../../../shared/animatedDiv";
import { links } from "../config";
import { Link } from "react-scroll";

export const HeaderNavigation = ({
  setSelectedLink,
}: {
  setSelectedLink: (linkText: string) => void;
}) => {
  return (
    <nav className="flex items-center">
      <AnimatedDiv duration={0.5} x={50} isBlur>
        <ul className="flex items-center divide-x-[1px] divide-accent">
          {links.map((link) => (
            <li
              key={link.text}
              className="px-3.5 cursor-pointer text-accent text-[16px]"
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
      </AnimatedDiv>
    </nav>
  );
};
