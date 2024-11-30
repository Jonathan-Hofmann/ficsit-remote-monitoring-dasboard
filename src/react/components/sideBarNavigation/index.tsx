"use client";

import Link from "next/link";
import type React from "react";
import { useState } from "react";

import styles from "./styles.module.scss";

export const SideBarNavigation = (): React.JSX.Element => {
  const [isSideBarLarge, setIsSideBarLarge] = useState(false);

  const links = [
    [
      {
        label: "Homepage",
        link: "/",
      },
      {
        label: "Power",
        link: "/power",
      },
    ],
    [
      {
        label: "Settings",
        link: "/settings",
      },
    ],
  ];

  return (
    <aside
      className={`bg-blue-900 h-screen flex flex-col gap-6 py-6 overflow-x-hidden overflow-y-auto transition-all ease-in-out duration-250 ${isSideBarLarge ? styles.sidebar_navigation_large : styles.sidebar_navigation_small}`}
    >
      <button
        type="button"
        onClick={() => setIsSideBarLarge((prev) => !prev)}
      >
        {isSideBarLarge ? "Collapse" : "Expand"}
      </button>
      <div className="flex flex-col justify-between h-full">
        {links.map((groupLink) => (
          <div
            key={groupLink[0].link}
            className="flex flex-col"
          >
            {groupLink.map((link) => (
              <Link
                key={link.label}
                href={link.link}
              >
                <p className="text-center">{link.label}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};
