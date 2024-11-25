"use client";
import { useEffect } from "react";
// import { People, PollOutlined } from "@mui/icons-material";
import { useAuth } from "@app/hooks";
import NavSection from "./nav-section";
import Scrollbar from "./scrollbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardSidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const sections = [
  {
    title: "General",
    items: [
      {
        title: "Customers",
        path: "/dashboard/customers",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        ),
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
          </svg>
        ),
      },
    ],
  },
];

const DashboardSidebar = ({
  onMobileClose,
  openMobile,
}: DashboardSidebarProps) => {
  const { user } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [pathname, openMobile, onMobileClose]);

  const content = (
    <div className="flex flex-col h-full">
      <Scrollbar options={{ suppressScrollX: true }}>
        <div className="lg:hidden flex justify-center p-4">
          <Link href="/dashboard/customers">
            <span className="text-gray-900 font-semibold">App</span>
          </Link>
        </div>
        <div className="p-4">
          <div className="flex items-center bg-white rounded p-4 overflow-hidden">
            <Link href="/dashboard/users">
              <img
                src={user?.avatar || "/default-avatar.png"}
                alt="User avatar"
                className="w-12 h-12 rounded-full cursor-pointer"
              />
            </Link>
            <div className="ml-4">
              <span className="text-gray-900 font-semibold">{user?.name}</span>
            </div>
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="p-4">
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={pathname as string}
              // className="mt-6 first:mt-0"
              {...section}
            />
          ))}
        </div>
        <hr className="border-gray-200" />
      </Scrollbar>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-16 left-0 w-72 h-[calc(100%-64px)] bg-white border-r border-gray-200">
        {content}
      </div>

      {/* Mobile Sidebar */}
      {openMobile && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onMobileClose}
          />
          <div className="absolute top-0 left-0 w-72 h-full bg-white">
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSidebar;
