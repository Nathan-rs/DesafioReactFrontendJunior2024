import * as React from "react";

function IconCheck(custumer: {class: string}) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={custumer.class}
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default IconCheck;
