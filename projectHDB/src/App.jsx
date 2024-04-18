import './App.css';
import React,{ useState ,useEffect} from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Caroussel from "./components/Caroussel";
import Flyer from "./components/Flyer";
import Footer from "./components/Footer";
import { FaAngleUp } from "react-icons/fa6";
function App() {
  const [name, setName] = useState("");
  const handleResize = () => {
    setName(window.innerWidth > 500 ? "haut" : "Up");
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Caroussel />
      <Flyer />
      <div>
        <a href={`#${name}`}>
          <FaAngleUp className="icone-UP" size={50} />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
