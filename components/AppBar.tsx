import { NextPage } from "next";
import Link from "next/link";
import styles from "./styles/AppBar.module.css";
import { useState } from "react";
import { useDarkTheme } from "../lib/hooks/useDarkTheme";


import ThemeSwitch from "./ThemeSwitch";

const AppBar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, mounted, setTheme] = useDarkTheme();

  return (
    <>
      <div
        className={`h-fit fixed top-0 left-0 w-screen sm:py-6 py-3 sm:text-2xl ${styles.glassmorphism} ${styles.border} grid grid-rows-1 grid-cols-2`}
      >
        <div className="sm:flex hidden justify-around items-center">
          <Link href="/">
            <a className="hover:text-cyan-400 ">Home</a>
          </Link>
          <Link href="/posts/first-post">
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
            <ThemeSwitch/>
          </div>
        </div>
        <div className="sm:hidden flex justify-end items-center">
          <div
            className="px-3 z-20"
            onClick={() => setIsOpen((prevValue) => !prevValue)}
          >
            <svg
              fill={`${isDark? "#ffffff" : "#6b7280"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`top-[4.8rem] right-0 sm:hidden fixed ${
          styles.glassmorphism
        } w-[35vh] h-screen  ${
          styles.borderSidebar
        } z-10 transition ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-center z-10">
          <div className="flex flex-col py-10 text-xl items-center">
            <Link href="/">
              <a className="hover:text-cyan-400 pt-5">Home</a>
            </Link>
            <Link href="/blogs">
              <a className="hover:text-cyan-400 pt-5">Blogs</a>
            </Link>
            <Link href="/tutorials">
              <a className="hover:text-cyan-400 pt-5">Tutorials</a>
            </Link>
            <Link href="/portfolio">
              <a className="hover:text-cyan-400 pt-5">Portfolio</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppBar;
