import React from "react";
const Hero = () => {
  return (
    <>
      <main className="flex flex-row p-10 justify-center items-center mt-[100px] ">
        <div
          className="bg-[#439A97] w-[300px] h-[350px] p-5 text-xl overflow-hidden ml-[-200px] z-6 relative
        "
          style={{ zIndex: 10 }}
        >
          <span className="text-6xl ml-[-10px]">"</span>
          <p className="text-justify">
            Crafting digital experiences with code and creativity, I thrive on
            turning ideas into immersive web realities. Welcome to my portfolio,
            where every line of code weaves stories that leave a lasting impact.
          </p>
          <span className="text-6xl ml-[250px]">"</span>
        </div>
        <div
          className="absolute z-0 ml-[300px] mt-[100px]"
          style={{ zIndex: 0 }}
        >
          <img
            className="w=[300px] h-[350px] mt-[100px]"
            src="./images/asdf.png"
            alt="Image"
          />
        </div>
      </main>
    </>
  );
};

export default Hero;
