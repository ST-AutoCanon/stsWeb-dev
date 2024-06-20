import React from 'react'

const Footer = () => {
  return (
    
    <div
    className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div
      className="container py-5"
      style={{ marginBottom: 0, marginTop: "-75px" }}
    >
      <div className="row g-5" style={{ height: 140 }}>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Address 1</h5>
          <p className="mb-2 text-white" style={{marginTop:-20}}>
            <i className="fa fa-map-marker-alt me-3" />
            Sukalpa Tech,Solutions pvt ltd,D.D Nagar,Belgaum–590019
          </p>
          
         
        </div>
        <div className="col-lg-3 col-md-6 text-white"  style={{ marginLeft: 210 }}>
          <div className='sts'>
          <h5 className="text-light mb-4">Contact Us</h5>
          <p className="mb-2"  style={{marginTop:-20}}>
            <i className="fa fa-phone-alt me-3" />
            +91 7892859968
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@sukalpatech.com
          </p>
        
          
        <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1 text-white"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1 text-white"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1 text-white"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-0 text-white"
              href="https://sukalpatechacademy.in/" target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        </div>
       
        <div className="col-lg-3 col-md-6" style={{ marginLeft: 80 }}>
          <div className='sts'>
          <h5 className="text-light mb-4">Address 2</h5>
          <p className="mb-2 text-white"  style={{marginTop:-20}}>
            <i className="fa fa-map-marker-alt me-3" />
            SukalpaTech,Solutions pvt ltd D-Group,Bengaluru-
            560091
          </p>
         
         
        </div>
        </div>
      </div>
      
    </div>
    <div className='bow'>
    <div className="container-fluid copyright">
      <div className="container">
        <div className="row">
         
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white">
            ©{" "}
            
              {" "}
              SukalpaTech solutions Pvt Ltd
            
            , All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end text-white">
            Designed By  SukalpaTech solutions Pvt Ltd
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
 
  
  )
}

export default Footer
