import React from "react";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      <Header/>
      <Home/>
      <About/>
      <Skills/> 
      <Projects/>
    </div>
  );
};

export default App;
