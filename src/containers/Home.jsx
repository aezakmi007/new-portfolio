import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import HeroTypeWritter from "../components/HeroTypeWritter";

const Home = () => {
  return <section id="home" className="flex items-center justify-center flex-col gap-12 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <div className="w-full h-full flex flex-col items-start justify-center gap-4">

        <h2 className="text-3xl lg:text-4xl text-texlight">Hello, It's me
        <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white"> Abdullah Farhan Safwi</span>
        </h2>
        <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
          And I'm {" "}
          <HeroTypeWritter
          words={["Full Stack Developer...","a Next developer...", "a React developer...", "a Node developer...", "a MERN Stack developer...", "a Google Cloud practitioner..."]}
          speed={100}
          />
        </h2>
      </div>
      <div className="w-full h-full flex items-center justify-center lg:item-center">
        <motion.img initial={{y:0}}
        animate={{y:[-10, 10, -10]}}
        transition={{duration:2, repeat:Infinity, ease:"linear"}}
        src={Hero} className="w-auto h-auto object-contain"/>
      </div>
    </div>
  </section>
};

export default Home;
