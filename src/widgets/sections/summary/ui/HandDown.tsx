import { Link } from "react-scroll";
import { useHeaderStore } from "../../../header/store";
import { m } from "framer-motion";

const HandDown = () => {
  const { setSelectedLink } = useHeaderStore((state) => state);

  return (
    <m.div
      className="flex w-full justify-center pb-[15px]"
      initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)",transition:{duration:0.4,delay: 0.2}}}
    >
      <Link
        to="Hard skills"
        duration={800}
        smooth
        offset={-118.5}
        className="max-w-[110px] max-h-[80px] hover:cursor-pointer"
        onClick={() => setSelectedLink("Hard skills")}
      >
        <img
          src="./pointing-down.webp"
          alt="hand down"
          className="object-contain max-w-[110px] max-h-[80px] animate-bounce"
        />
      </Link>
    </m.div>
  );
};

export default HandDown;
