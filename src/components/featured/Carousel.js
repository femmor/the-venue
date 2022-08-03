import Slider from 'react-slick';
import slideOne from '../../resources/images/slide_one.jpeg';
import slideTwo from '../../resources/images/slide_two.jpeg';
import slideThree from '../../resources/images/slide_three.jpeg';

const Carousel = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slideOne})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slideTwo})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slideThree})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
