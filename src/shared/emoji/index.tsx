import ReactEmojis from "@souhaildev/reactemojis";

const Emoji = () => {
  return (
    <ReactEmojis
      emoji="✨"
      emojiStyle="2"
      className="w-[50px] h-[50px]"
      style={{ width: "150px", height: "150px" }}
    />
  );
};

export default Emoji;
