import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { about, Leaf1, Leaf2 } from "../assets";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
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
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Skills
          </p>
          <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              My Skills & Work Experience
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


        <div className="w-full flex flex-col gap-2 items-center justify-center px-8">
            <SkillCard skill={"HTML 5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>

            <SkillCard skill={"CSS 3"} percentage={"75%"} color={"#008FFF"} move={false} />
            
            <SkillCard skill={"Javascript"} percentage={"85%"} color={"#FFB900"} move={true} />

            <SkillCard skill={"Node Js"} percentage={"85%"} color={"#14DB00"} move={false} />

            <SkillCard skill={"React & NextJs"} percentage={"90%"} color={"#00FFF3"} move={true} />

           

            <SkillCard skill={"Mongo DB & Firebase"} percentage={"75%"} color={"#FFE400"} move={false} />
          </div>
      </div>
    </section>
  );
};

export default Skills;
