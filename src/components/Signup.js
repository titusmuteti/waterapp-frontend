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
import { useNavigate } from 'react-router-dom';

function Signup({onLogin, onSelectForm}) {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e){
    setIsLoading(true);
    e.preventDefault();
    const newClient = {
      firstname,
      email,
      phone_number,
      password,
      password_confirmation: confirm_password
    };
    fetch ('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient)
    })
    .then((response)=> {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user)=> onLogin(user))
        navigate('/clientdashboard')
      }else {
        response.json().then((error) => setErrors(error.errors))
      }
    });
  }
  return (
    <>
    <MDBContainer fluid className='bg'>

      <MDBCard className='text-black m-1 bg-transparent align-items-center pt-5' style={{borderRadius: '25px'}}>
        <MDBCardBody className='bg-secondary w-25 mt-2 pt-3'>

          <MDBCardTitle className="h2 mb-5 text-center font-weight-bold">Sign up</MDBCardTitle>

          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg' className='pb-4 mb-3 pr-1'/>
              <MDBInput label='Your Firstname' id='name' type='text' className='w-100' onChange={(e) => setFirstName(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg' className='pb-4 mb-3 pr-1'/>
              <MDBInput label='Your Email' id='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="phone me-3" size='lg' className='pb-4 mb-3 pr-1'/>
              <MDBInput label='Phone Number' id='phonenumber' type='text'onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg' className='pb-4 mb-3 pr-1'/>
              <MDBInput label='Password' id='password' type='password'onChange={(e) => setPassword(e.target.value)}/>
            </div>


            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg' className='pb-4 mb-3 pr-1'/>
              <MDBInput label='Confirm password' id='confirmPassword' type='password' onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            </div>

            <MDBBtn className='mb-4' size='sm' type='submit'>{isLoading ? "Loading..." : "Sign Up"}</MDBBtn>

            <article>
              {errors.length > 0 ? (errors.map((err) => <ul><li key={err}>{err}</li></ul>)) : ""}
            </article>

            <div>
              <p className='text-center'>Already have an account?<MDBBtn color='link'className='text-black pl-0' onClick={()=>onSelectForm(true)}>LOGIN</MDBBtn></p>
            </div>
          
          </form>
        </MDBCardBody>
      </MDBCard>

      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
  
    </MDBContainer>
    </>
  );
}

export default Signup;