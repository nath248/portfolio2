import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about" id="about-me">
      <div>
        <div className="about-img">
          <h3 className="title-h3">About Me</h3>
          <img
            src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641063184/DSC00466_rml7ly.jpg"
            alt="personal-img"
            className="personal-img"
          />
        </div>
        <div className="about-desc">
          <p>
            I am a dependable professional with eight years of experience in a
            high-pressure environment. I've dedicated myself to learning
            software development and I'm highly motivated to pursue a career in
            the dynamic field of tech, drawn by continuous learning and adaptability.
            My personal goals include travel, cultural exploration, and skill
            development. I possess patience and tact when handling complex
            tasks.
          </p>
          <a
            href="/files/2024_resume_NathalyH.pdf"
            className="download"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
