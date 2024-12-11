import React from "react";

const Dashboard = ({ ...props }) => {
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
        d="M10 15V12.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.2001 16.0334C17.0001 17.2084 15.8584 18.175 14.6667 18.175H5.33339C4.13339 18.175 3.00006 17.2167 2.80006 16.0334L1.69172 9.40004C1.55006 8.58337 1.96672 7.4917 2.61672 6.97504L8.39172 2.35004C9.27506 1.6417 10.7167 1.6417 11.6084 2.35837L17.3834 6.97504C18.0251 7.4917 18.4417 8.58337 18.3084 9.40004L17.7917 12.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Dashboard;
