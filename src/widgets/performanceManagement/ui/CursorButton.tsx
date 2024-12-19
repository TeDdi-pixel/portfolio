import { HiCursorArrowRays } from "react-icons/hi2";
import { useCursor } from "../../../features/cursorFollower/store";

const CursorButton = () => {
  const {
    toggleIsCursorEnabled,
    isCursorEnabled,
    setCursorType,
    setCursorText,
    setDefaultCursor,
  } = useCursor((state) => state);

  return (
    <button
      id="cursorButton"
      onMouseEnter={(e) => {
        setCursorType((e.currentTarget as HTMLButtonElement).id);
      }}
      onMouseLeave={() => {
        setDefaultCursor();
        setCursorText("");
      }}
      className={`w-[35px] h-[35px] p-1 flex justify-center items-center rounded-xl hover:bg-[#234674] transition-colors ${
        isCursorEnabled
          ? "bg-[#234674] hover:bg-[transparent]"
          : "bg-transparent"
      }`}
      onClick={toggleIsCursorEnabled}
    >
      <HiCursorArrowRays
        className={`transition-all duration-200 ease-in-out text-[35px] hover:scale-[1.2] ${
          isCursorEnabled ? "text-lightPurple" : "text-[#ffffff]"
        }`}
      />
    </button>
  );
};

export default CursorButton;
