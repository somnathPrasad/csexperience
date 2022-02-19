import { NextPage } from "next";
import Link from "next/link";
import styles from "./styles/AppBar.module.css"

const AppBar: NextPage = () => {
    return(
        <>
            <div className={`flex justify-evenly h-fit fixed sm:top-0 bottom-0 left-0 w-screen py-5 sm:text-2xl ${styles.glassmorphism} font-extrabold`}>
                <Link href="/">
                    <a className="hover:text-cyan-400 ">
                        Home
                    </a>
                </Link>
                <Link href="/blogs">
                    <a className="hover:text-cyan-400 ">
                        Blogs
                    </a>
                </Link>
                <Link href="/tutorials">
                    <a className="hover:text-cyan-400 ">
                        Tutorials
                    </a>
                </Link>
                <Link href="/portfolio">
                    <a className="hover:text-cyan-400 ">
                        Portfolio
                    </a>
                </Link>
            </div>
        </>
    )
}
export default AppBar;