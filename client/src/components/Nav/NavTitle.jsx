import "./NavTitle.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="header">
        <Link to="/" className="main-link">
          <h1>&lt;Nathaly Herrera | Front End Web Developer /&gt;</h1>
        </Link>
      </div>
    </>
  );
}

export default Nav;
