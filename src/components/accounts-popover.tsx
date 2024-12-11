"use client";

import { useRef, useState } from "react";
import { useAuth } from "@app/hooks";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DrownArrow, Notification } from "../../public/images";
import { useClickOutside } from "@app/utils";
import Link from "next/link";

const AccountPopover = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { logout } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useUser();

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleClose = (): void => {
    setOpen(!open);
  };

  useClickOutside(anchorRef, () => {
    if (open) setOpen(false);
  });
  useClickOutside(dropdownRef, () => {
    if (open) setOpen(false);
  });

  const handleLogout = async (): Promise<void> => {
    try {
      handleClose();

      await logout();
      router.push("/");
    } catch (err) {
      // console.error(err);
    }
  };

  // console.log("open", open);

  return (
    <>
      {/* <div className="flex items-center focus:outline-none gap-2">
        <span className="text-black-400">
          <Notification />
        </span>
        <img
          src={user?.picture || "/default-avatar.png"}
          alt="user avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
        <button
          onClick={handleOpen}
          ref={anchorRef}
          className="flex items-center gap-2"
        >
          <p>{user?.email}</p>
          <DrownArrow />
        </button>
      </div>

      {open && (
        <div className="fixed  mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 top-11 right-1">
          <div className="border-t border-gray-100" />
          <div className="p-4 w-full">
            <a
              href="/api/auth/logout"
              // onClick={handleLogout}
              className="block w-full px-4 py-2 text-sm font-medium text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Logout
            </a>
          </div>
        </div>
      )} */}

      <div className="flex items-center focus:outline-none gap-2 relative">
        <button className="text-black-400 hidden sm:block">
          <Notification />
        </button>
        <img
          src={user?.picture || ""}
          alt="user avatar"
          className="h-8 w-8 rounded-full object-cover bg-inherit"
          loading="lazy"
        />

        <button
          onClick={handleOpen}
          ref={anchorRef}
          className="flex items-center gap-2"
        >
          <p className="hidden sm:block truncate max-w-[150px]">
            {user?.email}
          </p>
          <DrownArrow className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div
          ref={dropdownRef}
          id="mobile-view"
          className="fixed sm:absolute lg:fixed lg:top-[53px] mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 right-4 sm:right-0 lg:right-1  top-14 sm:top-full z-50"
        >
          <div className="border-t border-gray-100" />
          <div className="p-2 w-full">
            <Link
              href="/api/auth/logout"
              className="block w-full px-3 py-2 text-sm font-medium text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPopover;
