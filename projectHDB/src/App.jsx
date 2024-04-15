import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
          <Section />
      </BrowserRouter>
    </div>
  );
}

export default App;
