"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-14 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              item="Home"
              setActive={setActive}
              active={active}
            ></MenuItem>
          </Link>

          <MenuItem item="Our Courses" setActive={setActive} active={active}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/">Basic Music Theory</HoveredLink>
              <HoveredLink href="/">Advance Composition</HoveredLink>
              <HoveredLink href="/">Songwriting</HoveredLink>
              <HoveredLink href="/">Music Production</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem
              item="Contact Us"
              setActive={setActive}
              active={active}
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
