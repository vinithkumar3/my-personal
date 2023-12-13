import React from 'react';
import "./services.css";
import Image1 from"../../assets/service-1.svg";
import Image2 from"../../assets/service-2.svg";
// import Image3 from"../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI design",
    description:
      " Specialized in creating beautiful and smooth UI designs that provide better user experience.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      " Mobile-friendly, fast-loading and modern-looking website development services ",
  },
  // {
  //   id: 3,
  //   image: Image3,
  //   title: "Logo & Branding",
  //   description:
  //     " The right combination of colors, shapes and words will define your brand. Get the perfect logo and ensure your branding hits the spot.",
  // },
];
const Services = () => {
  return(
     <section className="services container section" id='services'>
    <h2 className="section___title">Services</h2>
    <div className="services___container grid">
      {data.map(({id,image,title,description})=>{
        return(
           <div className="services___card"key={id}>
            <img src={image} alt="" className="services___img" />
           <h3 className="services___title">{title}</h3>
           <p className="services___description">{description}</p>
           </div>

        );
      }
      )}
    </div>
  </section>
   ); 
};

export default Services
