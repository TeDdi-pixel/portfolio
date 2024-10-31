import { useEffect, useState } from "react";
import { useHeaderStore } from "../widgets/header/store";
import { useInView } from "react-intersection-observer";

const useSectionInView = () => {
  const { inView, ref: setRef } = useInView({
    trackVisibility: true,
    rootMargin: "-50% 0px",
    threshold: 0,
    delay: 100,
  });
  const [sectionId, setSectionId] = useState<string>("");
  const { setSelectedLink } = useHeaderStore((state) => state);

  useEffect(() => {
    if (inView) {
      setSelectedLink(sectionId);
    }
  }, [inView, sectionId, setSelectedLink]);

  const handleSectionId = (node: HTMLDivElement | null) => {
    setRef(node);
    if (node) setSectionId(node.id);
  };
  return handleSectionId;
};

export default useSectionInView;
