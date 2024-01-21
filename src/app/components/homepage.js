import Image from "next/image";

import home from "../css/homepage.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
    <Head>
      <title>
        Arpit
      </title>
    </Head>
      <div className={home.all}>
        <div className={home.side}>
          <div>
            <div className={home.img}>
              <div className={home.container}>
                <Image src="/profile.jpeg" width={200} height={200} />
              </div>
            </div>
          </div>
          <div className={home.row}>
            <div className={home.para}>
              <h2>
                <strong>My name is Arpit Rangra</strong>
              </h2>
              <p>
                I am currently persuing Bachelor of technology in Artificial
                Intelligence and Data Science.
              </p>
            </div >
            <Link href="/components/Resume">
              <Button className={home.btn} variant="contained">Resume</Button>
            </Link>
            <a href="/" download='/resume.pdf'>
              <Button className={home.btn1} variant="contained">Resume</Button>
            </a>
          </div>
        </div>

        <div className={home.para}>
          <i>
            In the realm of bits and bytes, an
            <strong> ARTIFICIAL INTELLIGENCE STUDENT </strong>
            igniting innovation with algorithmic insights.
          </i>
        </div>
      </div>
    </>
  );
};

export default Homepage;
