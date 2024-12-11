import React from "react";

const Notification = ({ ...props }) => {
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
        d="M10 5.3667V8.1417"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M17.1583 12.6416C17.7666 13.6583 17.2833 14.975 16.1583 15.35C12.1749 16.675 7.86661 16.675 3.88328 15.35C2.68328 14.95 2.22494 13.7333 2.88328 12.6416L3.94161 10.875C4.23328 10.3916 4.46661 9.53329 4.46661 8.97496V7.22496C4.46661 4.14996 6.94994 1.66663 10.0166 1.66663C13.0666 1.66663 15.5666 4.16663 15.5666 7.21663V8.96663C15.5666 9.11663 15.5833 9.28329 15.6083 9.45829"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M12.775 15.6833C12.775 17.2083 11.525 18.4583 9.99998 18.4583C9.24164 18.4583 8.54164 18.1417 8.04164 17.6417C7.54164 17.1417 7.22498 16.4417 7.22498 15.6833"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Notification;
