import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MenuItem = ({menu, index}) => {

  const [isHovered, setisHovered] = useState(false)
  const Icon = menu.Icon;
  return (

    <a href={menu.uri} className="w-12 h-12 rounded-full flex justify-center items-center group cursor-pointer hover:bg-gradient-to-br hover:from-primary hover:to-secondary duration-200"
    
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    >
      <Icon className="text-texlight text-xl group-hover:text-bgPrimary relative" />
     

      <AnimatePresence>
        {
          isHovered && (
            <motion.div
            initial={{opacity:0, x:-25}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-25}}
            className="absolute bg-white rounded-md px-4 py-2 -left-[140px]
            after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:rotate-45
            after:bg-white
            "
            style={{boxShadow:"inset 0 0 10px rgba(0,0,0,0.4)"}}
            >
              <p className="text-bgPrimary">{menu?.name} </p>
            </motion.div>
          )
        }

      </AnimatePresence>
    </a>

    

  );
};

export default MenuItem;


