import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
const Review = (props) => {
  const [idx, setIdx] = useState(0);
  const { people } = props;
  const { name, job, image, text } = people[idx];
  //====================================

  function prev() {
    if (idx < 1) {
      setIdx(people.length - 1);
    } else {
      setIdx(idx - 1);
      console.log(idx);
    }
  }
  function next() {
    if (idx > people.length - 2) {
      setIdx(0);
      console.log(idx);
    } else {
      setIdx(idx + 1);
      console.log(idx);
    }
  }
  function random() {
    setIdx(Math.floor(Math.random() * people.length));
  }

  //===================================
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt="" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prev} className="prev-btn">
          <BsChevronLeft />
        </button>
        <button onClick={next} className="next-btn">
          <BsChevronRight />
        </button>
      </div>
      <button onClick={random} className="random-btn">
        {" "}
        suprise me{" "}
      </button>
    </article>
  );
};

export default Review;