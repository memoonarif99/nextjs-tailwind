// "use client";

// import React, { useState } from "react";
// // import { experimentalStyled } from "@mui/material/styles";
// import DashboardNavbar from "./dashboard-navbar";
// import DashboardSidebar from "./dashboard-sidebar";
// import { ProtectedRoute } from "@app/app/protected/protected-route";

// interface DashboardLayoutProps {
//   children?: React.ReactNode;
// }

// const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   // const [isSidebarMobileOpen, setIsSidebarMobileOpen] =
//   //   useState<boolean>(false);

//   // const onToggle = (): void => {
//   //   setIsSidebarMobileOpen((prevState: boolean) => !prevState);
//   // };

//   // const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   const [isSidebarMobileOpen, setIsSidebarMobileOpen] =
//     useState<boolean>(false);

//   const onToggle = (): void => {
//     setIsSidebarMobileOpen((prevState: boolean) => !prevState);
//   };
//   return (
//     // <ProtectedRoute>
//     //   <div className="flex h-full overflow-hidden w-full">
//     //     <DashboardSidebar
//     //       onMobileClose={onToggle}
//     //       openMobile={isSidebarMobileOpen}
//     //     />

//     //     <DashboardNavbar onSidebarMobileOpen={onToggle} />
//     //     <div className="flex  overflow-hidden pt-16 lg:pl-[280px]">
//     //       <div className="flex  overflow-hidden">
//     //         <div className=" h-full overflow-auto relative ">{children}</div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </ProtectedRoute>

//     // <ProtectedRoute>
//     //   {/* <div className="flex min-h-screen"> */}
//     //   <div className="flex min-h-screen ">
//     //     <aside className="fixed inset-y-0 left-0 w-[280px] bg-white border-r">
//     //       <DashboardSidebar
//     //         onMobileClose={onToggle}
//     //         openMobile={isSidebarMobileOpen}
//     //       />
//     //     </aside>

//     //     <div className="flex-1 ml-[280px]">
//     //       {/* Top Navbar */}
//     //       <DashboardNavbar onSidebarMobileOpen={onToggle} />

//     //       {/* Content Area - Below Navbar */}
//     //       <div>{children}</div>
//     //     </div>
//     //   </div>
//     // </ProtectedRoute>

//     <ProtectedRoute>
//       <div className="flex min-h-screen bg-gray-40">
//         {/* Sidebar - Hidden on mobile by default, shown on desktop */}
//         <aside className="hidden lg:block fixed inset-y-0 left-0 w-[280px] bg-white border-r transform transition-transform duration-300 ease-in-out">
//           <DashboardSidebar
//             onMobileClose={onToggle}
//             openMobile={isSidebarMobileOpen}
//           />
//         </aside>

//         {/* Mobile Sidebar - Shown when toggled */}
//         {isSidebarMobileOpen && (
//           <div className="lg:hidden fixed inset-0 -z-50" id="mobile-view">
//             <div
//               className="absolute inset-0 bg-gray-600 opacity-75"
//               onClick={onToggle}
//             />
//             <aside className="fixed inset-y-0 left-0 w-[280px] bg-white transform transition-transform duration-300 ease-in-out">
//               <DashboardSidebar
//                 onMobileClose={onToggle}
//                 openMobile={isSidebarMobileOpen}
//               />
//             </aside>
//           </div>
//         )}

//         {/* Main Content */}
//         <div className="flex-1 lg:ml-[280px]">
//           {/* Navbar */}
//           <DashboardNavbar onSidebarMobileOpen={onToggle} />

//           {/* Content Area */}
//           <main className="p-4 lg:p-6">{children}</main>
//         </div>
//       </div>
//     </ProtectedRoute>
//   );
// };

// export default DashboardLayout;

"use client";

import React, { useState } from "react";
import DashboardNavbar from "./dashboard-navbar";
import DashboardSidebar from "./dashboard-sidebar";
import { ProtectedRoute } from "@app/app/protected/protected-route";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => setIsMobileSidebarOpen((prev) => !prev);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-40">
        {/* Desktop Sidebar */}
        <DashboardSidebar />

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed inset-0 z-50 ${
            isMobileSidebarOpen ? "block" : "hidden"
          }`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileSidebar}
          />
          {/* Sidebar Content */}
          <aside className="absolute top-0 left-0 w-[280px] h-full bg-white shadow-lg">
            <DashboardSidebar />
          </aside>
        </div>

        {/* Main Content */}
        <div className="flex-1 ">
          {/* Navbar */}
          <DashboardNavbar onSidebarMobileOpen={toggleMobileSidebar} />

          {/* Page Content */}
          <main> {children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
