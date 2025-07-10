'use client';

import Lottie from "lottie-react";

interface AnimationLottieProps {
  animationPath: any;
  width?: string | number;
  height?: string | number;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ 
  animationPath, 
  width = "100%", 
  height = "auto" 
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
