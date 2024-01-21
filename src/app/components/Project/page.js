import React from "react";
import Navbar from "../Navbar";
import fill from "../../css/project1.module.css";

const page = () => {
  return (
    <>
      <Navbar />
      <div className={fill.resumeContainer}>
        <embed className={fill.fill} src="/project.pdf" width="100%" height="100%" type="application/pdf"></embed>
      </div>
    </>
  )
}

export default page