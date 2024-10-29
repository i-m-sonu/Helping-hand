import pro from "../css/porject.module.css";

const Project = () => {
  return (
    <>
      <div className={pro.pro}>
        <h1>Projects</h1>
        <div>
          <h2> DISASTER MANAGEMENT PORTAL</h2>
          <p>
            Created a centralized portal that uses blockchain technology for
            supply chain management and weather prediction.
            <br /> Next.js, Node.js, Blockchain (Solidity)
          </p>
        </div>
        <div>
          <h2>AGROTOOL - Agricultural-based portal</h2>
          <p>
            This was used to leverage AI & ML for agricultural innovation and
            resource optimization, increasing crop yield prediction accuracy.{" "}
            <br /> Next.js, Machine Learning
          </p>
        </div>
        <div>
          <h2>PRICE PREDICTION SYSTEM</h2>
          <p>
            A prediction system that works on Machine learning Algorithms to
            predict the prices of fruits and vegetables in the market. It can
            provide great assistance to the farmers by giving insights about
            market prices.
            <br /> Next.js, Node.js, Machine Learning
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
