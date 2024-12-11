import React from "react";

const Templates = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 1.66675V18.3334"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 7.08337H18.3333"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 12.9166H18.3333"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.29996 2.76675C2.16663 3.69175 1.66663 5.22508 1.66663 7.50008V12.5001C1.66663 16.6667 3.33329 18.3334 7.49996 18.3334H12.5C16.6666 18.3334 18.3333 16.6667 18.3333 12.5001V7.50008C18.3333 3.33341 16.6666 1.66675 12.5 1.66675H7.49996"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Templates;
