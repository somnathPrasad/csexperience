import { NextPage } from "next";
import Link from "next/link";
import styles from "./styles/AppBar.module.css";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";


const menuIcon = (
  <Image src="/menu-icon.svg" alt="menu icon" width={35} height={30} />
);

const AppBar: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
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
            <div className="flex sm:justify-center justify-start px-5">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 sm:ring-4 ring-gray-700 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                onClick={() => {setTheme(theme === "dark" ? "light" : "dark");setIsDark(!isDark)}}
              >
                <svg
                  className={`${!isDark&&"hidden"} w-8 h-8`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className={`${isDark&&"hidden"} w-8 h-8`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex justify-end items-center">
          <div
            className="px-3 z-20"
            onClick={() => setIsOpen((prevValue) => !prevValue)}
          >
            {menuIcon}
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
