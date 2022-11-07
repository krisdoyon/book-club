import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = (props) => {
  const [index, setIndex] = useState(0);
  const { members } = props;

  useEffect(() => {
    if (index < 0) {
      setIndex(members.length - 1);
    }
    if (index > members.length - 1) {
      setIndex(0);
    }
  }, [index, members]);

  return (
    <div className="slider">
      <button
        className="btn slider__btn slider__btn--prev"
        onClick={() => setIndex((prevIndex) => prevIndex - 1)}
      >
        <FaChevronLeft className="slider__btn-icon" />
      </button>
      <div className="slider__content-wrapper">
        {members.map((member, memberIndex) => {
          let slideClass = "slide--next";

          if (memberIndex === index) {
            slideClass = "slide--active";
          }

          if (
            memberIndex === index - 1 ||
            (index === 0 && memberIndex === members.length - 1)
          ) {
            slideClass = "slide--prev";
          }

          return (
            <Slide key={memberIndex} {...member} slideClass={slideClass} />
          );
        })}
      </div>
      <button
        className="btn slider__btn slider__btn--next"
        onClick={() => setIndex((prevIndex) => prevIndex + 1)}
      >
        <FaChevronRight className="slider__btn-icon" />
      </button>
    </div>
  );
};

export default Slider;
