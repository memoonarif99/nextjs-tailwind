"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@app/hooks";
import NavSection from "./nav-section";

import { usePathname } from "next/navigation";
import {
  Dashboard,
  Employees,
  SidebarLogo,
  Credentials,
  Templates,
  Analytics,
  Notification,
  HelpCenter,
  Menu,
} from "../../public/images";

const sections = [
  {
    title: "",
    items: [
      {
        title: "Dashboard",
        path: "/dashboard/home",
        icon: <Dashboard />,
      },
      {
        title: "Employees",
        path: "/dashboard/employee",
        icon: <Employees />,
      },
      //
      {
        title: "Credentials",
        path: "/",
        icon: <Credentials />,
      },
      {
        title: "Templates",
        path: "/",
        icon: <Templates />,
      },
      {
        title: "Analytics",
        path: "/",
        icon: <Analytics />,
      },
      {
        title: "Notifications",
        path: "/",
        icon: <Notification />,
      },
      {
        title: "Help Center",
        path: "/",
        icon: <HelpCenter />,
      },
    ],
  },
];

const DashboardSidebar = () => {
  const { user } = useAuth();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const content = (
    <div className="flex flex-col h-full fixed max-h-[100vh]">
      {/* User Section */}
      <div className="p-4">
        <div className="flex items-center bg-white rounded p-4 overflow-hidden shadow-sm">
          <Link href="/dashboard/users" className="flex gap-2 items-center">
            <SidebarLogo />
            <p className="text-[17px] font-bold">CredentialFlow</p>
          </Link>
          <div className="ml-4">
            <span className="text-gray-900 font-semibold">{user?.name}</span>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="p-4 space-y-4">
        {sections.map((section) => (
          <NavSection
            key={section.title}
            pathname={pathname as string}
            {...section}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:hidden lg:block w-[280px] h-full bg-white border-r">
        {content}
      </div>

      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 "
        onClick={toggleDrawer}
      >
        <Menu />
      </button>
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleDrawer}
          ></div>

          {/* Drawer Content */}
          <div className="relative w-[280px] h-full bg-white shadow-lg z-50">
            <button
              className="absolute top-4 right-4 text-gray-800"
              onClick={toggleDrawer}
            >
              ✕
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSidebar;
