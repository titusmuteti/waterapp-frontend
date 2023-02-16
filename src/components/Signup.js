import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { 
  MDBBtn, 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardBody, 
  MDBInput, 
  MDBIcon, 
  MDBCheckbox 
} 
from 'mdb-react-ui-kit';

function Signup({onLogin, setClients}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
  function handleClick(){
    navigate('/login')
  }

  function handleSignUp(){
    setIsLoading(true);
    const newClient = {
      name,
      email,
      password,
      password_confirmation: confirmPassword
    };
    fetch ('/me', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient)
    })
    .then((resp)=> {
      if (resp.ok) {
        resp.json().then((user)=> setClients(user))
      }else {
        resp.json().then((error) => setErrors(error.errors))
      }
    });
  }
  return (
    <>
    <MDBContainer fluid className='bg'>

      <MDBCard className='text-black m-1 bg-transparent align-items-center pt-5' style={{borderRadius: '25px'}}>
        <MDBCardBody className='bg-secondary w-25 mt-2 pt-3'>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center ml-auto mr-auto'>

              <p classNAme="text-center fs-1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg' className='pb-4 mb-3'/>
                <MDBInput label='Your Name' id='name' type='text' className='w-100' onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' className='pb-4 mb-3'/>
                <MDBInput label='Your Email' id='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' className='pb-4 mb-3'/>
                <MDBInput label='Password' id='password' type='password'onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg' className='pb-4 mb-3'/>
                <MDBInput label='Confirm password' id='confirmPassword' type='password' onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
              </div>
	
              <MDBBtn className='mb-4' size='lg' onClick={handleSignUp}>{isLoading ? "Loading..." : "Sign Up"}</MDBBtn>

              <article>
                {errors.length > 0 ? (errors.map((err) => <ul><li key={err}>{err}</li></ul>)) : ""}
              </article>

              <div>
                <MDBBtn color='link' onClick={handleClick} className='text-black'>Already have an account? LOGIN</MDBBtn>
              </div>
              
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      

    </MDBContainer>
    </>
  );
}

export default Signup;