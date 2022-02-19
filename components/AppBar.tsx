import { NextPage } from "next";
import Link from "next/link";
import styles from "./styles/AppBar.module.css";
import Image from "next/image";
import { useState } from "react";

const menuIcon = (
  <Image src="/menu-icon.svg" alt="menu icon" width={35} height={30} />
);

const AppBar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`h-fit fixed top-0 left-0 w-screen sm:py-6 py-3 sm:text-2xl ${styles.glassmorphism} ${styles.border}`}
      >
        <div className="sm:flex hidden justify-around">
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
        <div className="sm:hidden flex justify-end">
          <div
            className="px-3"
            onClick={() => setIsOpen((prevValue) => !prevValue)}
          >
            {menuIcon}
          </div>
        </div>
      </div>
      <div
        className={`top-[3.7rem] right-0 sm:hidden fixed ${styles.glassmorphism} w-[35vh] h-screen  ${styles.borderSidebar} z-10 transition ease-in-out duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="text-center">
          <div className="flex flex-col py-10 text-xl">
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
