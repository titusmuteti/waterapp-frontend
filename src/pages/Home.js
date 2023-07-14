import React from 'react'
import Footer from '../components/Footer';
import Userbar from '../components/Navbar'
import Services from '../components/Services';
import Slides from '../components/Slides';
import WelcomeCard from '../components/WelcomeCard';
import StaffNavbar from '../components/StaffNavbar';

function Home() {
  return (
    <>
    {/* <Contact/> */}
    <StaffNavbar/>
    <Userbar/>
    <Slides/>
    <Services/>
    <WelcomeCard/>
    <Footer />
    </>
    
  )
}

export default Home