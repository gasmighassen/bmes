import React, { forwardRef, HTMLAttributes, useEffect, useRef } from "react";
import "intersection-observer";
import "../../_dist/ServiceCard.css";
import "animate.css";

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {}

const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ children, ...props }, ref) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRef.current?.classList.add(
              "animate__animated",
              "animate__pulse"
            );
          } else {
            cardRef.current?.classList.remove(
              "animate__animated",
              "animate__pulse"
            );
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, [cardRef.current]); // Include cardRef.current as a dependency

    return (
      <div
        ref={ref || cardRef}
        className="bmes__service__card__container"
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default ServiceCard;
