import React from "react";
import Link from "next/link";
import appBarStyles from "./styles/AppBar.module.css";

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`top-[3.4rem] right-0 sm:hidden fixed ${
        appBarStyles.glassmorphism
      } w-48 h-screen  ${
        appBarStyles.borderSidebar
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
  );
};

export default SideBar;
