import React from "react"

interface LimitLineTextProps {
  text: string;
  limit: number;
  className?: string;
}

function LimitLineText({ text, limit, className }: LimitLineTextProps): React.JSX.Element {

  return (
    <span
      className={className}
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: limit,
        WebkitBoxOrient: "vertical",
        maxHeight: "50px"
      }}
    >
      {text}
    </span>
  )
}

export default LimitLineText