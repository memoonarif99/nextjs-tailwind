import React from "react";

const TotalEmployees = ({ ...props }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.587821"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.66669 5.33333C6.66669 8.27885 9.0545 10.6667 12 10.6667C14.9455 10.6667 17.3334 8.27885 17.3334 5.33333C17.3334 2.38781 14.9455 0 12 0C9.0545 0 6.66669 2.38781 6.66669 5.33333ZM20 10.6667C20 12.8758 21.7909 14.6667 24 14.6667C26.2092 14.6667 28 12.8758 28 10.6667C28 8.45753 26.2092 6.66667 24 6.66667C21.7909 6.66667 20 8.45753 20 10.6667Z"
        fill="#8280FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9778 13.3333C5.68255 13.3333 0.517678 16.5687 0.000868912 22.9323C-0.0272823 23.2789 0.635616 24 0.970003 24H22.9956C23.9972 24 24.0128 23.194 23.9972 22.9333C23.6065 16.3909 18.3616 13.3333 11.9778 13.3333ZM31.2746 24L26.1333 24C26.1333 20.9988 25.1417 18.2291 23.4683 16.0008C28.0103 16.0505 31.7189 18.3469 31.998 23.2C32.0092 23.3955 31.998 24 31.2746 24Z"
        fill="#8280FF"
      />
    </svg>
  );
};

export default TotalEmployees;