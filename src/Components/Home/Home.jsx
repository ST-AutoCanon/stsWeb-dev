import React from 'react'

import scooty from '../../assets/scooty.png'
import Busweb from '../../assets/Busweb.png'
import serviceshe from '../../assets/serviceshe.png'
import video from '../../assets/suku.mp4'


const Home = () => {
  return (
    
     
        
        <>
  <div className="con">
    <div className="left">
    
      <video src={video} autoPlay loop muted
       
        style={{ width: 648, height: 535, marginBottom: 122 }}
      >
       
      </video>
     
    </div>
    <div className="Right">
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ width: 648, height:535 }}
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel" style={{marginTop: 90}}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={serviceshe} alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: 450 }}>
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn" />
                  <h3 className="display-1 text-white mb-0 animated zoomIn" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="asset/img/Design & Engineering Services.png"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: 450 }}>
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn" />
                  <h1 className="display-1 text-white mb-0 animated zoomIn" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="asset/img/Homologation.png" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: 450 }}>
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn" />
                  <h1 className="display-1 text-white mb-0 animated zoomIn" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="asset/img/cons.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: 450 }}>
                  <h4 className="text-white text-uppercase mb-4 animated zoomIn" />
                  <h1 className="display-1 text-white mb-0 animated zoomIn" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel Start */}
  {/* Carousel End */}
  {/* Facts Start */}
  {/* Facts End */}
  {/* About Start */}
  <div className="container-xxl py-5" style={{marginTop:-210}}>
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="img-border">
            <img className="img-fluid" src="asset/img/sukacover.jpg" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={{marginTop:70}}>
          <div className="h-100">
            <h4 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h4>
            <p>
              
                “Sukalpa Tech” started in 2018-19 with the philosophy of
                Support, Succeed &amp; Grow Stronger Together.
                <br />
                Delighting the customers by uncompromisingly dynamic,
                technological developments &amp; modernization that becomes
                vital to stay ahead of their competition at reasonable cost.
                <br />
                To be a top most engineering services company in India by
                2025-26 to offer services with most trusted, reliable &amp;
                innovative solutions,so SukalpaTech abide to its meaning by
                utilizing advance technologies &amp; well connected industry
                expert consultants
              
            </p>
            <div className="d-flex align-items-center mb-4 pb-2">
              <div className="ps-4"></div>
            </div>
            <a className="btn btn-primary rounded-pill py-3 px-5" href="/About">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h4 className="section-title bg-white text-center text-primary px-3">
          Services
        </h4>
        <h4 style={{marginTop:10}}>
          We Focuse On Making The Best In All Sectors
        </h4>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <div className='wrapper' style={{marginTop:-10}}>
            <div className='ima'>
            
            <img className="img-fluid rounded mb-4" src="asset/img/engser.jpg" style={{height:210}} />
            <h4 className="mb-0">Engineering Services</h4>
            <div className='content'>
              <h1>Services</h1>
             <ul >
              <li>Prototyping</li>
              <li >CAE Analysis</li>
              <li>Product Design</li>
              <li>2D&3D Drafting</li>
              
             

             </ul>
            </div>
           
             
          </div>
          </div>
          </a>
          
          
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
             <div className='wrapper' style={{marginTop:-10}}>
            <div className='ima'>
            <img className="img-fluid rounded mb-4" src="asset/img/itnetd.jpg" style={{height:210}}/>
            <h4 className="mb-0">IT &amp; Networking Services</h4>
            <div className='content'>
              <h1>Services</h1>
             <ul>
             <li>Testing & QA</li>
             <li>Cloud Solutions</li>
              <li>IT Consulting</li>
              <li>Website design</li>
              
             

             </ul>
             </div>
             </div>
             </div>
          </a>
        </div>
        
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <div className='wrapper' style={{marginTop:-10}}>
            <div className='ima'>
            <img className="img-fluid rounded mb-4" src="asset/img/conso.jpg" style={{height:210}}/>
            <h4 className="mb-0">Other Services</h4>
            <div className='content'>
              <h1>Services</h1>
             <ul>
             <li>Staffing solutions</li>
              <li>Recruitment service</li>
              <li>Component Testing</li>
              <li>Plant Accreditation</li>
              
             

             </ul>
             </div>
             </div>
             </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
             <div className='wrapper' style={{marginTop:-10}}>
            <div className='ima'>
            <img className="img-fluid rounded mb-4" src="asset/img/consq.jpg" />
            <h4 className="mb-0">
              Consulting Services
            </h4>
           < div className='content'>
              <h1>Services</h1>
             <ul>
             <li>IT Consulting</li>
              <li>Homologation</li>
            
             
             

             </ul>
             </div>
             </div>
             </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
             <div className='wrapper' style={{marginTop:-10}}>
            <div className='ima'>
            <img className="img-fluid rounded mb-4" src="asset/img/homoa.jpg" style={{height:210}}/>
            <h4 className="mb-0">Homologation Support</h4>
            < div className='content'>
              <h1>Services</h1>
             <ul>
             <li>CMVR Update</li>
             <li>WMI Registration</li>
              <li>Plant accreditation</li>
              <li>Udyam Registration</li>
              
              
             

             </ul>
             </div>
             </div>
             </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
             <div className='wrapper' style={{marginTop:-10}}>
            <div className='ima'>
            <img className="img-fluid rounded mb-4" src="asset/img/nond.jpg" />
            <h4 className="mb-0">Non-IT Services</h4>
            < div className='content'>
              <h1>Services</h1>
             <ul>
             <li>Automotive</li>
             <li>E_Mobility</li>
             <li>Machinery</li>
             <li>Construction<br/>Equipment</li>
              
             

             </ul>
             </div>
             </div>
             </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Feature Start */}
  {/* Feature End */}
  {/* Project Start */}
  {/* Project End */}
  {/* Team Start */}
  {/* Team End */}
  {/* Testimonial Start */}
 
  <div className="container-xxl py-5" style={{backgroundColor:'skyblue'}}>
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <b>
        
        </b>
      </div>
      <div
 className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="testimonial-item bg-light rounded p-4" style={{backgroundColor:'skyblue'}}>
          <div className='byv'>
        <h4 className="section-title bg-white text-center text-primary px-3" style={{marginLeft:170}}>
          Engineering & Software Services by SukalpaTech
        </h4></div>

        <p>The name of our organization was invented with a purpose to keep our vision focused "Let us join to support your deserve". Sukalpa is Sanskrit word & it stands for Highly skilled and Knowledge. So SukalpaTech abide to its meaning by utilizing advance technologies & well qualified experienced staff.Experienced Team</p>
        <div className='mbp'>
        <h4 className="section-title bg-white text-center text-primary px-3" style={{marginLeft:420}}>
          Leader
        </h4>
        </div>
        <p>SukalpaTech supports its customers R&D and digital strategies.We contribute to develop innovative products & services, & enabling business to optimize their organization,tools & process.In short time,we have establishing a strong partnership with some prestigious institutions across the country & we will continue to hire top notch talent from these institutions.</p>

          <div className="d-flex align-items-center mb-4">
            
            <div className="ms-4">
              <div className='bsy'>
            <h4 className="section-title bg-white text-center text-primary px-3" style={{marginLeft:400}}>
          VISION
        </h4>
        </div>
              <span />
            </div>
          </div>
          
            <p className="mb-0">
              To be a top most engineering services company in India by 2025-26
              to offer services with most trusted, reliable &amp; innovative
              solutions.
            </p>
          
        </div>
        <div className="testimonial-item bg-light rounded p-4">
          <div className="d-flex align-items-center mb-4">
            <div className="ms-4">
              <div className='brp'>
            <h4 className="section-title bg-white text-center text-primary px-3" style={{marginLeft:390}}>
          MASSION
        </h4>
        </div>
              <span />
            </div>
          </div>
          
            <p className="mb-0">
              Delighting the customers by uncompromisingly dynamic,
              technological developments &amp; modernization that becomes vital
              to stay ahead of their competition at reasonable cost.
            </p>
            
          
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  
  <div className="slideimg-track" style={{ marginBottom: "-30px", height: 0 }}>
    
    <div className="slideimg">
      <img className="e" src="asset/img/e truc.png" />
    </div>
    <div className="slideimg">
      <img className="e" src="asset/img/Truckweb.png" />
    </div>
    <div className="slideimg">
      <img className="c" src="asset/img/e bus.png" />
    </div>
    <div className="slideimg">
      <img className="c" src="asset/img/Carweb.png" />
    </div>
    <div className="slideimg">
      <img className="c" src="asset/img/Tractorweb.png" />
    </div>
    <div className="slideimg">
      <img className="c" src="asset/img/Busweb.png" />
    </div>
    <div className="slideimg">
      <img className="c" src="asset/img/Carweb.png" />
    </div>
    <div className="slideimg">
      <img className="c" src="asset/img/Tractorweb.png" />
    </div>
    <div className="slideimg">
      <img className="c" src={Busweb} />
    </div>
    <div className="slideimg">
      <img className="e" src="asset/img/Truckweb.png" />
    </div>
    <div className="slideimg">
      <img className="c" src="asset/img/e bus.png" />
    </div>
    <div className="slideimg">
      <img className="d" src="asset/img/ggggscooty.png" />
    </div>
    <div className="slideimg">
      <img className="a" src="asset/img/bikepppp.png" />
    </div>
    <div className="slideimg">
      <img className="e" src="asset/img/e truc.png" />
    </div>
  </div>
 
</>

           
        
     

     

    
  )
}

export default Home
