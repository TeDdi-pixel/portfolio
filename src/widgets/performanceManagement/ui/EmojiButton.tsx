import { MdEmojiEmotions } from "react-icons/md";
import { useEmojis } from "../../../entities/sectionTitle/store";

const EmojiButton = () => {
  const { toggleIsEmojisEnabled, isEmojisEnabled } = useEmojis(
    (state) => state
  );

  return (
    <button className="w-[40px] h-[30px]" onClick={toggleIsEmojisEnabled}>
      <MdEmojiEmotions
        className={`transition-all duration-200 ease-in-out text-[30px] hover:scale-110 ${
          isEmojisEnabled ? "text-[#f4cb15]" : "text-[#ffffff]"
        }`}
      />
    </button>
  );
};

export default EmojiButton;
