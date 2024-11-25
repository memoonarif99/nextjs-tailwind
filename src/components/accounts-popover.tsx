"use client";

import { useRef, useState } from "react";
import { useAuth } from "@app/hooks";
import { useRouter } from "next/navigation";

const AccountPopover = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const { user, logout } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      handleClose();
      await logout();
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        ref={anchorRef}
        className="flex items-center focus:outline-none"
      >
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt="user avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
      </button>

      {open && (
        <div className="absolute  mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 top-11 right-1">
          <div className="p-4">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
          </div>
          <div className="border-t border-gray-100" />
          <div className="p-4">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPopover;
