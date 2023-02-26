import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
       <a href="https://www.linkedin.com/in/antonrv" target="_blank"><BsLinkedin/></a>
       </div>
       <div>
       <a href="https://github.com/AntonR-github" target="_blank"><BsGithub/></a>
       </div>
     </div>
  )
}


export default SocialMedia