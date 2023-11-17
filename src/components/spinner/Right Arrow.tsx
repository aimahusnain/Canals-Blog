import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../../Right Arrow in Black.json";

const RightArrow = ({ className, width, height }: { className: string, width: string, height: string }) => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const container = lottieContainerRef.current;

    if (container) {
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  return <div ref={lottieContainerRef} className={className} style={{ width: width, height: height }}/>;
};

export default RightArrow;
