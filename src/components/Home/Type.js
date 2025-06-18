import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN STACK WEB DEVELOPER",
          "PYTHON PROGRAMMER",
          "WEB SCRAPER",
          "STUDENT OF CLASS EIGHT",
          "JAVASCRIPT ENTHUSIAST",
          "REACT DEVELOPER",
          "NODE.JS EXPLORER",
          "BUILDING COOL STUFF",
          "TAILWIND CSS FAN",
          "LEARNING MONGODB",
          "BUILDING A E-COMMERCE WEBSITE"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
