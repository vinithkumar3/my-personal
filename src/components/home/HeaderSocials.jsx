import React from 'react'


const HeaderSocials = () => {
       
                const emailAddress = 'vinithkumarmkg3@gmail.com';
              
                const handleClick = () => {
                  window.location.href = `mailto:${emailAddress}`;
                };
  return (
    <div className='home___socials'>
        <a href="http://instagram.com/vinith_kumar_mkg?igshid=MzNINGNKZWQ4MG==" className="home___social-link" target="_blank" rel="noreferrer" >
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="
https://www.twitter.com/" className="home___social-link" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="
https://github.com/vinithkumar3" className="home___social-link" target="_blank" rel="noreferrer" >
        <i class="icon-social-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vinith-kumar-g-b8a649149" className="home___social-link" target="_blank" rel="noreferrer">
        <i class="icon-social-linkedin"></i>
        </a>
        <a href="https://www.pinterest.com/" className="home___social-link" target="_blank"  onClick={handleClick} rel="noreferrer">
       <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
      
    </div>
  )
}

export default HeaderSocials
