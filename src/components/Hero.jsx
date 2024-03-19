import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <a href="#discover">
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </a>
      </div>
      <div className="hero__image-container">
        <div className="hero__image-container">
          <div className="hero__image xl:pt-32">
            <img src="/assets/hero.png" alt="hero" className="object-contain" />
          </div>

          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
