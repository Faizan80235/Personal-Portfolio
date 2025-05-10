import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FULL STACK WEB DEVELOPER",
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
