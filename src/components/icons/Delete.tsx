import * as React from "react";

function Delete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
    fill="none" 
    viewBox="0 0 15 15" 
    height="1.5em" 
    width="1.5em" 
    {...props}>
      <path stroke="currentColor" d="M4.5 4.5l6 6m-6 0l6-6" />
    </svg>
  );
}

export default Delete;
