"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

const TOP_OFFSET = 60;

const Navbar = () => {
  return (
    <div className="text-text-primary dark:bg-d-background dark:text-d-text-primary md:pr-15 sticky top-0 z-20 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between bg-transparent py-4 pl-5 pr-10 font-sans font-bold uppercase text-white dark:border-gray-800 lg:pl-0">
      <Link href="/" className="flex gap-2">
        <Image
          src="/logo/logo-ssw.svg"
          width={56}
          height={56}
          alt="Logo SSW"
        />
        <div className="m-auto hidden justify-center text-center font-semibold md:flex">
          SMART SINERGY WORLD
        </div>
      </Link>
      <Nav />
      <NavigationMenu className="hidden lg:flex">
        <Link href="/formulir" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Join Mitra
          </NavigationMenuLink>
        </Link>
      </NavigationMenu>
    </div>
  );
};

export const NavbarBlog = () => {
  return (
    <div>
      <div className="dark:bg-d-background dark:text-d-text-primary md:pr-15 sticky top-0 z-20 mx-auto flex flex-col w-full flex-wrap items-start justify-between bg-[#181818] py-4 font-sans font-bold uppercase text-white dark:border-gray-800 lg:pl-0">
        <Link href="/" className="flex md:px-56 px-2 gap-4">
          <Image
            src="/logo/logo-ssw.svg"
            width={56}
            height={56}
            alt="Logo SSW"
          />
          <div className="my-auto font-semibold md:flex">
            SMART SINERGY WORLD
          </div>
        </Link>
      </div>
      <div className="bg-black text-white py-3">
        <div className="md:px-56 px-4">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export const NavbarGeneral = () => {
  const [showNav, setShowNav] = useState(true);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    var prevScrollpos = window.scrollY;
    const handleScroll = () => {
      var currentScrollPos = window.scrollY;
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
      if (prevScrollpos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `text-black bg-background mx-auto flex flex-wrap items-center justify-between font-sans font-bold uppercase text-text-primary dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary pl-8 pr-10 lg:pl-28 md:pr-24 py-4`;

  return (
    <div
      className={`sticky z-50 transition-all ease-in duration-300 ${
        showNav ? "top-0" : "-top-40"
      }`}
    >
      <nav className={navbarClasses}>
        <Link href="/" className="flex gap-2">
          <Logo width={56} height={56} />
          <div className="m-auto hidden justify-center text-center font-bold md:flex">
            SMART SINERGY WORLD
          </div>
        </Link>
        <Nav />
        <NavigationMenu className="hidden lg:flex">
          <Link href="/formulir" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Join Mitra
            </NavigationMenuLink>
          </Link>
        </NavigationMenu>
      </nav>
      <Breadcrumb />
    </div>
  );
};

export default Navbar;
