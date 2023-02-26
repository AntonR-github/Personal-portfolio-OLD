import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import './Skills.scss'
import MotionWrap from './../../wrapper/MotionWrap';

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [experience, setExperience] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
    .then((data) => {
     
      setExperience(data);
    })

    client.fetch(skillsQuery)
    .then((data) => {

      setSkills(data);
    })

  }, [])

  return (
    <>
      <h2 className="head-text" id='skills'>Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
           <motion.div
           whileInView={{ opacity: [0, 1] }}
           transition={{ duration: 0.5 }}
           className='app__skills-item app__flex'
            key={skill.name}
           >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
           </motion.div> 
           ))}
        </motion.div>
        <div className='app__skills-exp'>
          {experience?.map(( experience) => (
            <motion.div
            className='app__skills-exp-item'
            key={experience.name}
            >
             <div className='app__skills-exp-year'>
                <p className="bold-text">{experience.name}</p>
             </div>
             <motion.div className='app__skills-exp-works'>
              {experience.works?.map((work) => (      
            <>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-exp-work'
              data-tip
              data-for={work.name}
              key={work.name}
              >
                <h4 className='bold-text'>{work.name}</h4>
                {/* <p className='p-text'>{work.desc}</p> */}
              </motion.div>
              <ReactTooltip 
              id={work.name} 
              arrowColor="#fff"
              effect="solid"
              className="skills-tooltip"
              >
                 {/* {work.desc} */}
              </ReactTooltip> 
            </>
              ))}
             </motion.div>
            </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
  );