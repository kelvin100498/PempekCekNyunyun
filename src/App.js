import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
// import Team from './components/Team';
// import Testimonial from './components/Testimonial';
// import Reservation from './components/Reservation';
import Footer from './components/Footer';
import { Maps } from './components/Maps';

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu />
      {/* <Team /> */}
      {/* divider */}
      <div style={{marginTop : 60}}/>
      {/* divider */}
      <Maps/>
      {/* <Testimonial />
      <Reservation /> */}
      <Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
