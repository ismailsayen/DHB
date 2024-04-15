import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
function App() {
  const linkPhone = 'https://wa.me/18258690354';

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Section linkPhone={linkPhone} />
      </BrowserRouter>
    </div>
  );
}

export default App;
