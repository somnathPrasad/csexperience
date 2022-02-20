import Link from "next/link";
import footerStyles from "./styles/footer.module.css";
import ExternalLinkIcon from "./svg/ExternalLinkIcon";

const Footer = () => {
  
  return (
    <footer className={`${footerStyles.footer} flex justify-evenly`}>
      <div>
        <h1 className="text-lg">Portfolio</h1>
        <ul className={`text-base ${footerStyles.childHover} text-left`}>
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
        <h1 className="text-lg">Social</h1>
        <ul className={`flex flex-col text-base ${footerStyles.childHover} text-left`}>
          <li>
            <Link href="https://www.linkedin.com/in/somnath-prasad/">
              <a target="_blank" className="flex">
                <span className="pr-2">LinkedIn</span>
                <ExternalLinkIcon/>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UCL8q-8ujVGhMYCAVM_bJ-9w">
              <a target="_blank" className="flex">
                <span className="pr-2">Youtube</span>
                <ExternalLinkIcon/>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/somnathprasad17">
              <a target="_blank" className="flex items-center">
                <span className="pr-2">Twitter</span>
                <ExternalLinkIcon/>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/somnathPrasad">
              <a target="_blank" className="flex items-center">
                <span className="pr-2">Github</span>
                <ExternalLinkIcon/>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
