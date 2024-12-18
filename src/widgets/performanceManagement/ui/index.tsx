import { useCursor } from "../../../features/cursorFollower/store";
import CursorButton from "./CursorButton";
import EmojiButton from "./EmojiButton";

const PerformanceManagement = () => {
  const { isTouchDevice } = useCursor((state) => state);
  return (
    <div
      className={`fixed bottom-[77px] right-5 z-1000 px-[13px] bp632:px-[15px] py-[6.5px] bp632:py-[10px] bg-background2 rounded-3xl shadow-custom2 flex items-center gap-[3px] justify-center ${
        !isTouchDevice ? "max-w-[107px]" : "max-w-[50px]"
      }`}
    >
      {!isTouchDevice && <CursorButton />}
      <EmojiButton />
    </div>
  );
};

export default PerformanceManagement;
