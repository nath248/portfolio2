import "./ContactMe.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import React, { useRef } from "react";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdfwmov",
        "template_edhpmd6",
        form.current,
        "user_bfxmsXbkevAN1OCkQEcPS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="contact-me">
      <div className="main-contact">
        <div className="contact-div">
          <h4 className="title-h4">Contact Me</h4>
          <form ref={form} onSubmit={sendEmail}>
            <label>Subject:</label>
            <input placeholder="Enter Subject" name="subject"></input>
            <label>Full Name:</label>
            <input placeholder="Enter Your Full Name" name="from_name"></input>
            <label>Email:</label>
            <input placeholder="Enter Your Email" name="email"></input>
            <label>Message:</label>
            <textarea
              placeholder="Enter Your Message"
              name="message"
            ></textarea>
            <button className="submit">Submit</button>
          </form>
        </div>
        <div className="follow-div">
          <h4 className="title-h4">Follow Me</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/nath248/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon sx={{ fontSize: 30 }} /> -nath248
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nath248"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon sx={{ fontSize: 30 }} /> -nath248
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/aboutnat248"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon sx={{ fontSize: 30 }} /> -aboutnat248
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="certs-contact-me">
        <h4 className="title-h4">Click below to check out my certificates:</h4>
        <Link to="/certs" className="title-h3">
          #CERTIFIED
        </Link>
        <br />
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641168383/html-5_vxq87g.png"
          alt="html-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641168383/css_1_vj8xt5.png"
          alt="css-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641168383/javascript_puzjbb.png"
          alt="js-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641169120/react-2_cky2r0.svg"
          alt="react-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641169120/nodejs-icon_azfrje.svg"
          alt="node-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641169120/mongodb-icon-1_y14uvj.svg"
          alt="mongodb-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641169409/expressjs_logo_icon_169185_anvxct.png"
          alt="express-icon"
          className="icons"
        ></img>
        <img
          src="https://img.icons8.com/dusk/64/000000/python.png"
          alt="python-icon"
          className="icons"
        ></img>
        <img
          src="https://img.icons8.com/ios/50/000000/django.png"
          alt="django-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641168806/visual-studio_vpjrbz.png"
          alt="vs-icon"
          className="icons"
        ></img>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641168746/github-sign_pr6gdx.png"
          alt="github-icon"
          className="icons"
        ></img>
      </div>
    </div>
  );
}

export default ContactMe;
