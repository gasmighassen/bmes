import React, { useState, useEffect } from "react";
import Dot from "./Dot";
import Slide from "./Slides";

interface CarousselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
}

const CarousselBmes: React.FC<CarousselProps> = ({
  children,
  autoplay = false,
  interval = 10000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChooseSlide = (index: number) => {
    if (index < 0) {
      setCurrentSlide(childrenCount - 1);
    } else if (index >= childrenCount) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  const childrenCount = React.Children.count(children);

  useEffect(() => {
    let timeoutId: number;
    if (autoplay) {
      timeoutId = window.setTimeout(() => {
        setCurrentSlide(
          currentSlide === childrenCount - 1 ? 0 : currentSlide + 1
        );
      }, interval);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [autoplay, currentSlide, childrenCount, interval]);
  const renderDotsStartIndex = Math.max(0, currentSlide - 1);
  const renderDotsEndIndex = Math.min(
    childrenCount - 1,
    renderDotsStartIndex + 2
  );
  return (
    <div className="carousel-container">
      <div className="slides-container">
        {React.Children.map(children, (child, index) => (
          <Slide
            key={index}
            isActive={index === currentSlide}
            onClick={() => handleChooseSlide(index)}
          >
            {child}
          </Slide>
        ))}
      </div>
     {/*  <div className="dots-container">
        {Array.from({
          length: renderDotsEndIndex - renderDotsStartIndex + 1,
        }).map((_, index) => (
          <Dot
            key={renderDotsStartIndex + index}
            isActive={renderDotsStartIndex + index === currentSlide}
            onClick={() => handleChooseSlide(renderDotsStartIndex + index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CarousselBmes;