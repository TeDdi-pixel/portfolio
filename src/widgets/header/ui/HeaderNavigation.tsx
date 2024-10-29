import { links } from "../config";
import { Link } from "react-scroll";
import { useHeaderStore } from "../store";
import { m } from "framer-motion";
import { useState } from "react";

export const HeaderNavigation = () => {
  const { setSelectedLink } = useHeaderStore((state) => state);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="hidden bp1050:flex items-center">
      <ul className="flex items-center gap-5">
        {links.map((link,linkIndex) => (
          <m.li
            initial={{ opacity: 0, x: 30, filter: "blur(5px)" }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.4,
                delay: 0.1 * linkIndex,
              },
            }}
            key={link.text}
            className={`cursor-pointer text-accent text-[16px] hover:text-texture transition-colors ${
              link.text === "Summary" ? "hidden" : "block"
            }`}
            onMouseEnter={() => setHoveredLink(link.text)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              to={link.text}
              smooth={true}
              duration={500}
              offset={-118.5}
              onClick={() => setSelectedLink(link.text)}
              className="cursor-pointer"
            >
              {link.navText?.split("").map((char, index) =>
                char === "." ? (
                  <span key={index} className="text-texture font-bold">
                    {char}
                  </span>
                ) : (
                  <m.span
                    className="inline-flex origin-center"
                    key={index}
                    initial={{ color: "#F1F5F9", scale: 1 }}
                    animate={
                      hoveredLink === link.text
                        ? { scale: 1.1, color: "#1FB2AA", x: [null, 1, 0] }
                        : { scale: 1, color: "#F1F5F9", x: 0 }
                    }
                    transition={{
                      delay: index * 0.03,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </m.span>
                )
              )}
            </Link>
          </m.li>
        ))}
      </ul>
    </nav>
  );
};
