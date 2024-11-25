"use client";
import React from "react";
import NavItem from "./nav-items";
import { usePathname } from "next/navigation";

interface Item {
  path?: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  children?: Item[];
  title: string;
}

interface NavSectionProps {
  items: Item[];
  pathname: string;
  title: string;
}

const renderNavItems = ({
  depth = 0,
  items,
  pathname,
  matchPath,
}: {
  items: Item[];
  pathname: string;
  depth?: number;
  matchPath: any;
}): JSX.Element => (
  <ul className="list-none p-0">
    {items.reduce(
      (acc, item) =>
        reduceChildRoutes({
          acc,
          item,
          pathname,
          depth,
          matchPath,
        }) as any,
      []
    )}
  </ul>
);

const reduceChildRoutes = ({
  acc,
  pathname,
  item,
  depth,
  matchPath,
}: {
  acc: JSX.Element[];
  pathname: string;
  item: Item;
  depth: number;
  matchPath: any;
}): Array<JSX.Element> => {
  const key = `${item.title}-${depth}`;
  const exactMatch = item.path ? item.path === matchPath : false;

  if (item.children) {
    const partialMatch = item.path ? matchPath.startsWith(item.path) : false;

    acc.push(
      <NavItem
        active={partialMatch}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={partialMatch}
        path={item.path}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          items: item.children,
          pathname,
          matchPath,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        active={exactMatch}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

const NavSection = ({ items, pathname, title, ...other }: NavSectionProps) => {
  const matchPath = usePathname();

  return (
    <div {...other}>
      <h2 className="text-gray-700 text-xs font-bold uppercase tracking-wide mb-2">
        {title}
      </h2>
      {renderNavItems({
        items,
        pathname,
        matchPath,
      })}
    </div>
  );
};

export default NavSection;
