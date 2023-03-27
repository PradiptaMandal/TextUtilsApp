import "./App.css";
//import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div>
        <Navbar title="TextUtilsApp" aboutText="AboutText" />

        {/* <Alert alert="This is alert"/>*/}
        <div className="container my-3">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<TextForm heading="Enter Text To Analysis" />}
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
