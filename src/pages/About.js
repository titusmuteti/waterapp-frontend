import React from 'react'
import Navbar from '../components/Navbar'

function Section({ heading, body }) {
  return (
    <div className="about-us-section">
      <span>{heading}</span>
      <p>{body}</p>
    </div>
  );
}

function About() {
  return (
    <>
    <Navbar/>
    <div className="about-us">
      <Section
        heading="Our Mission:"
        body="To ensure provision of potable, reliable, affordable and sustainable water and Sewerage service to our customers."
      />
      <Section
        heading="Vision:"
        body="To be the best Water Service Provider within Tanathi jurisdiction."
      />
      <Section
        heading="Core Values:"
        body="To adopt a new and better corporate culture in line with its Vision and Mission statements."
      />
   </div>
    </>
  )
}

export default About