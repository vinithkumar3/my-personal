import React from 'react';
import "./pricing.css";
import Image1 from"../../assets/htmlcssjs.png";
import Image2 from"../../assets/react.png";
import Image3 from"../../assets/java.png";
// import Payment from '../payment/Payment';
// import javacer from '../../assets/vinith -java certificate.pdf'


const Pricing = () => {
 
    // const handleViewCertificate = () => {
    //   const link = document.createElement('a');
    //   link.href = javacer;
    //   link.download = 'Vinithkumar.G_java.pdf';
    //   link.click();
    // };
  return (
  <section className="pricing container section">
    <h2 className="section___title">Training and Certification</h2>
     <div className="pricing___container grid">

      <div className="pricing___item">
        <img src={Image1} alt="" className="pricing___img" />
      <h3 className="pricing___plan">Front-End-Developer</h3>
      <p className="pricing___title">HTML ,CSS, JAVASCRIPT</p>
      <p className="pricing___pricingsupport">Besant Technologies, Tambaram</p>
      {/* <h3 className="price">
        <em>₹ </em> 500<span> Month</span>
      </h3> */}
      {/* <a href="" className="btn" onClick={handleViewCertificate}>View Certificate</a> */}
      </div>

      <div className="pricing___item best">
      {/* <span className="badge">Recommended</span> */}
      
        <img src={Image2} alt="" className="pricing___rimg" />
      <h3 className="pricing___plan">REACT JS</h3>
      <p className="pricing___title">Front-end JavaScript library</p>
      <p className="pricing___pricingsupport">Besant Technologies, Tambaram</p>
      {/* <h3 className="price">
        <em>₹ </em> 1000<span> Month</span>
      </h3> */}
      {/* <a href="" className="btn" target='_blank'> View Certificate</a> */}
      </div>

      <div className="pricing___item">
        <img src={Image3} alt="" className="pricing___jimg" />
      <h3 className="pricing___plan">Java</h3>
      <p className="pricing___title">
Core java & Advance java</p>
      <p className="pricing___pricingsupport">Besant Technologies, Tambaram</p>
      {/* <h3 className="price">
        <em>₹ </em> 1400<span> Month</span>
      </h3> */}
      {/* <a href="" className="btn"> View Certificate</a> */}
      </div>
    
     </div>
  </section>
    )
  }
export default Pricing;
