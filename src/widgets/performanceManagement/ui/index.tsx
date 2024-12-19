import { Suspense } from "react";
import { useCursor } from "../../../features/cursorFollower/store";
import CursorButton from "./CursorButton";
import EmojiButton from "./EmojiButton";
import CounterSpinner from "../../../shared/spinner/CounterSpinner";
import { defaultAnimation } from "../../../shared/defaultAnimation";
import { m } from "framer-motion";
const PerformanceManagement = () => {
  const { isTouchDevice } = useCursor((state) => state);
  // ${
  //   !isTouchDevice ? "max-w-[107px]" : "max-w-[50px]"
  // }
  return (
    <m.div
      className={`fixed bottom-[77px] right-5 z-1000 bp632:px-[15px] p-[10px] bg-background2 rounded-3xl shadow-custom2 flex items-center gap-[5px] justify-center`}
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
