import { MdEmojiEmotions } from "react-icons/md";
import { useEmojis } from "../../../entities/sectionTitle/store";
import { IoIosWarning } from "react-icons/io";
import { useCursor } from "../../../features/cursorFollower/store";

const EmojiButton = () => {
  const { toggleIsEmojisEnabled, isEmojisEnabled } = useEmojis(
    (state) => state
  );
  const { setCursorType, setDefaultCursor, setCursorText } = useCursor(
    (state) => state
  );
  return (
    <button
      className="w-[30px] h-[30px]"
      onClick={toggleIsEmojisEnabled}
      id="performance"
      onMouseEnter={(e) => {
        setCursorType((e.currentTarget as HTMLButtonElement).id);
        setCursorText(
          !isEmojisEnabled ? (
            <IoIosWarning className="text-[40px] text-[#f4cb15]" />
          ) : (
            ""
          )
        );
      }}
      onMouseLeave={() => {
        setDefaultCursor();
        setCursorText("");
      }}
    >
      <MdEmojiEmotions
        className={`transition-all duration-200 ease-in-out text-[30px] hover:scale-110 ${
          isEmojisEnabled ? "text-[#f4cb15]" : "text-[#ffffff]"
        }`}
      />
    </button>
  );
};

export default EmojiButton;
