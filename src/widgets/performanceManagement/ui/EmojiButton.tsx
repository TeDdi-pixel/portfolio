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
      className={`w-[35px] h-[35px] p-1 flex justify-center items-center rounded-md hover:bg-[#234674] transition-colors ${
        isEmojisEnabled ? "bg-[#234674]" : "bg-transparent"
      }`}
      onClick={toggleIsEmojisEnabled}
      id="performance"
      onMouseEnter={(e) => {
        if (!isEmojisEnabled) {
          setCursorType((e.currentTarget as HTMLButtonElement).id);
          setCursorText(
            !isEmojisEnabled ? (
              <IoIosWarning className="text-[35px] text-[#f4cb15] hover:scale-[1.2]" />
            ) : (
              ""
            )
          );
        } else {
          setCursorType("cursorButton");
        }
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
