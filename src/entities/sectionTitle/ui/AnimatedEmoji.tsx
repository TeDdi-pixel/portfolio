import ReactEmojis from "@souhaildev/reactemojis";
import { TypeEmoji } from "../config/emoji";

type Props = {
  emoji: TypeEmoji;
  width: number;
};

const AnimatedEmoji = ({ emoji, width = 75 }: Props) => (
  <ReactEmojis
    emoji={emoji}
    emojiStyle="2"
    style={{ width: width, height: width,flexShrink: 0 }}
  />
);

export default AnimatedEmoji;
