import Head from "next/head";
import Image from "next/image";
import styles from "./styles/layout.module.css";
import footerStyles from "../styles/footer.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import AppBar from "./AppBar";

const externalLinkIcon = (
  <Image
    src="/external-link.svg"
    alt="external link logo"
    width={72}
    height={16}
  />
);

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white">
      <AppBar />
      <div>{children}</div>
      <footer className={`${footerStyles.footer} flex justify-evenly`}>
        <div>
          <table className="text-left">
            <thead>
              <tr>
                <th className="text-xl">Portfolio</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`flex flex-col text-lg ${footerStyles.childHover}`}
              >
                <td>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </td>
                <td>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </td>
                <td>
                  <Link href="/resume">
                    <a>Resume</a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className="text-left">
            <tr>
              <th className="text-xl">Social</th>
            </tr>
            <tr className={`flex flex-col text-lg ${footerStyles.childHover}`}>
              <td>
                <Link href="https://www.linkedin.com/in/somnath-prasad/">
                  <a target="_blank">
                    <span>LinkedIn</span>
                    {externalLinkIcon}
                  </a>
                </Link>
              </td>
              <td>
                <Link href="https://www.youtube.com/channel/UCL8q-8ujVGhMYCAVM_bJ-9w">
                  <a target="_blank">
                    <span>Youtube</span>
                    {externalLinkIcon}
                  </a>
                </Link>
              </td>
              <td>
                <Link href="https://twitter.com/somnathprasad17">
                  <a target="_blank">
                    <span>Twitter</span>
                    {externalLinkIcon}
                  </a>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </footer>
    </div>
  );
}
