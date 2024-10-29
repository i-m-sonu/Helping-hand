import Link from "next/link";
import head from "../css/navbar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  return (
    <>
      <div className={head.head}>
        <h3>Sonu Kumar</h3>
        <div className={head.nav}>
          <Link href="/">
            <strong className={head.res}>Home</strong>
          </Link>

          {/* <Link href="/components/Contact">
            <strong>Contact Me</strong>
          </Link> */}
          {/* <a href="/" download="/resume.pdf"> */}
          <Link href="/components/Resume">
            <strong className={head.res}>Resume</strong>
          </Link>
          {/* <Link href="/components/Project">
            <strong className={head.res}>Project</strong>
          </Link> */}
          {/* </a> */}
        </div>
        <div className={head.link}>
          <div>
            <a href="https://www.linkedin.com/in/sonu007/">
              <LinkedInIcon className={head.icon} />
            </a>
          </div>
          <div>
            <a href="https://github.com/i-m-sonu">
              <GitHubIcon className={head.icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
