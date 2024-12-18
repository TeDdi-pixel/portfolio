import { Suspense } from "react";
import { useCursor } from "../../../features/cursorFollower/store";
import CursorButton from "./CursorButton";
import EmojiButton from "./EmojiButton";
import CounterSpinner from "../../../shared/spinner/CounterSpinner";
import { defaultAnimation } from "../../../shared/defaultAnimation";
import { m } from "framer-motion";
const PerformanceManagement = () => {
  const { isTouchDevice } = useCursor((state) => state);
  return (
    <m.div
      className={`fixed bottom-[77px] right-5 z-1000 px-[13px] bp632:px-[15px] py-[6.5px] bp632:py-[10px] bg-background2 rounded-3xl shadow-custom2 flex items-center gap-[3px] justify-center ${
        !isTouchDevice ? "max-w-[107px]" : "max-w-[50px]"
      }`}
      {...defaultAnimation({ margin: "20px 0px 0px 0px", direction: 15 })}
    >
      <Suspense fallback={<CounterSpinner />}>
        {!isTouchDevice && <CursorButton />}
        <EmojiButton />
      </Suspense>
    </m.div>
  );
};

export default PerformanceManagement;
