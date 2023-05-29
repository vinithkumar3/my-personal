import React from 'react';
import "./blog.css";

import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
   <section className="blog container section" id="blog">
    <h2 className="section___title">Latest Posts</h2>
    <div className="blog___container grid">
      <div className="blog___card">
        <div className="blog___thumb">
          <a href="#" > <span className="blog___category">Reviews</span></a>
          <a href="#" ><img src={Image1} alt="" className="blog___img" /></a>
        </div>
        <div className="blog___details">
          <h3 className="blog___title">5 Best App Development Tool for Your Projects</h3>
          <div className="blog___meta">
            <span>09 February, 2022.</span>
            <span className="blog___dot"></span>
            <span> Vinith</span>
          </div>
        </div>
      </div>

      <div className="blog___card">
        <div className="blog___thumb">
          <a href="#" > <span className="blog___category">Tutorial</span></a>
          <a href="#" ><img src={Image2} alt="" className="blog___img" /></a>
        </div>
        <div className="blog___details">
          <h3 className="blog___title">Common Misconceptions About Payment</h3>
          <div className="blog___meta">
            <span>07 February, 2022.</span>
            <span className="blog___dot"></span>
            <span> Vinith</span>
          </div>
        </div>
      </div>

      <div className="blog___card">
        <div className="blog___thumb">
          <a href="#" > <span className="blog___category">Business</span></a>
          <a href="#" ><img src={Image3} alt="" className="blog___img" /></a>
        </div>
        <div className="blog___details">
          <h3 className="blog___title">3 Things to know about startup business</h3>
          <div className="blog___meta">
            <span>05 February, 2022.</span>
            <span className="blog___dot"></span>
            <span > Vinith</span>
          </div>
        </div>
      </div>
    </div> 
   </section>
  )
}

export default Blog
