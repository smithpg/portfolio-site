import React from 'react';

export default function BackgroundSVG() {
  const style = {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'visible',
  };

  return (
    <svg style={style} viewBox="0 0 1440 320">
      <path
        fill="#00cba9"
        fillOpacity="1"
        d="M0,96L40,128C80,160,160,224,240,229.3C320,235,400,181,480,144C560,107,640,85,720,117.3C800,149,880,235,960,261.3C1040,288,1120,256,1200,213.3C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        transform="scale(2)"
      ></path>
    </svg>
  );
}
