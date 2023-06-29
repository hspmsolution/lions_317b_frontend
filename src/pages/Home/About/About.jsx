import "./about.css";
import Mp3 from "./mp3";

const About = () => {
  return (
    <div className="about-cnr">
      <div className="about-card">
        <div className="card-header"></div>
        <div className="about-dist">
          <img
            src={"https://lions317b.org/api/static/assets/1688062752819-logo2.jpg"}
            alt=""
          />
          <h1 className="about-dist-h">About District 317-B</h1>
          <p>
            Welcome to our website of lions club international's district 317-B.
            and all members of our district, 317-B. sow service seeds with
            kindness in unity and diversity to give more for community. your
            journey through the web pages is made extremely simple with distinct
            information about our organization and its administrative
            functioning and reporting.
          </p>
          <Mp3 />

          <p>Click the play button to listen district song.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
