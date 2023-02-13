import React from 'react'
import Footer from '../components/Footer';
import Userbar from '../components/Navbar'
import Services from '../components/Services';
import Slides from '../components/Slides';
import WelcomeCard from '../components/WelcomeCard';

function Home() {
  return (
    <>
    {/* <Contact/> */}
    <Userbar/>
    <Slides/>
    <Services/>
    <WelcomeCard/>
    <Footer />
    </>
    
  )
}

export default Home