import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel variant="dark" className='mt-3'>
    <Carousel.Item className='h-100'>
      <img
        className="d-block w-100" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhFpAAwbftNfTklEjjPCMOyJizgTtTin0HaAO-pnrgRJ5utX6LGRrblivOHHzbBIAIc8&usqp=CAU"
        height='600'
        alt="First slide"
      />
      {/* <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.licdn.com/dms/image/C5612AQF_Q-gZCDdpaw/article-cover_image-shrink_600_2000/0/1552917949726?e=2147483647&v=beta&t=dcwMIA72Ozt71VI4kYrnUjql6Ew6F-7jD0ncLxDTvVs"
        height='600'
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCXvZtUfH_9z3kHaSaWUZV17JDFujC72gaEiP11FMId5wOcmflBeyMq7ZxdIwlL4bswQ&usqp=CAU"
        height='600'
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  )
}

export default Slides
