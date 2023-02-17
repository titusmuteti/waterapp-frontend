import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './client-dashboard.css';
import Sidebar from './Sidebar';
import { useUser } from './auth';
import { toast } from 'react-toastify';
import userEvent from '@testing-library/user-event';

function ClientDashboard() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [setTrainersList] = useState([]);
  const [dashboardTrainers, setDashboardTrainers] = useState([]);

  // useLayoutEffect(() => {
  //   if (user) return;
  //   toast.error('You must be logged in to visit dashboard');
  //   navigate(-1);
  // }, [user, navigate]);

  // useEffect(() => {
  //   fetch('/clients')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTrainersList(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('/employees')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDashboardTrainers(data);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="grid-row-one">
          <Sidebar />
          <div className="grid-one">
            <div>
              <div className="sect">
                <h1>Hello {user?.firstname}!</h1>
              </div>
              <div className="sect">
                <h2> Meter reading</h2>
                <div>
                <p>Previous reading:</p>
                <p>Current reading:</p>
                <p>Units Consumed:</p>
                </div>
              </div>
            </div>
            <div className="sect">
              <h2> Account</h2>
              <p>Arrears:</p>
              <p>Rater per unit:</p>
              <p>Current Bill:</p>
              <p className='font-weight-bold'>Total amount:</p>
            </div>
          </div>
          <div className="grid-two">
            <div className="sect2">
              <div className="">
                <h1> Profile </h1>
              </div>
              <div className="profile-details">
                <h1>
                  {user?.firstname.slice(0, 1).toUpperCase()} {user?.lastname.slice(0, 1).toUpperCase()}
                </h1>
                <h5>
                  {user?.firstname} {user?.lastname}
                </h5>
              </div>
              <div className="profile-details">
                <h3>Customer Details</h3>
                <div className="details">
                  <div>
                    <h5>Name</h5>
                    <p>John Makau</p>
                  </div>
                  <div>
                    <h5>Location</h5>
                    <p>Tala</p>
                  </div>
                  <div>
                    <h5>Contact</h5>
                    <p>0712345678</p>
                  </div>
                </div>
              </div>
              <div className="profile-details">
                <h3>Report a complain</h3>
                <div className="detail">
                  {/* <h5> Lose weight</h5>
                  <p>Target weight : 48 kg</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row-two">
          <div className="sect">
            <h2> Payment</h2>
            <p>M-pesa</p>
            <p>KCB</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClientDashboard;
