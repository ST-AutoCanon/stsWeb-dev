import React from 'react'

const Contact = () => {
  return (
    <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-3">
          <strong>Contact</strong>
        </h1>
       
      </div>
    </div>
    <div className='buj' style={{marginTop:-60, marginLeft:-150}}>
    <div className="contact-container">
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    className="contact-left"
  >
    <div className="contact-left-title">
      <div className='kus' style={{marginBottom:430}}>
    <h4 className="section-title bg-white text-center text-primary px-3" style={{marginLeft:400 }}>
          CONTACT US
        </h4>
        <div className="szs">
    <h4 style={{marginLeft:205,marginTop:30}}>If You Have Any Query,Please Feel Free Contact Us</h4>
    </div>
    </div>
    
    </div>
    <input
      type="hidden"
      name="access_key"
      defaultValue="f5f36a39-a75f-42dc-a68b-b9b8636e757b"
    />
    <div className='mad' style={{marginLeft:200,marginTop:-420}}>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="contact-inputs"
      required=""
    />
    </div>
    <div className='mam' style={{marginLeft:200}}>
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="contact-inputs"
      required="" 
    />
    </div>
    <div className='man' style={{marginLeft:200}}>
    <textarea
      name="message"
      placeholder="Message"
      className="contact-inputs"
      required=""
      defaultValue={""} 
    />
    </div>
    <div className='mad' style={{marginLeft:250}}>
      <div className='bad'>
    <button type="submit">Send Message</button>
    </div>
    </div>
  </form>
  </div>
  <div className="contact-right"></div>
</div>

  
    
    {/* Google Map End */}
    
  </>
  
  )
}

export default Contact
