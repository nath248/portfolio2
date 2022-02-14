import "./App.css";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import CarouselSlider from "./components/CarouselSlider/CarouselSlider";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Certs from "./components/Certs/Certs";
import Navbar from "./components/Nav/Navbar";
import NavTitle from "./components/Nav/NavTitle";
import Interests from "./components/Interests/Interests";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-app">
      <NavTitle />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<CarouselSlider />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/certs" element={<Certs />} />
        </Routes>
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
