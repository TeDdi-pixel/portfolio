import useWidth from "../../../../hooks/useWidth";
import ReactEmojis from "@souhaildev/reactemojis";

const Emoji = () => {
  const { active } = useWidth(767);

  return (
    <>
      {active ? (
        <span className="text-[45px] bp353:text-[65px]">✨</span>
      ) : (
        <ReactEmojis
          emoji="✨"
          emojiStyle="2"
          className="w-[50px] h-[50px]"
          style={{ width: "150px", height: "150px" }}
        />
      )}
    </>
  );
};

export default Emoji;
