import { ReactElement, Suspense, useRef, useState, useEffect } from "react";
import Spinner from "../../../shared/spinner/Spinner";
import { useInView } from "react-intersection-observer";

const LazySection = ({ component }: { component: ReactElement }) => {
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const domRef = useRef<HTMLDivElement | null>(null);
  const { inView, ref } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView && domRef.current) {
      const height = domRef.current.getBoundingClientRect().height;
      setMeasuredHeight(height);
    }
  }, [inView]);

  return (
    <div
      ref={(node) => {
        ref(node);
        domRef.current = node;
      }}
      style={{ minHeight: measuredHeight ?? "553px" }}
      className="relative"
    >
      {inView && <Suspense fallback={<Spinner />}>{component}</Suspense>}
    </div>
  );
};

export default LazySection;
