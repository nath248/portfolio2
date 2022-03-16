import Carousel from "react-bootstrap/Carousel";
import "./CarouselSlider.css";

function CarouselSlider() {
  return (
    <div className="projects-main" id="projects">
      <div className="carousel-slider">
        <h3 className="title-h3">Projects</h3>
        <Carousel fade>
          <Carousel.Item className="item">
            <a href="https://nath248.github.io/disney-mania/">
              <img
                className="d-block w-100"
                src="https://i.ibb.co/y4rhGWB/Screen-Shot-2022-01-01-at-12-35-38-PM.png"
                alt="First slide"
              />
            </a>
            <Carousel.Caption className="caption">
              <h3 className="caption-h3">Disney Mania!</h3>
              <p>
                A front-end app that allows you to search for random Disney tv
                shows & movies. This app is pulling data from two API's and
                rendering that data in its respective section. The site is fully
                responsive.
              </p>
              <hr />
              <p>HTML, CSS, JavaScript</p>
            </Carousel.Caption>
            <div className="hide">
              <h3 className="caption-h3">Disney Mania!</h3>
              <p>
                A front-end app that allows you to search for random Disney tv
                shows & movies. This app is pulling data from two API's and
                rendering that data in its respective section. The site is fully
                responsive.
              </p>
              <hr />
              <p>HTML, CSS, JavaScript</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="item">
            <a href="https://getting-quizzy-wit-it.netlify.app/">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,h_502,w_652/v1644876645/quizzy-app_ukn1yw.png"
                alt="Second slide"
              />
            </a>
            <Carousel.Caption className="caption">
              <h3 className="caption-h3">Gettin' Quizzy Wit It</h3>
              <p>
                A react app that provides 90's themed quizzes. This app pulls
                data from a self built Airtable API. This site is responsive and
                allows the user to take multiple quizzes as well as add
                questions to any of the quizzes to extend the data. This site is
                fully responsive.
              </p>
              <hr />
              <p>React.js, CSS</p>
            </Carousel.Caption>
            <div className="hide">
              <h3 className="caption-h3">Gettin' Quizzy Wit It</h3>
              <p>
                A react app that provides 90's themed quizzes. This app pulls
                data from a self built Airtable API. This site is responsive and
                allows the user to take multiple quizzes as well as add
                questions to any of the quizzes to extend the data. This site is
                fully responsive.
              </p>
              <hr />
              <p>React.js, CSS</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="item">
            <a href="https://rnlh.netlify.app/">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,h_502,w_652/v1643929663/rnlh-img_uxm7yk.png"
                alt="Third slide"
              />
            </a>
            <Carousel.Caption className="caption">
              <h3 className="caption-h3">RNLH</h3>
              <p>
                A Full-Stack React app that is a luxury marketplace. This site
                allows the users the ability to shop for products. This site has
                a sign in feature to further personalize the user experience and
                allows signed in users the ability to add products to sell, edit
                product details, and delete products. This site is fully
                responsive and was a group project.
              </p>
              <hr />
              <p>MongoDB, Express.js, React.js, Node.js</p>
            </Carousel.Caption>
            <div className="hide">
              <h3 className="caption-h3">RNLH</h3>
              <p>
                A Full-Stack React app that is a luxury marketplace. This site
                allows the users the ability to shop for products. This site has
                a sign in feature to further personalize the user experience and
                allows signed in users the ability to add products to sell, edit
                product details, and delete products. This site is fully
                responsive and was a group project.
              </p>
              <hr />
              <p>MongoDB, Express.js, React.js, Node.js</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="item">
            <a href="https://situater.netlify.app/">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,h_502,w_652/v1643929663/situater-img_bse2ow.png"
                alt="Fourth slide"
              />
            </a>
            <Carousel.Caption className="caption">
              <h3 className="caption-h3">Situater</h3>
              <p>
                A Full-Stack React app that utilizes python and postgreSQL to
                create a one to many database. This site allows the users to
                find different locations to travel to and their associated
                attractions. This site has a sign in feature to further
                personalize the user experience and allows signed in users the
                ability to add, edit and delete locations & attractions. This
                site is fully responsive.
              </p>
              <hr />
              <p>React.js, Python, Django</p>
            </Carousel.Caption>
            <div className="hide">
              <h3 className="caption-h3">Situater</h3>
              <p>
                A Full-Stack React app that utilizes python and postgreSQL to
                create a one to many database. This site allows the users to
                find different locations to travel to and their associated
                attractions. This site has a sign in feature to further
                personalize the user experience and allows signed in users the
                ability to add, edit and delete locations & attractions. This
                site is fully responsive.
              </p>
              <hr />
              <p>React.js, Python, Django</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselSlider;
