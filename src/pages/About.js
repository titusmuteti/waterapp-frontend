import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function Section({ heading, body }) {
  return (
    <div className="about-us-section mt-5 p-2">
      <span className='h1 font-weight-bold'>{heading}</span>
      <p className='h5'>{body}</p>
    </div>
  );
}

function About() {
  return (
    <>
    <Navbar/>
    <div className="about-us text-center mt-5 mb-5">
      <Section
        heading="Our Mission:"
        body="To ensure provision of potable, reliable, affordable and sustainable water 
        and Sewerage service to our customers."
      />
      <Section
        heading="Vision:"
        body="To be the best Water Service Provider within Tanathi jurisdiction."
      />
      <Section
        heading="Core Values:"
        body="To adopt a new and better corporate culture in line with its Vision and Mission statements."
      />
      <Section
      heading="values:"
      body="Team work, Accountability, Effectiveness and Efficiency, 
      Integrity, Creativity and Innovation, Continuous Learning"
      />
   </div>
   <Footer/>
    </>
  )
}

export default About