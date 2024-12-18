import { HiCursorArrowRays } from "react-icons/hi2";
import { useCursor } from "../../../features/cursorFollower/store";

const CursorButton = () => {
  const { toggleIsCursorEnabled, isCursorEnabled } = useCursor(
    (state) => state
  );

  return (
    <button className="w-[40px] h-[30px]" onClick={toggleIsCursorEnabled}>
      <HiCursorArrowRays
        className={`transition-all duration-200 ease-in-out text-[30px] hover:scale-110 ${
          isCursorEnabled ? "text-lightPurple" : "text-[#ffffff]"
        }`}
      />
    </button>
  );
};

export default CursorButton;
