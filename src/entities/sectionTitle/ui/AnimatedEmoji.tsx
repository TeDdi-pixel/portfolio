import ReactEmojis from "@souhaildev/reactemojis";
import { TypeEmoji } from "../config/emoji";

type Props = {
  emoji: TypeEmoji;
  active: boolean;
};

const AnimatedEmoji = ({ emoji, active }: Props) => {
  return (
    <>
      {active ? (
        <span>{emoji}</span>
      ) : (
        <ReactEmojis
          emoji={emoji}
          emojiStyle="2"
          className="w-[50px] h-[50px]"
          style={{ width: "75px", height: "75px" }}
        />
      )}
    </>
  );
};

export default AnimatedEmoji;
