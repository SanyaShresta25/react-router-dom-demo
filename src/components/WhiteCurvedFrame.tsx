import React from 'react';

const WhiteCurvedFrame: React.FC = () => {
  return (
    <>
      {/* Top Curve */}
      <svg
        className="absolute top-0 left-0 w-full h-32 z-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,160 C360,0 1080,320 1440,160 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Bottom Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 z-20 rotate-180"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,160 C360,0 1080,320 1440,160 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Left Curve */}
      <svg
        className="absolute top-0 left-0 h-full w-32 z-20"
        viewBox="0 0 320 1440"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M160,0 C0,360 320,1080 160,1440 L0,1440 L0,0 Z"
        />
      </svg>

      {/* Right Curve */}
      <svg
        className="absolute top-0 right-0 h-full w-32 z-20 rotate-180"
        viewBox="0 0 320 1440"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M160,0 C0,360 320,1080 160,1440 L0,1440 L0,0 Z"
        />
      </svg>
    </>
  );
};

export default WhiteCurvedFrame;
