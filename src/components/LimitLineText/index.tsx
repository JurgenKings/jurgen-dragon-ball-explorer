import React from "react"

interface LimitLineTextProps {
  text: string;
  limit: number;
  className?: string;
  maxHeight?: number;
}

function LimitLineText({ text, limit, className, maxHeight }: LimitLineTextProps): React.JSX.Element {

  return (
    <span
      className={className}
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: limit,
        WebkitBoxOrient: "vertical",
        maxHeight: maxHeight ? `${maxHeight}px` : "50px"
      }}
    >
      {text}
    </span>
  )
}

export default LimitLineText