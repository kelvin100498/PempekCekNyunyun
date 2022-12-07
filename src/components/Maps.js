import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

export const Maps = () => {
  return (
    <div className='top-72 relative'>
      <motion.div
        variants={fadeIn('down', 'tween', 0.6, 1.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h2
          variants={fadeIn('down', 'tween', 0.2, 1.6)}
          className='h2 capitalize text-black max-w-[400px] text-center mx-auto'
        >
          --Our Location!--
        </motion.h2>
        <div className='container mx-auto'>
        <iframe
          style={{ width: '100%', height: '100%' }}
          class='gmap_iframe'
          frameborder='0'
          scrolling='yes'
          marginheight='0'
          marginwidth='0'
          src='https://maps.google.com/maps?width=600&amp;height=2048&amp;hl=en&amp;q=Pempek Cek nyunyun&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        />
      </div>
      </motion.div>

    
    </div>
  );
};
