import { links } from "../config";
import { Link } from "react-scroll";
import { useHeaderStore } from "../store";
import { motion } from "framer-motion";
import useWidth from "../../../hooks/useWidth";

export const HeaderNavigation = () => {
  const { setSelectedLink } = useHeaderStore((state) => state);
  const { active } = useWidth(1150);
  return (
    <nav className={`${active ? "hidden" : "flex items-center"} `}>
      <motion.div
        viewport={{ margin: "-23px 0px -100px 0px", once: true }}
        initial={{
          opacity: 0,
          x: 20,
          filter: `blur(10px)`,
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          x: 0,
          y: 0,
          transition: {
            duration:  0.3,
            delay:  0.1,
          },
        }}
      >
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
      </motion.div>
    </nav>
  );
};
