import Link from "next/link";
import footerStyles from "./styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  const externalLinkIcon = (
    <Image
      src="/external-link.svg"
      alt="external link logo"
      width={72}
      height={16}
    />
  );
  return (
    <footer className={`${footerStyles.footer} flex justify-evenly`}>
      <div>
        <h1 className="text-xl">Portfolio</h1>
        <ul className={`text-lg ${footerStyles.childHover} text-left`}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl">Social</h1>
        <ul className={`flex flex-col text-lg ${footerStyles.childHover} text-left`}>
          <li>
            <Link href="https://www.linkedin.com/in/somnath-prasad/">
              <a target="_blank">
                <span>LinkedIn</span>
                {externalLinkIcon}
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UCL8q-8ujVGhMYCAVM_bJ-9w">
              <a target="_blank">
                <span>Youtube</span>
                {externalLinkIcon}
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/somnathprasad17">
              <a target="_blank">
                <span>Twitter</span>
                {externalLinkIcon}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
