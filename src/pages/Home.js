import React from 'react'
import Footer from '../components/Footer';
import Userbar from '../components/Navbar'
import Services from '../components/Services';
import Slides from '../components/Slides';

function Home() {
  return (
    <>
    <Userbar/>
    <Slides/>
    <Services/>
    <Footer />
    </>
    
  )
}

export default Home