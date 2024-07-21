"use client";
import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

const Herosection = () => {
  return (
    <div className="w-full">
      <Carousel
        autoplay
        loop
        autoplayDelay={8000}
        className="w-full overflow-hidden max-h-[200px] md:max-h-[450px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <Image
          height={1000}
          width={1000}
          src="/clg.jpg"
          alt="image 1"
          className="w-full object-center object-cover max-h-[450px]"
        />
        {/* <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="w-full object-center object-cover max-h-[450px]"
        /> */}
      </Carousel>
      <p></p>
    </div>
  );
};

export default Herosection;
