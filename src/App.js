import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Portpolio from './components/portpolio/Portpolio';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import CreateForm from './components/create portfolio/CreateForm';
import Payment from './components/payment/Payment';
function App() {
  return (
   <>
   <Sidebar/>
   <main className='main'>
    {/* <CreateForm/> */}
    <Home/>
    <About/>
    <Services/>
    <Resume/>
    <Portpolio/>
    <Pricing/>
    
    <Testimonials/>
    <Blog/>
    <Contact/>
   </main>
   </>
  );
}

export default App;
