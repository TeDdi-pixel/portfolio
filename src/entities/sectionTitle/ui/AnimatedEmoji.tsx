import ReactEmojis from "@souhaildev/reactemojis";
import { TypeEmoji } from "../config/emoji";
import { useEmojis } from "../store";

type Props = {
  emoji: TypeEmoji;
  width: number;
};

const AnimatedEmoji = ({ emoji, width = 75 }: Props) => {
  const { isEmojisEnabled } = useEmojis((state) => state);
  return isEmojisEnabled ? (
    <ReactEmojis
      emoji={emoji}
      emojiStyle="2"
      style={{ width: width, height: width, flexShrink: 0 }}
    />
  ) : (
    <span>{emoji}</span>
  );
};

export default AnimatedEmoji;
