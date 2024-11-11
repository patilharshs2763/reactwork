import React, { useState } from "react";
import "./Comman.css"; // Ensure the correct path to your CSS file
import ScrollingHeader from "./Components/Pages/ScrollingHeader/index";
import Footer from "./Components/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Gallery from "./Components/Pages/Gallery";
import Home from "./Components/Home";
import { Switch } from "antd";
import AnimatedCursor from "react-animated-cursor";
import About from "./Components/Pages/About";
import ScrollToTopButton from "./Components/Pages/ScrollToTopButton";
function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(true);
  const [buttonText, setButtonText] = useState("White");

  const toggleBackground = () => {
    setIsBlackBackground(!isBlackBackground);
    if (isBlackBackground) {
      setButtonText("Black");
    } else {
      setButtonText("White");
    }
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div
      className={`App ${isBlackBackground ? "white-background" : "black-background"
        }`}
    >

      <ScrollingHeader />

      <Switch
        defaultChecked={isBlackBackground}
        className={
          isBlackBackground
            ? " toggle-button bg-light"
            : "toggle-button bg-dark"
        }
        onChange={onChange}
        onClick={toggleBackground}
      />
      <div className="cursor__dot">
        {/* <AnimatedCursor
          innerSize={15}
          outerSize={40}
          color="10, 10 ,10"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        /> */}
        {/* <AnimatedCursor
          innerSize={20}
          outerSize={30}
          color="250, 101, 60"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        /> */}
        <AnimatedCursor
          // innerSize={8}
          innerSize={10}
          outerSize={44}
          color="255, 147, 1"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.4}
          // className="cursor__default"
          innerStyle={{ borderRadius: '50%' }} // Apply border radius to inner cursor
          outerStyle={{ borderRadius: '50%', border: '2px solid rgba(255, 147, 1, 0.3)' }} // Apply border and border radius to outer cursor
        />
      </div>
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;