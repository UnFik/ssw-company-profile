"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <NavigationMenu className="flex-col lg:flex-row w-full sm:gap-2">
      <Link href="/" className="w-full" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          BERANDA
        </NavigationMenuLink>
      </Link>
      <Link href="/kemitraan" className="w-full" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          KEMITRAAN
        </NavigationMenuLink>
      </Link>
      <Link href="/produk" className="w-full" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          PRODUK
        </NavigationMenuLink>
      </Link>
      <Link href="/seminar" className="w-full" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          SEMINAR
        </NavigationMenuLink>
      </Link>
      <Link href="/artikel" className="w-full" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          ARTIKEL
        </NavigationMenuLink>
      </Link>
      <div className="flex lg:hidden">
        <Link href="/formulir" className="w-full" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Join Mitra
          </NavigationMenuLink>
        </Link>
      </div>
    </NavigationMenu>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex">
        <div className="lg:flex hidden justify-between">
          <NavLinks />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

const NavLinksBlog = () => {
  return (
    <NavigationMenu className="flex-col lg:flex-row w-full sm:gap-2">
      <Link href="/" className="w-full" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          BERANDA
        </NavigationMenuLink>
      </Link>
    </NavigationMenu>
  );
};

export const NavBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex">
        <div className="lg:flex hidden justify-between">
          <NavLinks />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
