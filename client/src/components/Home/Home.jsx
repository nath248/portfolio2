import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="glass">
        <h1 className="header-home">Welcome to my Portfolio!</h1>
        <div className="text-wrapper">
          <div className="static">My name is</div>
          <ul className="dynamic">
            <li>
              <span>Nathaly</span>
            </li>
          </ul>
        </div>
        <br />
        <div className="text-wrapper">
          <div className="static">And I am a</div>
          <ul className="dynamic">
            <li>
              <span>Software Engineer</span>
            </li>
          </ul>
        </div>
        <br />
        <div className="text-wrapper">
          <div className="static">who enjoys:</div>
          <ul className="dynamic-list">
            <li>
              <span>Trying different food </span>
            </li>
            <li>
              <span>Binging Great Shows </span>
            </li>
            <li>
              & <span className="no-padding">Guessing Movie Endings </span>
            </li>
          </ul>
        </div>
        <p className="header-sub-text">
          Get to know a bit about me and reach out if your interested!
        </p>
      </div>
    </div>
  );
}

export default Home;
