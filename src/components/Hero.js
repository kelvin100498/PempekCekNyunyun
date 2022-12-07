import React from 'react';
// import data
import { heroData } from '../data';
// import components
import Header from './Header';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';

const Hero = () => {
  // destructure hero data
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className='min-h-[980px] bg-hero bg-[length:1680px_830px] bg-center'>
      {/* header */}
      <Header />
      <div className='container mx-auto min-h-[780px] flex justify-center items-center'>
        {/* text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial='hidden'
          whileInView={'show'}
          className='text-center flex flex-col items-center backdrop-blur-sm rounded-md' 
        >
          {/* pretitle */}
          <motion.div
            variants={fadeIn('down', 'tween', 0.2, 1.3)}
            className='text-white text-[24px] lg:text-[28px] italic font-primary lg:font-medium mb-1'
          >
            {pretitle}
          </motion.div>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 'tween', 0.3, 1.1)}
            className='font-mono mb-5 text-8xl font-bold text-white'
          >
            {title}
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className='text-white max-w-[540px] mb-8'
          >
            {subtitle}
          </motion.p>
          {/* button */}
          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
            <button className='btn'>{btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
