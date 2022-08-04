import { useState, useEffect, useCallback } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const runPercentage = inView => {
    if (inView) {
      percentage();
    }
  };

  const percentage = useCallback(() => {
    if (start < end) {
      setStart(prevState => prevState + 1);
    }
  }, [start]);

  useEffect(() => {
    const interval = setInterval(percentage, 100);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade triggerOnce onVisibilityChange={runPercentage}>
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide direction="right" triggerOnce>
          <div className="discount_description">
            <h3>Purchase Tickets Before 10th March</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              nam obcaecati laborum sit! Quaerat quam minus dolore reprehenderit
              laboriosam aperiam iusto asperiores maiores consequuntur porro
              assumenda tenetur, corporis possimus molestias saepe nemo
              molestiae placeat illum quidem atque labore eum sit architecto
              earum. Sequi doloribus consequuntur sit beatae hic, eveniet odio.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};
export default Discount;
