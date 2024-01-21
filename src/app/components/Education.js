import Image from "next/image";
import edu from "../css/education.module.css";
const Education = () => {
  return (
    <>
      <div className={edu.edu}>
        <div className={edu.head}>
          <h1>Education</h1>
          <div className={edu.body}>
            <div className={edu.school}>
              <Image className={edu.img} src='/clglogo.jpg' width={150} height={150}/>
              <div className={edu.dis}>
                <i>

                10th and 12th
                </i>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className={edu.school}>
              <Image className={edu.img} src='/clglogo.jpg' width={150} height={150}/>
              <div className={edu.dis}>
               <i>
               B.Tech. AI&DS
                </i> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
