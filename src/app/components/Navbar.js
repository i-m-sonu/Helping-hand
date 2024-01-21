import Link from "next/link";
import head from "../css/navbar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  return (
    <>
      <div className={head.head}>
        <h3>Arpit Rangra</h3>
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
          <Link href="/components/Project">
            <strong className={head.res}>Project</strong>
          </Link>
          {/* </a> */}
        </div>
        <div className={head.link}>
          <div>
            <a href="https://www.linkedin.com/in/arpit-rangra-9b9321205/">
              <LinkedInIcon className={head.icon} />
            </a>
          </div>
          <div>
            <a href="https://github.com/Arpit110934">
              <GitHubIcon className={head.icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
