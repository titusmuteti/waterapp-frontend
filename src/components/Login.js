import React, { useState } from 'react';
import '../App.css';
import { 
  MDBBtn, 
  MDBContainer, 
  MDBCardTitle, 
  MDBCard, 
  MDBCardBody, 
  MDBInput, 
  MDBIcon, 
  MDBCheckbox 
} 
from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({onLogin, onSelectForm}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(false)
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    Accept: 'application/json' },
      body: JSON.stringify({email, password})
    })
    .then((response)=> {
      setIsLoading(false);
      if(response.ok) {
        response.json().then((user)=> onLogin(user))
        toast.success('Login successful');
        window.location.href = '/clientdashboard';
      }else {
        response.json().then((error)=> setErrors(error.errors))
        toast.warning('Wrong email or password');
      }
    })
  }
  

  return (
    <>
    <MDBContainer fluid className='bg'>

      <MDBCard className='text-black m-1 bg-transparent align-items-center pt-5' style={{borderRadius: '25px'}}>
        <MDBCardBody className='bg-secondary w-25 mt-2 pt-3'>

          <MDBCardTitle className='h2 mb-5 text-center font-weight-bold'>Login</MDBCardTitle>

          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg' className='pb-4 mb-3'/>
              <MDBInput label='Your Email' id='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg' className='pb-4 mb-3'/>
              <MDBInput label='Password' id='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            </div>

            <MDBBtn className='mb-4' size='sm' type='submit'>{isLoading ? "Loading..." : "Login"}</MDBBtn>

            <ToastContainer />

            <article>
              {errors}
            </article>

             <p className='text-center'> Don't have an account? <MDBBtn color='link' className='text-decorate-underline pl-0' onClick={()=>onSelectForm(false)}>SIGNUP</MDBBtn></p>
          </form> 
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </>
  );
}

export default Login;