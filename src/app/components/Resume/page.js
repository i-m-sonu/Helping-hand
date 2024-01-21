import React from "react";
import Navbar from "../Navbar";
import fill from "../../css/resume.module.css";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className={fill.resumeContainer}>
        <embed className={fill.fill} src="/resume.pdf" width="100%" height="100%" type="application/pdf"></embed>
      </div>
    </>
  );
};

export default Page;
