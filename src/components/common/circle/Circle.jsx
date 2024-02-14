import { useState, useEffect, useRef } from 'react';

const Circle = ({ title, value, symbol }) => {
  const [percentage, setPercentage] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const levelUp = (end) => {
            for (let i = 0; i <= end; i++) {
              value < 5 ? setTimeout(() => setPercentage(i), i * 200) :
              value < 30 ? setTimeout(() => setPercentage(i), i * 50) :
              setTimeout(() => setPercentage(i), i * 10)
            }
          };
          levelUp(value);
        }
      });
    });

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [value]);

  return (
    <div className='circle-info' ref={circleRef}>
      {symbol === '+' ? (
        <div className='circle'>
          {symbol}
          {percentage}
        </div>
      ) : (
        <div className='circle'>
          {percentage}
          {symbol}
        </div>
      )}
      <h4 className='title'>{title}</h4>
    </div>
  );
};

export default Circle;
