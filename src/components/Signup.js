import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBCardTitle, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';

axios.defaults.headers.post['Content-Type'] = 'application/json'; // Set default Content-Type header for all requests

function Signup({ onLogin, onSelectForm }) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrors('Email and password are required.');
      return;
    }

    if (password.length < 6) {
      setErrors('Password should be at least 6 characters long.');
      return;
    }

    if (!first_name) {
      setErrors('First name required.');
      return;
    }

    if (!last_name) {
      setErrors('Last name required.');
      return;
    }

    if (password !== confirm_password) {
      setErrors('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    const newClient = {
      client: {
        first_name,
        last_name,
        email,
        phone_number,
        password,
        password_confirmation: confirm_password
      }
    };
    
    // ... Rest of the code ...
    

    try {
      const response = await axios.post('https://makawasco-backend.onrender.com/signup', newClient);

      if (response.status === 200) {
        onLogin(response.data.user);
        window.location.href = 'https://waterapp.vercel.app//clientdashboard';
      } else {
        setErrors(response.data.errors);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    setErrors('');
  };

  return (
    <MDBContainer fluid className='bg'>
      <MDBCard className='text-black m-1 bg-transparent align-items-center pt-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody className='bg-secondary w-25 mt-2 pt-3'>
          <MDBCardTitle className='h2 mb-5 text-center font-weight-bold'>Sign up</MDBCardTitle>

          <form onSubmit={handleSubmit} onReset={handleFormReset}>
            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='user me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Your Firstname' id='name' type='text' className='w-100' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='user me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Your Lastname' id='name' type='text' className='w-100' value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='envelope me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Your Email' id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='phone me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Phone Number' id='phonenumber' type='text' value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='lock me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='key me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Confirm password' id='confirmPassword' type='password' value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            </div>

            <MDBBtn className='mb-4' size='sm' type='submit'>
              {isLoading ? 'Loading...' : 'Sign Up'}
            </MDBBtn>

            <article>
              {errors && <p>{errors}</p>}
            </article>

            <div>
              <p className='text-center'>
                Already have an account?
                <MDBBtn color='link' className='text-black pl-0' onClick={() => onSelectForm(true)}>
                  LOGIN
                </MDBBtn>
              </p>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>

      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' rel='stylesheet' />
      <link href='https://use.fontawesome.com/releases/v5.15.1/css/all.css' rel='stylesheet' />
    </MDBContainer>
  );
}

export default Signup;
