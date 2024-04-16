
import { BrowserRouter, } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Caroussel from "./components/Caroussel";
import Flyer from "./components/Flyer";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Section />
        <Section2 />
        <Caroussel />
        <Flyer />
      </BrowserRouter>
    </div>
  );
}

export default App;
