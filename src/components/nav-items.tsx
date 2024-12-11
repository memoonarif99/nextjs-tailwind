"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavItemProps {
  active?: boolean;
  children?: React.ReactNode;
  depth: number;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  open?: boolean;
  path?: string;
  title: string;
}

const NavItem = ({
  active,
  children,
  depth,
  icon,
  info,
  open: openProp,
  path,
  title,
}: NavItemProps) => {
  const [open, setOpen] = useState<boolean>(openProp as boolean);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const paddingLeft = depth > 0 ? 32 + 8 * depth : 16;

  // Branch
  if (children) {
    return (
      <li className="block py-0">
        <button
          onClick={handleToggle}
          className="flex w-full items-center justify-between px-2 py-3 text-left text-gray-600 hover:bg-gray-50"
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          <span className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            <span className="font-medium">{title}</span>
          </span>
          <span className="flex items-center">
            {info}
            {!open ? (
              // <ChevronRight className="h-4 w-4" />
              <p>rightarror</p>
            ) : (
              // <ArrowDownward className="h-4 w-4" />p
              <p>downarrow</p>
            )}
          </span>
        </button>
        <div className={`${open ? "block" : "hidden"}`}>{children}</div>
      </li>
    );
  }

  // Leaf
  return (
    <li className="py-0">
      <Link href={path as string}>
        <span
          className={`flex w-full items-center text-md px-2 py-3 text-left leading-snug rounded-md hover:bg-[#F97B231A] hover:font-[500] hover:text-orange-500 my-4 
            ${
              active
                ? "font-[500] text-orange-500 bg-[#F97B231A]"
                : "font-[400] text-[#99999B]"
            }`}
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          {icon && <span className="mr-2">{icon}</span>}
          <span className="flex-grow">{title}</span>
          {info && <span>{info}</span>}
        </span>
      </Link>
    </li>
  );
};

NavItem.defaultProps = {
  active: false,
  open: false,
};

export default NavItem;
