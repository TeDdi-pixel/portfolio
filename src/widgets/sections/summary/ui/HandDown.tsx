import { Link } from "react-scroll";
import { useHeaderStore } from "../../../header/store";

const HandDown = () => {
  const { setSelectedLink } = useHeaderStore((state) => state);

  return (
    <div className="flex w-full justify-center pb-[15px]">
      <Link
        to="Hard skills"
        duration={800}
        smooth
        offset={-118.5}
        className="max-w-[110px] max-h-[80px] hover:cursor-pointer"
        onClick={() => setSelectedLink("Hard skills")}
      >
        <img
          src="../../../../../public/pointing-down.webp"
          alt="hand down"
          className="object-contain max-w-[110px] max-h-[80px] animate-bounce"
        />
      </Link>
    </div>
  );
};

export default HandDown;
