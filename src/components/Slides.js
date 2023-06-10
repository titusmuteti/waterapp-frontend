import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel variant="dark" className="mt-3">
      <Carousel.Item className="h-100">
        <img
          className="d-block w-100 slide-image"
          src="/images/boydrinkingwater.jpg"
          height="600"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-image"
          src="/images/tap.jpeg"
          height="600"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-image"
          src="/images/waterdriller.jpeg"
          height="600"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
