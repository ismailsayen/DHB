import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Caroussel from "./components/Caroussel";
function App() {
  const linkPhone = 'https://wa.me/18258690354';

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Section linkPhone={linkPhone} />
        <Section2 linkPhone={linkPhone}/>
        <Caroussel/>
      </BrowserRouter>
    </div>
  );
}

export default App;
