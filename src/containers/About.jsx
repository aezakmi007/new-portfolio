import React from "react";
import { motion } from "framer-motion";
import { about, Leaf1, Leaf2 } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} alt="" className="w-6 h-auto object-contain" />
          <p
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            About
          </p>
          <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 md:w-50 sm:w-auto p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              alt="about"
              className="w-full h-auto rounded-md object-contain"
            />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>

          
        </div>
        <div className="w-full ps-8 flex flex-col gap-4 items-start justify-start">
            <p className="text-texlight text-base tracking-wide text-justify">
              loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero in dui sodales, sit amet tincidunt odio
              condimentum. Integer nec mi ut nisi lacinia tempus. Ut
              sollicitudin, nisl nec vestibulum lacinia, est libero condimentum
              odio, a ultricies nisi sapien sit amet tortor. Curabitur eget
              metus nec nunc ultricies lacinia. Nullam consectetur, ligula nec
              ultricies tincidunt, metus elit
            </p>
            <p className="text-texlight text-base tracking-wide text-justify">
              loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero in dui sodales, sit amet tincidunt odio
              condimentum. Integer nec mi ut nisi lacinia tempus. Ut
              sollicitudin, nisl nec vestibulum lacinia, est libero condimentum
              odio, a ultricies nisi sapien sit amet tortor. Curabitur eget
              metus nec nunc ultricies lacinia. Nullam consectetur, ligula nec
              ultricies tincidunt, metus elit
            </p>
            <p className="text-texlight text-base tracking-wide text-justify">
              loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero in dui sodales, sit amet tincidunt odio
              condimentum. Integer nec mi ut nisi lacinia tempus. Ut
              sollicitudin, nisl nec vestibulum lacinia, est libero condimentum
              odio, a ultricies nisi sapien sit amet tortor. Curabitur eget
              metus nec nunc ultricies lacinia. Nullam consectetur, ligula nec
              ultricies tincidunt, metus elit
            </p>
          </div>
      </div>
    </section>
  );
};

export default About;
