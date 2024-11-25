// "use client";

// import { forwardRef } from "react";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import type { ScrollBarProps as PerfectScrollbarProps } from "react-perfect-scrollbar";
// import { Box } from "@mui/material";

// interface ScrollbarProps extends PerfectScrollbarProps {}

// // eslint-disable-next-line react/display-name
// const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>((props, ref) => {
//   const { children, ...other } = props;

//   const isMobile =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator?.userAgent
//     );

//   if (isMobile) {
//     return (
//       <Box ref={ref} sx={{ overflowX: "auto" }}>
//         {children}
//       </Box>
//     );
//   }

//   return (
//     <PerfectScrollbar
//       // @ts-ignore
//       ref={ref}
//       {...other}
//     >
//       {children}
//     </PerfectScrollbar>
//   );
// });

// export default Scrollbar;

"use client";

import { forwardRef } from "react";

interface ScrollbarProps extends React.HTMLProps<HTMLDivElement> {
  options?: {
    suppressScrollX?: boolean;
  };
}

// eslint-disable-next-line react/display-name
const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>((props, ref) => {
  const { children, options, ...other } = props;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator?.userAgent
    );

  // Determine if we should suppress horizontal scrolling
  const suppressScrollX = options?.suppressScrollX;

  if (isMobile) {
    return (
      <div ref={ref} className="overflow-x-auto" {...other}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`overflow-y-auto ${
        suppressScrollX ? "overflow-x-hidden" : "overflow-x-auto"
      }`}
      {...other}
    >
      {children}
    </div>
  );
});

export default Scrollbar;
