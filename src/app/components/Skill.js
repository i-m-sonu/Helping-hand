import skill from "../css/skill.module.css";
const Skill = () => {
  return (
    <>
      <div className={skill.skill}>
        <h1>Skill</h1>
        <div className={skill.lan}>
          <h2>Languages</h2>

          <p>C++</p>
          <p>Python</p>
          <p>R</p>

          <h2>FrameWork</h2>
          <div className={skill.frame}>
            <p>Machine Learning</p>
          </div>
          <h2>Data Structure and Algorithm</h2>
          <div className="algo">
            <p>Array</p>
            <p>pnked pst</p>
            <p>Stack</p>
            <p>Queue</p>
            <p>Tree</p>
            <p>Graph</p>
          </div>
          <h2>Tools</h2>
          <div className="tool">
            <p>PowerBI</p>
            <p>TableU</p>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
