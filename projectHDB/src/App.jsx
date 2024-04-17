
import { BrowserRouter, } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Caroussel from "./components/Caroussel";
import Flyer from "./components/Flyer";
import Footer from "./components/Footer";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <Section1 />
        <Caroussel />
        <Flyer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
