import CursorButton from "./CursorButton";
import EmojiButton from "./EmojiButton";

const PerformanceManagement = () => {
  return (
    <div className="fixed bottom-[77px] right-5 z-1000 px-[13px] max-w-[107px] w-full bp632:px-[15px] py-[6.5px] bp632:py-[10px] bg-background2 rounded-3xl shadow-custom2 flex items-center gap-[3px] justify-center">
      <CursorButton />
      <EmojiButton />
    </div>
  );
};

export default PerformanceManagement;
