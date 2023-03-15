import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function WelcomeCard() {
  return (
    <MDBCard style={{ maxWidth: '800px'}} className="mb-4 ml-auto mr-auto">
      <MDBRow className='g-0 justify-content-center'>
        <MDBCol md='4'>
          <MDBCardTitle className='text-center mb-3 text-success'>
            Welcome to MAKAWASCO
          </MDBCardTitle>
          <MDBCardImage src='/images/logo.png' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody className='mt-5'>
            <MDBCardTitle>MATUNGULU KANGUNDO WATER AND SEWERAGE COMPANY</MDBCardTitle>
            <MDBCardText>
              Matungulu Kangundo Water and Sewerage Company is a certified company founded in 2008 and register under CAP 487of the laws of Kenya. It begun it operations in 2008 to provide adequate clean potable water and to collect, treat, and dispose sewerage within the jurisdictions of Kangundo and Matungulu constituencies.
            </MDBCardText>
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
export default WelcomeCard