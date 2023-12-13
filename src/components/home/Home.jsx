import React from 'react';
import "./home.css";
import Me from "../../assets/profile-pic.png"
import HeaderSocials from './HeaderSocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';

const FormDisplay = ({ formData }) => {

  // const [ portpolioName , setPortpolioName ] = useState("")

  //  useEffect(()=>{
  //      setEmailName(formData.username)
  //  },[formData.username])
  // //If you need to update state on value change.

  // useEffect(() => {
  //   if (formData && formData.username && formData.role) {
  //     setPortpolioName(formData.username);
  //     setPortpolioName(formData.role);
  //   }
  // }, [formData.username,formData.role ,formData]);

  //  const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home___img" />



        <h1 className="home___name" name="username">Vinith kumar Gnanaoli </h1>


        <span className="home___education">I'm Front-End Developer.
        </span><br></br>
        <span className="home___education">vinithkumarmkg3@gmail.com
        </span>

        

        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <Scrolldown />
      </div>
      <Shapes />
    </section>


  )
}
export default FormDisplay;
// export default Home;
