import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client'  // sanity client import
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
      const [abouts, setAbouts] = useState([])

      useEffect(() => {
        const query = '*[_type == "abouts"]';  //query for fetching abouts
          
          client.fetch(query).then((data) => {
            setAbouts(data)
          });                 //populating data with abouts from backend
        }, []);
      
  return (
    <>
    <h2 className='head-text' id='about'>I am a fullstack developer with <span>A Passion</span> <br /> for <span>Learning and Creating</span></h2>
    
    <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, type: 'tween' }}
          className='app__profile-item'
          key={about.title + index}
          >
           <img src={urlFor(about.imgUrl)} alt={about.title} />
           <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
           <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
    </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
  );
