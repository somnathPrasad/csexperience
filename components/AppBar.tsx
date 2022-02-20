import { NextPage } from "next";
import Link from "next/link";
import styles from "./styles/AppBar.module.css";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import MenuIcon from "./svg/MenuIcon";
import SideBar from "./SideBar";

export default function AppBar(){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`h-fit fixed top-0 left-0 w-screen sm:py-5 py-2 sm:text-lg ${styles.glassmorphism} ${styles.border} grid grid-rows-1 grid-cols-2`}
      >
        <div className="sm:flex hidden justify-around items-center">
          <Link href="/">
            <a className="hover:text-cyan-400 ">Home</a>
          </Link>
          <Link href="/blogs">
            <a className="hover:text-cyan-400 ">Blogs</a>
          </Link>
          <Link href="/tutorials">
            <a className="hover:text-cyan-400 ">Tutorials</a>
          </Link>
          <Link href="/portfolio">
            <a className="hover:text-cyan-400 ">Portfolio</a>
          </Link>
        </div>
        <div>
          <div>
            <ThemeSwitch />
          </div>
        </div>
        <div className="sm:hidden flex justify-end items-center">
          <div className="px-3 z-20" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </div>
        </div>
      </div>
      <SideBar isOpen={isOpen} />
    </>
  );
};
