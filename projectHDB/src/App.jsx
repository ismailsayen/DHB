import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Caroussel from "./components/Caroussel";
import Flyer from "./components/Flyer";
import Footer from "./components/Footer";
import { FaAngleUp } from "react-icons/fa6";
function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Caroussel />
      <Flyer />
      <div>
        <a href="#haut">
          <FaAngleUp className="icone-UP" size={50} />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
