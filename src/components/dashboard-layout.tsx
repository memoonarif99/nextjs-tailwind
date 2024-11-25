"use client";

import React, { useState } from "react";
// import { experimentalStyled } from "@mui/material/styles";
import DashboardNavbar from "./dashboard-navbar";
import DashboardSidebar from "./dashboard-sidebar";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] =
    useState<boolean>(false);

  const onToggle = (): void => {
    setIsSidebarMobileOpen((prevState: boolean) => !prevState);
  };
  return (
    <div className="flex h-full overflow-hidden w-full">
      <DashboardNavbar onSidebarMobileOpen={onToggle} />
      <DashboardSidebar
        onMobileClose={onToggle}
        openMobile={isSidebarMobileOpen}
      />
      <div className="flex flex-1 overflow-hidden pt-16 lg:pl-[280px]">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 h-full overflow-auto relative ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
