import React, { useEffect, useState } from "react";
// import data from "../data";
const data = [
  {
    title: "Tody's Workout Plans",
    content: "Slide Text Here",
  },
  {
    title: "First 10 Push ups",
    content: "Slide Text Here",
  },
  {
    title: "Next 20 Squads",
    content: "Slide Text Here",
  },
  {
    title: "Great Job !",
    content: "Slide Text Here",
  },
];

const Slides = () => {
  const [slideData] = useState(data);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slideData.length - 1;
    console.log(slideData);
    // slideData.map((item, index) => console.log(item, index));
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
      console.log(slideData);
      console.log(slideIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
      console.log(slideData);
      console.log(slideIndex);
    }
  }, [slideIndex, slideData]);

  const next = () => {
    if (slideIndex === slideData.length - 1) {
      console.log(slideData);
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  const prev = () => {
    if (slideIndex === 0) {
      setSlideIndex(slideData.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  const restart = () => {
    setSlideIndex(0);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setSlideIndex(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => setSlideIndex(slideIndex - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => setSlideIndex(slideIndex + 1)}
        >
          Next
        </button>
      </div>
      <section>
        {slideData.map((item, index) => {
          const { title, content } = item;
          let position = "nextSide";
          if (index === slideIndex) {
            position = "activeSlide";
          }
          if (
            index === slideIndex - 1 ||
            (slideIndex === 0 && index === slideData.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              id={`slide_${index}`}
              className={`${position} slide card text-center`}
              key={index}
            >
              <h1 data-testid="title">{title}</h1>
              <p data-testid="text">{content}</p>
              <p className="class1">Hello First Class</p>
              <p className="class2">Hello Second Class</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Slides;
