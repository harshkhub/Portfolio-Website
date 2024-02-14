import React, { useRef } from 'react';
import './index.scss';

const ScrollComponent = () => {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    scrollRef.current.scrollTo(0, 0);
  };

  return (
    <div className="scroll-container" ref={scrollRef}>
      {/* Your content here */}
      <button onClick={scrollToTop} className="scroll-btn">Scroll Down</button>
    </div>
  );
};

export default ScrollComponent;