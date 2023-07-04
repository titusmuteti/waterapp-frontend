import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCardTitle, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';

function Signup({ onLogin, onSelectForm }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    if (!email || !password) {
      setErrors('Email and password are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrors('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    const newClient = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      password_confirmation: confirmPassword
    };

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClient)
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data.user);
        window.location.href = '/clientdashboard';
      } else {
        setErrors(data.errors);
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
              <MDBInput label='Your Firstname' id='name' type='text' className='w-100' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='user me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Your Lastname' id='name' type='text' className='w-100' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='envelope me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Your Email' id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='phone me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Phone Number' id='phonenumber' type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='lock me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon='key me-3' size='lg' className='pb-4 mb-3 pr-1' />
              <MDBInput label='Confirm password' id='confirmPassword' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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