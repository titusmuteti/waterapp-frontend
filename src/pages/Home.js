import React from 'react'
import Footer from '../components/Footer';
import Userbar from '../components/Navbar'
import Slides from '../components/Slides';

function Home() {
  return (
    <>
    <Userbar/>

    <Slides/>
    <>

    <>
    <div>
      <h1 className='text-center mt-2'>Our Services</h1>
      <section className="py-4 container" style={{ background: '#fff' }}>
        <p>We are mandated with providing cost effective and affordable quality water and sanitation services to the residents of Kisumu County.</p>
        <div className="row justify-content-center">
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div className="card p-0overflow-hidden-100 shadow">
          <div className="card-body" style={{ background: '#4BB49B4D' }}>
            <h5 className="card-title">Water Supply</h5>
            {/* <p className="card-text">description</p> */}
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbK2q1AKLbMos--rhVxHcykp7IyKSnDi6aBA&usqp=CAU'
            alt='water supply' width='200'/>
            {/* <p className="text-center" style={{ mouse: 'pointer', fontweight: 'bold' }}>
              Learn More
            </p> */}
          </div>
          </div>
          </div>
        </div>
      </section>
    </div>
    </>
    </>
    <Footer />
    </>
    
  )
}

export default Home