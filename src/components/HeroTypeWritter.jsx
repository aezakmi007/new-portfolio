import React, { useEffect, useState } from "react";

const HeroTypeWritter = ({words, speed}) => {
  const [currentWordIndex, setcurrentWordIndex] = useState(0)
  const [currentText, setcurrentText] = useState("")
  let currentWord = words[currentWordIndex]

  useEffect(() => {
    let charIndex = 0
    const typinginterval = setInterval(() => {
        if(charIndex <= currentWord.length){
          setcurrentText(currentWord.slice(0, charIndex))
          charIndex++
        }else{
          clearInterval(typinginterval)
          setTimeout(() => {
            setcurrentWordIndex((prevIndex) => prevIndex === words.length - 1 ? 0 : prevIndex + 1)
          }, 1000)
           
        }
    }, speed)

    return () => {
      clearInterval(typinginterval)
    }
  },[currentWord, speed, words])

  return <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-t
  from-primary to-secondary 
  ">
      {currentText}
  </span>;
};

export default HeroTypeWritter;
