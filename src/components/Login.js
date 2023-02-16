import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userbar from './Navbar';
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

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(e){
    e.preventDefault()
    setIsLoading(false)
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    })
    .then((resp)=> {
      setIsLoading(false);
      if(resp.ok) {
        resp.json().then((user)=> onLogin(user))
      }else {
        resp.json().then((error)=> setErrors(error.errors))
      }
    })
  }

  // const navigate = useNavigate();

  // function handleClick(){
  //   navigate('/selfserviceportal')
  // }
  

  return (
    <>
    <Userbar/>
    <MDBContainer fluid className='bg'>

      <MDBCard className='text-black m-1 bg-transparent align-items-center pt-5' style={{borderRadius: '25px'}}>
        <MDBCardBody className='bg-secondary w-25 mt-2 pt-3'>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center ml-auto mr-auto'>

              <p classNAme="text-center fs-1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

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
	
              <MDBBtn onClick={handleLogin} className='mb-4' size='lg'>{isLoading ? "Loading..." : "Login"}</MDBBtn>

              <article>
                {errors}
              </article>

              <div>
                <MDBBtn color='link' className='text-decorate-underline'                            >Don't have an account? REGISTER</MDBBtn>
              </div>
              
            </MDBCol>
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </>
  );
}

export default Login;