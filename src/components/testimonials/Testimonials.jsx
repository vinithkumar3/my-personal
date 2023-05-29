import React from 'react';
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
import "./testimonials.css";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image1,
    title: " kishore",
    subtitle: "Product designer at M.K Tech ",
    comment:
      "Web Designer  did a great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. 👍",
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section___title">Clients & Reviews</h2>

      <Swiper className="testimonials___container grid"

        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}

        pagination={{ clickable: true }}

      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial___item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className='testimonials___title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className="comment">{comment}</div>

            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
