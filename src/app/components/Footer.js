import foot from "../css/footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <div className={foot.foot}>
        <div className={foot.left}>arpit.rangra19ar@gmail.com</div>
        <div className={foot.mid}></div>
        <div className={foot.right}>
          
          <a href="https://www.linkedin.com/in/arpit-rangra-9b9321205/">
            <LinkedInIcon className={foot.icon} />
          </a>
          <a href="https://github.com/Arpit110934">
            <GitHubIcon className={foot.icon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
