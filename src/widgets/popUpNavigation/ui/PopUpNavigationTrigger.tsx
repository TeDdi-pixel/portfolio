import React from "react";

export const PopUpNavigationTrigger = React.forwardRef<HTMLSpanElement>(
  (_, ref) => {
    return <span className="absolute top-[63px]" ref={ref}></span>;
  }
);
