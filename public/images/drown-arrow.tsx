import React from "react";

const DrownArrow = ({ ...props }) => {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 6 4"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 2.79289L0.731617 0.146447C0.56425 -0.0488155 0.292893 -0.0488155 0.125526 0.146447C-0.0418419 0.341709 -0.0418419 0.658291 0.125526 0.853553L2.69695 3.85355C2.86432 4.04882 3.13568 4.04882 3.30305 3.85355L5.87447 0.853553C6.04184 0.658291 6.04184 0.341709 5.87447 0.146447C5.70711 -0.0488155 5.43575 -0.0488155 5.26838 0.146447L3 2.79289Z"
        fill="#0B0B0B"
      />
      <mask
        id="mask0_1390_2510"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="6"
        height="4"
      >
        <path
          d="M3 2.79289L0.731617 0.146447C0.56425 -0.0488155 0.292893 -0.0488155 0.125526 0.146447C-0.0418419 0.341709 -0.0418419 0.658291 0.125526 0.853553L2.69695 3.85355C2.86432 4.04882 3.13568 4.04882 3.30305 3.85355L5.87447 0.853553C6.04184 0.658291 6.04184 0.341709 5.87447 0.146447C5.70711 -0.0488155 5.43575 -0.0488155 5.26838 0.146447L3 2.79289Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1390_2510)"></g>
    </svg>
  );
};

export default DrownArrow;