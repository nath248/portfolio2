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
            I am a passionate and dependable professional with six years of
            experience in a high-pressure environment. I've dedicated the past
            year to learning Software Development and I'm driven to start a new
            career in this industry due to the flexibility and continuous
            learning. A few of my personal goals entail traveling and learning
            about different cultures and gaining new skills. I consider myself
            to be patient and tactful when dealing with difficult tasks. I work
            well in a team setting and I am supportive when working in groups.
          </p>
          <a href="/files/resume.pdf" className="download" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
