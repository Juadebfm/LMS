import React from "react";
import Button from "./Button";
import HeroImg from "/hero_image.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-between h-max bg-[#F0F2F5] pl-48">
      <div className="">
        <div className="w-[60%]">
          <h1 className="text-[50px] font-semibold leading-none">
            Learn with expert anytime anywhere
          </h1>
          <p className="text-[19px] text-primary/60 my-7">
            Our mision is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </p>
          <Button btnText="Create Account" btnClass="w-[198px]" />
        </div>
      </div>
      <div className="w-[50%] h-full">
        <img src={HeroImg} alt="" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
