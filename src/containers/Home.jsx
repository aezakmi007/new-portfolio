import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import HeroTypeWritter from "../components/HeroTypeWritter";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../components/HomeSocialLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full h-full flex flex-col items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, It's me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              {" "}
              Abdullah Farhan Safwi
            </span>
          </h2>
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              words={[
                "Full Stack Developer...",
                "a Next developer...",
                "a React developer...",
                "a Node developer...",
                "a MERN Stack developer...",
                "a Google Cloud practitioner...",
              ]}
              speed={100}
            />
          </h2>
          <p className="text-base text-texlight mt-6 textleft">
            I'm a Full Stack Developer, specialized in MERN Stack. I have been
            working with React, Node, Express, MongoDB, and Firebase for the
            past 2 years. I have also worked with Google Cloud Platform. I have
            developed various web applications and websites for clients around
            the world.
          </p>

          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          <a
            style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)" }}
            href="#"
            className="mt-12 border border-[rgba(255, 255, 255, 0.3)] rounded-xl  px-8 py-3 active:95 group hover:border-primary"
          >
            <p
              className="text-texlight   group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r
  group-hover:from-primary group-hover:to-secondary"
            >
              Hire Me!
            </p>
          </a>
        </div>
        <div className="w-full h-full flex items-center justify-center lg:item-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            src={Hero}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
