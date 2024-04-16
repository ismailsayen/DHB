
import { BrowserRouter, } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Caroussel from "./components/Caroussel";
import Flyer from "./components/Flyer";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <Section1 />
        <Caroussel />
        <Flyer />
      </BrowserRouter>
    </div>
  );
}

export default App;
