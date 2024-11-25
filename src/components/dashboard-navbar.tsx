"use client";
import { MenuIcon } from "@app/icons";
import AccountPopover from "./accounts-popover";
import Link from "next/link";

interface DashboardNavbarProps {
  onSidebarMobileOpen?: () => void;
}

const DashboardNavbar = ({ onSidebarMobileOpen }: DashboardNavbarProps) => {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full z-50">
      <div className="min-h-[64px] px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onSidebarMobileOpen}
            className="lg:hidden text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg"
          >
            <MenuIcon className="h-5 w-5" />
          </button>

          <Link
            href="customers"
            className="text-gray-700 dark:text-gray-200 font-semibold"
          >
            App
          </Link>
        </div>

        <div className="flex items-center">
          <AccountPopover />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
