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

    {/* Contact End */}
    {/* Google Map Start */}
    <div className="faf" data-wow-delay="0.1s">
      <h4>Belagum office Map</h4>
     <div className='kan'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61403.10600415185!2d74.46553124328955!3d15.87266561390687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf617168e2d817%3A0x3e2d959d75a0102a!2sBasav%20colony%20Bauxite%20Road%20Belgaum!5e0!3m2!1sen!2sin!4v1712914940120!5m2!1sen!2sin"
        width={675}
        height={300}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
      </div>
    
    <div className="maxi" data-wow-delay="0.1s">
      <div className='dk'>
      <h4>Bengaluru office Map</h4>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.216932161824!2d77.4736950611963!3d12.970116640068108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c234e4d34f5%3A0x36d5001044df139c!2sAnnapurneshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712836899287!5m2!1sen!2sin"
        width={675}
        height={300}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    {/* Google Map End */}
    
  </>
  
  )
}

export default Contact
