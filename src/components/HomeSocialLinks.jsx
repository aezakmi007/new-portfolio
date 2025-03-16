import React, { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";

const HomeSocialLinks = ({data, index}) => {

  const [isHovered, setisHovered] = useState(false)

  let Icon = data.Icon;
  return (
    <motion.a
    href={data.uri}
    initial={{opacity:0, y : 25}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:25}}
    transition={{delay:0.1 * index}}
    key={index} className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px] cursor-pointer"
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    >
      <AnimatePresence>
        {
          isHovered && (
            <motion.div className={`absolute inset-1 blur-md bg-gradient-to-br
            from-primary to-secondary -z-10`}></motion.div>
          )
        }
      
        <div className="w-full h-full rounded-full bg-bgPrimary flex items-center
        justify-center
        ">
          <Icon className={`text-texlight`} />
          
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
